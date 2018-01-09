/* eslint-disable no-nested-ternary */

import styles from 'styled-components';
import { neutrals } from '../../../styles/theme';

export const StyledProfilePicDefault = styles.span`
  border-radius: 50%;
  display: flex;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: ${neutrals.dark};
  font-size: ${props => (props.size < 49 ? (props.size < 30 ? 10 : 12) : 20)}px;
`;

export const StyledProfilePicImg = styles.img`
  border-radius: 50%;
  display: block;
`;
