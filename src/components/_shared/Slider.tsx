import * as React from 'react';
import SlickSlider from 'react-slick';
import styled from '@emotion/styled';

import IArrow from 'icons/IArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { colors } from 'styles/variables';

const StyledSliderContainer = styled.div`
  width: calc(100% + 24px);
`;

const StyledContainer = styled(StyledSliderContainer)`
  display: flex;
`;

const StyledIArrow = styled(IArrow)`
  color: ${colors.forestGreen100};

  &:hover, &:focus {
    color: ${colors.forestGreen300};
  }
`;

const StyledIArrowLeft = styled(StyledIArrow)`
  transform: rotate(180deg);
`;

interface ContainerProps {
  className?: string;
}

const Slider: React.FC<ContainerProps> = (props) => {
  const { children } = props;

  const childrenCount = React.Children.count(children);

  return (
    <>
      {childrenCount > 3 ? (
        <StyledSliderContainer>
          <SlickSlider
            initialSlide={0}
            slidesToShow={4}
            nextArrow={<StyledIArrow />}
            prevArrow={<StyledIArrowLeft />}
          >
            {children}
          </SlickSlider>
        </StyledSliderContainer>
      ) : (
        <StyledContainer>
          {children}
        </StyledContainer>
      )}
    </>
  );
};

export default Slider;
