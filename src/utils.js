import moment from 'moment';

export const getRankingTimeframeInterval = (timeframeSelector) => {
  if (timeframeSelector === 'week') {
    return {
      start: moment().startOf('isoWeek'),
      stop: moment(),
    };
  }
  return {
    // start: moment().subtract(1, 'months'),
    start: moment().startOf('month'),
    stop: moment(),
  };
};

export const computeRanking = (profiles, timeframeSelector) => {
  const { start, stop } = getRankingTimeframeInterval(timeframeSelector);

  return profiles
    .filter(profile => profile.registered)
    .map(profile => ({
      id: profile.id.toString(),
      name: profile.full_name,
      points: profile.received_rewards.reduce((total, reward) => {
        const creation = moment(reward.created_at);
        if (creation.isBetween(start, stop, 'day', '[]')) { // last param for day inclusion
          return total + reward.points;
        }
        return total;
      }, 0),
      picture: profile.avatar,
    })).sort((a, b) => b.points - a.points);
};
