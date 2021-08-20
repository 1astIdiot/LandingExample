import * as React from 'react';
import styled from '@emotion/styled';

import { colors } from 'styles/variables';

import Typography from './Typography';
import IError from 'icons/IError';

interface StyledCheckmarkProps {
  error?: boolean;
}

const StyledCheckmark = styled.span<StyledCheckmarkProps>`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border: 1px solid;
  border-color: ${props => props.error ? colors.error : colors.miscellaneous.gray300};
  border-radius: 2px;
  background-color: ${colors.white};
`;

const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ ${StyledCheckmark} {
    background-color: ${colors.forestGreen100};
    border-color: ${colors.forestGreen100};

    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0px;
      left: 4px;
      transform: rotate(45deg);
      height: 11px;
      width: 6px;
      border-bottom: 3px solid white;
      border-right: 3px solid white;
    }
  }

  &:disabled ~ ${StyledCheckmark} {
    pointer-events: none;
    background-color: ${colors.disabled}
  }
`;

interface StyledLabelProps {
  error?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: flex;
  position: relative;
  width: fit-content;
  padding-left: 36px;
  color: ${props => props.error ? colors.error : colors.header};

  &:hover {
    cursor: pointer;

    ${StyledCheckmark} {
      border-color: ${colors.forestGreen200};
    }
  }
`;

const ErrorIconContainer = styled.div`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    className,
    checked,
    label,
    error,

    ...rest
  } = props;

  return (
    <StyledLabel error={!!error}>
      {!!error && <ErrorIconContainer title={error}><IError /></ErrorIconContainer>}

      <StyledCheckbox className={className} type='checkbox' checked={checked} {...rest} />
      <StyledCheckmark error={!!error} />

      <Typography variant='body2'>
        {label}
      </Typography>
    </StyledLabel>
  );
};

export default Checkbox;

