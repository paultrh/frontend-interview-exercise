import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal as ROModal } from 'react-overlays';

import { neutrals, spacings, resetButton } from '../theme';
import logo from '../logo.svg';

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};

const backdropStyle = {
  zIndex: '0',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(26, 31, 36, 0.9)',
};

const StyledContent = styled.div`
  z-index: 1;
  outline: none;
`;

const StyledClose = styled.button`
  ${resetButton()}
  position: absolute;
  top: ${spacings.l}px;
  right: ${spacings.l}px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
`;

const StyledLogo = styled.img`
  margin: ${spacings.l}px auto ${spacings.m}px auto;
`;

const StyledBlock = styled.div`
  border-radius: 6px;
  padding: 40px 120px 16px;
  text-align: center;
  background: ${neutrals.lightest};
  max-width: 670px;
  border-radius: 8px;
`;

// Compatibility with react@16 !
class ROM extends ROModal {
  focus = () => {};
}

const Modal = ({
  children,
  show,
  onHide,
}) => (
  <ROM
    aria-labelledby="modal"
    show={show}
    style={modalStyle}
    backdropStyle={backdropStyle}
    onEscapeKeyDown={onHide}
    onBackdropClick={onHide}
    onHide={onHide}
  >
    <StyledContent>
      <StyledBlock>
        <StyledLogo src={logo} width="88" alt="Pukka Logo" />
        {children}
      </StyledBlock>
      <StyledClose onClick={onHide}>
        ESC
      </StyledClose>
    </StyledContent>
  </ROM>
);

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  show: false,
  onHide: () => null,
};

export default Modal;
