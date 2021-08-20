import * as React from 'react';
import styled from '@emotion/styled';

import { typography } from 'styles/variables';
import { TypographyVariants } from 'types/typography';

const StyledTypography = styled.div``;

interface TypographyProps {
  className?: string;
  variant?: TypographyVariants;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    children,
    className,
    variant = 'body1',
  } = props;

  const style = typography[variant];

  return (
    <StyledTypography className={className} css={style}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
