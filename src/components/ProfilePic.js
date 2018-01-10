import React from 'react';
import PropTypes from 'prop-types';

import styles from 'styled-components';
import { neutrals } from '../theme';

const StyledProfilePicDefault = styles.span`
  border-radius: 50%;
  display: flex;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: ${neutrals.dark};
  font-size: 12px;
`;

export const StyledProfilePicImg = styles.img`
  border-radius: 50%;
  display: block;
`;


const getInitials = (name) => {
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
