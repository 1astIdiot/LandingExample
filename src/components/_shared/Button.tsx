import * as React from 'react';
import { css, SerializedStyles } from '@emotion/react';

import { colors } from 'styles/variables';
import { TypographyVariants } from 'types/typography';

import Typography from './Typography';

const normalButtonStyles = css`
  width: fit-content;
  padding: 11px 20px;
  border: none;
  border-radius: 6px;
  background-color: ${colors.forestGreen100};
  color: ${colors.white};
  outline: none;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);

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

const textButtonStyles = css`
  width: fit-content;
  padding: 0;
  border: none;
  background-color: unset;
  color: ${colors.teal200};
  outline: none;

  &:hover, &:focus {
    color: ${colors.teal300};
    cursor: pointer;
  }

  &:active {
    color: ${colors.teal100};
  }

  &:disabled {
    pointer-events: none;
    color: ${colors.miscellaneous.gray200};
  }
`;

const variants: {
  [key: string]: {
    styles: SerializedStyles;
    typography: TypographyVariants;
  }
} = {
  normal: {
    styles: normalButtonStyles,
    typography: 'button',
  },
  text: {
    styles: textButtonStyles,
    typography: 'body1',
  },
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'normal' | 'text';
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant = 'normal',
    ...rest
  } = props;

  return (
    <button css={variants[variant].styles} className={className} {...rest}>
      <Typography variant={variants[variant].typography}>
        {children}
      </Typography>
    </button>
  );
};

export default Button;


