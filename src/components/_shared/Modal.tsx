import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';

import { ButtonIcon } from 'components';

import { breakpoints, colors } from 'styles/variables';
import ITimes from 'icons/ITimes';

import Portal from './Portal';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 588px;
  min-height: 160px;
  max-height: 95vh;
  background-color: ${colors.white};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
`;

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${transparentize(0.5, colors.black)};

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    height: 100%;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;

  &:hover {
    background: none;
  }
`;

interface ModalProps {
  onClose: () => void;
  closeOnClickOutside?: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    onClose,
    closeOnClickOutside = true,
  } = props;

  const wrap = useRef<HTMLDivElement>(null);

  const onEscPress = (e: KeyboardEvent) => e.key === 'Escape' && onClose();

  useEffect(() => {
    document.addEventListener('keydown', onEscPress);

    return () => {
      document.removeEventListener('keydown', onEscPress);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Backdrop
      onClick={(e) => {
        if (e.target === wrap.current) {
          closeOnClickOutside && onClose();
        }
      }}
      ref={wrap}
    >
      <StyledContainer>
        {children}

        <StyledButtonIcon onClick={onClose}>
          <ITimes />
        </StyledButtonIcon>

      </StyledContainer>
    </Backdrop>
  );
};

export interface ModalContainerProps extends ModalProps {
  isShown: boolean;
  isPortal?: boolean;
}

const ModalContainer: React.FC<ModalContainerProps> = (props) => {
  const {
    isShown,
    isPortal = false,

    ...rest
  } = props;

  return (
    <>
      {isPortal ? (
        <Portal>
          {isShown && <Modal {...rest} />}
        </Portal>
      ) : (
        <>
          {isShown && <Modal {...rest} />}
        </>
      )}
    </>
  );
};

export default ModalContainer;
