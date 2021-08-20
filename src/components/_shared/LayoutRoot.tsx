import * as React from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

import normalize from 'styles/normalize';

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

interface LayoutRootProps {
  className?: string;
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);

export default LayoutRoot;
