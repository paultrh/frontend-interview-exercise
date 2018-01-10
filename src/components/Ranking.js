import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { computeRanking } from '../utils';


import Toggle from './Toggle';
import ProfilePic from './ProfilePic';

import {
  StyledRanking,
  StyledPoints,
  StyledImg,
  StyledContainer,
  StyledHeader,
  StyledContent,
} from './Ranking.styles';


class Ranking extends PureComponent {
  static propTypes = {
    profiles: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    profiles: [],
  }

  constructor(props) {
    super(props);

    this.state = {
      period: 'month',
    };
  }

  handlePeriodChange = (period) => {
    this.setState({
      period,
    });
  }

  render() {
    const { period } = this.state;
    const profiles = computeRanking(this.props.profiles, period);

    return (
      <StyledContainer>
        <StyledHeader>
          <h1>Classement</h1>
          <Toggle
            value={period}
            options={{ month: 'Ce mois ci', week: 'Cette semaine' }}
            onChange={this.handlePeriodChange}
          />
        </StyledHeader>
        <StyledContent>
          <StyledRanking>
            {profiles.map(user => (
              <li key={user.id}>
                <StyledImg>
                  <ProfilePic size={48} userName={user.name} picture={user.picture} />
                </StyledImg>
                {user.name}
                <StyledPoints>
                  {user.points}pts
                </StyledPoints>
              </li>
            ))}
          </StyledRanking>
        </StyledContent>
      </StyledContainer>
    );
  }
}

export default Ranking;
