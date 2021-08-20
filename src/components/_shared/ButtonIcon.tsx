import * as React from 'react';

import { colors } from 'styles/variables';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 6px;
  background-color: none;
  color: ${colors.text};
  outline: none;

  @media (min-width: 320px) and (max-width: 480px) {
    visibility: visible;
    opacity: 1;
  }

  &:hover, &:focus {
    background-color: ${colors.forestGreen200};
    cursor: pointer;
  }

  &:active {
    background-color: ${colors.forestGreen300};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${colors.disabled};
  }
`;

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const {
    children,
    className,

    ...rest
  } = props;

  return (
    <StyledButton className={className} {...rest}>
      {children}
    </StyledButton>
  );
};

export default ButtonIcon;
