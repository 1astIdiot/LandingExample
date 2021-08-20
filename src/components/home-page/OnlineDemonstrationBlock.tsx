import React from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

import { Button, Container, Typography } from 'components';

import { colors } from 'styles/variables';
import { css } from '@emotion/react';

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  position: relative;
`;

const Title = styled<React.FC>((props) => <Typography variant='h1' {...props} />)`
  margin-bottom: 40px;
  color: ${colors.header};
  text-align: center;
`;

const Text = styled<React.FC>((props) => <Typography variant='body1' {...props} />)`
  width: 384px;
  margin-bottom: 90px;
  text-align: center;
`;

const PauseButtonIcon = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  margin-bottom: 83px;
  border-radius: 50%;
  background-color: ${colors.white};

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 12px;
    background: linear-gradient(
      90deg,
      ${colors.miscellaneous.gray800} 40%,
      ${colors.white} 40%,
      ${colors.white} 60%,
      ${colors.miscellaneous.gray800} 60%
    );
  }
`;

const CircleWithFlare = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 50%;
  border: 7px solid ${colors.miscellaneous.gray900};

  &:before, &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  &:before {
    width: 12px;
    height: 12px;
    background-color: ${colors.forestGreen100};
  }

  &:after {
    width: 3px;
    height: 3px;
    left: 9px;
    top: 7px;
    background-color: ${colors.white};
  }
`;

const StyledImageHeadsetStyles = css`
  position: absolute;
  top: 0;
  left: 52%;
  transform: translateX(-50%);
  z-index: 2;
`;

const StyledImageWavesStyles = css`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  padding-top: 51px;
`;

const OnlineDemonstrationBlock: React.FC = () => {

  return (
    <Wrapper>
      <StaticImage
        css={StyledImageHeadsetStyles}
        src='../../images/headset.png'
        alt='headset'
      />

      <StaticImage
        css={StyledImageWavesStyles}
        src='../../images/waves.png'
        alt='sound-waves'
      />

      <ContentContainer>
        <CircleWithFlare />

        <Title>
          Онлайн <br />
          демонстрация
        </Title>

        <Text>
          Коротко о мероприятии, что это, как проходит, какие вопросы поднимают.
          Предложение подать заявку на участие на ближайший мит. Макс 130 символов с пробелами
        </Text>

        <PauseButtonIcon />

        <Button>
          Принять участие
        </Button>
      </ContentContainer>
    </Wrapper>
  );
};

export default OnlineDemonstrationBlock;
