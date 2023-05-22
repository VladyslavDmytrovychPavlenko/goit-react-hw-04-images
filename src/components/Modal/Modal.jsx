import React, { useEffect, useCallback } from 'react';
import { Overlay, Mod } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ closeFn, children }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeFn();
      }
    },
    [closeFn]
  );

  const handleBackdrop = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        closeFn();
      }
    },
    [closeFn]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Overlay onClick={handleBackdrop}>
      <Mod>{children}</Mod>
    </Overlay>
  );
};

Modal.propTypes = {
  closeFn: PropTypes.func.isRequired,
  loader: PropTypes.func.isRequired,
};

export default Modal;
