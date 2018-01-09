import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledProfilePicDefault,
  StyledProfilePicImg,
} from './ProfilePic.styles';

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const getInitials = (name) => {
  if (name.match(EMAIL_REGEX)) {
    return (name.charAt(0) || '').toUpperCase();
  }
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
};

const ProfilePic = ({
  picture,
  userName,
  size,
}) => (
  picture ?
    <StyledProfilePicImg src={picture} width={size} height={size} alt={userName} />
    :
    <StyledProfilePicDefault size={size}>{getInitials(userName)}</StyledProfilePicDefault>
);

ProfilePic.defaultProps = {
  picture: null,
  size: 54,
};

ProfilePic.propTypes = {
  userName: PropTypes.string.isRequired,
  picture: PropTypes.string,
  size: PropTypes.number,
};

export default ProfilePic;
