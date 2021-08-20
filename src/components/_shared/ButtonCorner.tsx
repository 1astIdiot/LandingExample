import * as React from 'react';
import styled from '@emotion/styled';

import { colors } from 'styles/variables';

const StyledButtonCorner = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 0 0 0 30px;
  background-color: ${colors.teal100};
  color: ${colors.white};
  outline: none;

  &:hover, &:focus {
    background-color: ${colors.teal200};
    cursor: pointer;
  }

  &:active {
    background-color: ${colors.teal300};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${colors.disabled};
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 8.7px;
  border-color: transparent transparent transparent ${colors.white};
  transform: translate(4px, -3px);
`;

interface ButtonCornerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const ButtonCorner: React.FC<ButtonCornerProps> = (props) => {
  const {
    className,
    ...rest
  } = props;

  return (
    <StyledButtonCorner className={className} {...rest}>
      <Triangle />
    </StyledButtonCorner>
  );
};

export default ButtonCorner;

