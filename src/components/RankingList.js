import React from 'react';
import PropTypes from 'prop-types';

import UserTooltip from '../UserInfo/UserInfoTooltip';

import {
  StyledRanking,
  StyledPoints,
  StyledImg,
} from './Ranking.styles';

const RankingList = ({
  users,
}) => (
  <StyledRanking>
    {users.map(user => (
      <li key={user.id}>
        <StyledImg>
          <UserTooltip {...user} />
        </StyledImg>
        {user.name}
        <StyledPoints>
          {user.points}pts
        </StyledPoints>
      </li>
    ))}
  </StyledRanking>
);

Ranking.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    points: PropTypes.number,
    groups: PropTypes.arrayOf(PropTypes.object),
    picture: PropTypes.string,
  })),
};

Ranking.defaultProps = {
  users: [],
};

export default RankingList;
