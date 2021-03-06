import * as React from 'react';
import styled from '@emotion/styled';

import { heights } from 'styles/variables';

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  margin-top: ${heights.header};
`;

interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>;

export default Page;
