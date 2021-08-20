/* eslint-disable max-len */

import { css } from '@emotion/react';

export const colors = {
  emeraldGreen100: '#004D40',
  forestGreen100: '#57B521',
  forestGreen200: '#45911B',
  forestGreen300: '#33691E',
  teal100: '#60C59B',
  teal200: '#489B79',
  teal300: '#277D5A',
  success: '#60C59B',
  warning: '#FFB950',
  error: '#EB4F45',
  disabled: '#BFBFBF',

  miscellaneous: {
    blue100: '#C7E9F9',
    blue200: '#AEE1FA',
    blue300: '#8ACDEE',
    gray100: '#F0F5F8',
    gray200: '#BFBFBF',
    gray300: '#C8CFD5',
    gray400: '#EBECEC',
    gray500: '#84888A',
    gray600: '#EDF0F2',
    gray700: '#CDD5DB',
    gray800: '#4C4C4C',
    gray900: '#CCD5D5',
    green100: '#E1F6D1',
    green200: '#C4E9AE',
    green300: '#ABD891',
    green400: `#126040`,
    yellow100: '#FCFCE9',
    yellow200: '#FFB950',
  },
  white: '#fff',
  black: '#000',
  header: '#212121',
  text: '#4D4D4D',
};

export const fonts = {
  sansSerif: '"Roboto", sans-serif',
};

export const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const widths = {
  xs: 320,
  sm: 480,
  md: 720,
  lg: 960,
  xl: 1200,
};

export const dimensions = {
  fontSize: {
    caption: '12px',
    button: '14px',
    body2: '14px',
    body1: '16px',
    subtitle1: '18px',
    subtitle2: '18px',
  },
  headingSizes: {
    h0: '40px',
    h1: '40px',
    h2: '24px',
    h3: '20px',
  },
  weights: {
    thin: 300,
    normal: 400,
    normal1: 500,
    bold: 700,
    rich: 900,
  },
  letterSpacings: {
    normal: '0.005em',
  },
  lineHeight: {
    caption: '120%',
    button: '16px',
    body1: '160%',
    body2: '120%',
    subtitle1: '120%',
    subtitle2: '120%',
    h0: '47px',
    h1: '100%',
    h2: '120%',
    h3: '120%',
  },
  containerPadding: 1.5,
};

export const heights = {
  header: '85px',
  footer: '120px',
};

export const typography = {
  caption: css`
    font-size: ${dimensions.fontSize.caption};
    line-height: ${dimensions.lineHeight.caption};
    font-weight: ${dimensions.weights.thin};
  `,
  button: css`
    font-size: ${dimensions.fontSize.button};
    line-height: ${dimensions.lineHeight.button};
    font-weight: ${dimensions.weights.normal};
  `,
  body1: css`
    font-size: ${dimensions.fontSize.body1};
    line-height: ${dimensions.lineHeight.body1};
    font-weight: ${dimensions.weights.normal};
    letter-spacing: unset;
  `,
  body2: css`
    font-size: ${dimensions.fontSize.body2};
    line-height: ${dimensions.lineHeight.body2};
    font-weight: ${dimensions.weights.thin};
  `,
  subtitle1: css`
    font-size: ${dimensions.fontSize.subtitle1};
    line-height: ${dimensions.lineHeight.subtitle1};
    font-weight: ${dimensions.weights.normal};
  `,
  subtitle2: css`
    font-size: ${dimensions.fontSize.subtitle2};
    line-height: ${dimensions.lineHeight.subtitle2};
    font-weight: ${dimensions.weights.normal};
  `,
  h0: css`
    font-size: ${dimensions.headingSizes.h0};
    line-height: ${dimensions.lineHeight.h0};
    font-weight: ${dimensions.weights.bold};
  `,
  h1: css`
    font-size: ${dimensions.headingSizes.h1};
    line-height: ${dimensions.lineHeight.h1};
    font-weight: ${dimensions.weights.normal1};
  `,
  h2: css`
    font-size: ${dimensions.headingSizes.h2};
    line-height: ${dimensions.lineHeight.h2};
    font-weight: ${dimensions.weights.normal1};
    text-transform: uppercase;
  `,
  h3: css`
    font-size: ${dimensions.headingSizes.h3};
    line-height: ${dimensions.lineHeight.h3};
    font-weight: ${dimensions.weights.normal1};
  `,
};

export const StylesForScrollbar = css`
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colors.white};
    border: 1px solid ${colors.miscellaneous.gray100},
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.miscellaneous.gray200};
    border-radius: 10px;
    background-clip: content-box;
  }
`;
