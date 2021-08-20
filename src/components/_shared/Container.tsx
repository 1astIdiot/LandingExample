import * as React from 'react';
import styled from '@emotion/styled';
import { breakpoints, widths } from 'styles/variables';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: ${widths.xl}px;
  margin-bottom: 140px;

  @media (min-width: ${widths.xs}px) and (max-width: ${widths.sm}px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 80px;
  }

  @media (width: ${breakpoints.sm}px) {
    width: 576px;
  }

  @media (width: ${breakpoints.md}px) {
    width: 768px;
  }

  @media (width: ${breakpoints.lg}px) {
    width: 992px;
  }

  @media (width: ${breakpoints.xl}px) {
    width: 1200px;
  }
`;

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
