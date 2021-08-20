import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Button, Container, Typography } from 'components';

import introVideo from 'assets/intro.mp4';
import introImage from 'assets/image_5.png';

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

const BackgroundVideoContainer = styled.div`
  display: flex;
  width: 1100px;
  height: 620px;
  margin-left: -200px;
  position: relative;
  overflow: hidden;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin-left: 0px;
  }
`;

const BackgroundImageContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const BackgroundImage = styled.image`
  //position: absolute;
  //top: 52%;
  //left: 55%;
  //transform: translate(-50%, -50%);
  //z-index: -1;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 52%;
  left: 55%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const IntroTextContainer = styled.div`
  width: 50%;
  z-index: 1;
  position: absolute;
  left: 50%;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    width: auto;

    margin-top: 50px;
    //margin-left: 16px;
    //margin-right: 18px;
    margin-bottom: 0px;
    left: inherit;
  }
`;

const IntroTextHeader = styled<React.FC>((props) => <Typography variant='h0' {...props} />)`
  visibility: hidden;
  margin-bottom: 40px;
  opacity: 0;
  transition: 1s opacity;

  @media (min-width: 320px) and (max-width: 480px) {
    opacity: 1;
    visibility: visible;
    font-size: 24px;
    line-height: 28px;

    width: 85%;

    margin-bottom: 30px;
  }
`;

const FeaturesList = styled.ul`
  visibility: hidden;
  margin-bottom: 60px;
  opacity: 0;
  transition-property: opacity;
  transition-delay: 1s;

  @media (min-width: 320px) and (max-width: 480px) {
    visibility: visible;
    opacity: 1;
    margin-bottom: 40px;
    width: 85%;
  }
`;

const StyledButton = styled(Button)`
  visibility: hidden;
  opacity: 0;
  transition-property: opacity;
  transition-delay: 2s;

  @media (min-width: 320px) and (max-width: 480px) {
    visibility: visible;
    opacity: 1;
  }
`;

const featuresList = [
  '10-летний опыт автоматизации, а также',
  'множество выполненных проектов',
  'большая команда специалистов',
  'работаем с мировыми лидерами производителей коботов',
];

interface IntroBlockProps {
  showRequestModal: () => void;
}

const IntroBlock: React.FC<IntroBlockProps> = (props) => {
  const {
    showRequestModal,
  } = props;

  const [isTextShown, toggleTextShown] = useState<boolean>(false);

  const textShowStyles = isTextShown && css`
    visibility: visible;
    opacity: 1;

  `;

  if (typeof window === "undefined") { return(<></>); }

  return (
    <Wrapper>
        {
          (typeof window === "undefined") ?
            (
                <BackgroundImageContainer>
                  <BackgroundImage>
                    <img src={introImage} alt="img" />
                  </BackgroundImage>
                </BackgroundImageContainer>
            )
            : (window.screen.width >= 320 && window.screen.width <= 480) ? (
                <BackgroundImageContainer>
                  <BackgroundImage>
                    <img src={introImage} alt="img" />
                  </BackgroundImage>
                </BackgroundImageContainer>
              )
            : (
          <BackgroundVideoContainer>
          <BackgroundVideo
          onPause={() => toggleTextShown(true)}
          autoPlay
          muted
          >
          <source src={introVideo} />
          </BackgroundVideo>
          </BackgroundVideoContainer>
          )
        }

      <IntroTextContainer>
        <IntroTextHeader css={textShowStyles}>
          Forest Valley Robotics – интегратор коллаборативных роботов
        </IntroTextHeader>

        <FeaturesList
          css={textShowStyles}
        >
          {featuresList.map(item => (
            <li key={item}>
              <Typography variant='body1'>
                – {item}
              </Typography>
            </li>
          ))}
        </FeaturesList>

        <StyledButton
          css={textShowStyles}
          onClick={() => showRequestModal()}
        >
          Получить консультацию
        </StyledButton>
      </IntroTextContainer>
    </Wrapper>
  );
};

export default IntroBlock;
