import React, { PureComponent } from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';

import { spacings, neutrals } from '../theme';

import ProfilePic from './ProfilePic';

const StyledUserInfo = styles.div`
  text-align: center;
  font-size: 15px;
  padding: ${spacings.m}px 0;
`;

const StyledUserPic = styles.div`
  img {
    margin: 0 auto ${spacings.m}px auto;
    display: block;
  }

  span {
    margin: 0 auto ${spacings.m}px auto;
  }
`;

const StyledRole = styles.p`
  font-size: 11px;
  color: ${neutrals.dark};
  margin-top: ${spacings.xs}px;
`;

const StyledPoints = styles.div`
  margin-top: ${spacings.m}px;
`;

const StyledPointsLabel = styles.p`
  font-size: 11px;
  color: ${neutrals.dark};
  margin-top: ${spacings.xs}px;
`;

const StyledPointsCount = styles.p`
  margin: 0;
  font-size: 19px;
`;


class UserInfo extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
    userRole: PropTypes.string,
    points: PropTypes.number,
  };

  static defaultProps = {
    userRole: null,
    name: '',
    picture: null,
    points: 0,
  };

  render() {
    const {
      name,
      picture,
      userRole,
      points,
    } = this.props;

    return (
      <StyledUserInfo>
        <StyledUserPic>
          <ProfilePic picture={picture} size={68} userName={name} />
        </StyledUserPic>
        <p>{name}</p>
        {userRole &&
          <StyledRole>{userRole}</StyledRole>
        }
        {points > 0 &&
          <StyledPoints>
            <StyledPointsCount>{points}</StyledPointsCount>
            <StyledPointsLabel>Points</StyledPointsLabel>
          </StyledPoints>
        }
      </StyledUserInfo>
    );
  }
}

export default UserInfo;
