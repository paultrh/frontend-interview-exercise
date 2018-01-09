import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip/TooltipSimple';
import ProfilePic from '../ProfilePic/ProfilePic';
import UserInfo from './UserInfo';

const UserInfoTooltip = props => (
  <Tooltip
    tooltipContent={<UserInfo {...props} />}
    placement="bottom"
    theme="light"
    width={165}
    size="m"
  >
    <ProfilePic size={props.size} userName={props.name} picture={props.picture} />
  </Tooltip>
);

UserInfoTooltip.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  size: PropTypes.number,
};

UserInfoTooltip.defaultProps = {
  size: 48,
  name: '',
  picture: null,
};

export default UserInfoTooltip;
