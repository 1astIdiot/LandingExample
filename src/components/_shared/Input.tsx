import * as React from 'react';
import styled from '@emotion/styled';

import { colors, typography } from 'styles/variables';
import IError from 'icons/IError';

const InputContainer = styled.div`
  position: relative;
  width: fit-content;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ErrorIconContainer = styled.div`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translate(-50%, -50%);
`;

interface StyledInputProps {
  error?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  width: fit-content;
  padding: 12px 19px;
  border: 1px solid;
  border-color: ${props => props.error ? colors.error : colors.miscellaneous.gray300};
  border-radius: 6px;
  background-color: ${colors.white};
  color: ${colors.header};
  outline: none;

  &:hover, &:focus {
    border-color: ${colors.forestGreen200};
  }

  &:disabled {
    pointer-events: none;
  }
`;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    error,
    ...rest
  } = props;

  return (
    <InputContainer>
      {!!error && <ErrorIconContainer title={error}><IError /></ErrorIconContainer>}

      <StyledInput
        css={typography.body2}
        className={className}
        error={!!error}

        {...rest}
      />
    </InputContainer>
  );
};

export default Input;
