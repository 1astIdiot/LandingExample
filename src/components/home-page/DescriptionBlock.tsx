import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import { Container, Typography } from 'components';

const Wrapper = styled(Container)`
  flex-direction: row;
`;

const Title = styled<React.FC>((props) => <Typography variant='h1' {...props} />)`
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 480px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.005em;
    text-align: left;

    margin-bottom: 30px;
  }
`;

const Text = styled<React.FC>((props) => <Typography variant='body1' {...props} />)`
  width: 486px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 287px;
    //styleName: Body 1;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;

  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding-left: 127px;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-left: inherit;
    margin-left: 16px;
    margin-right: 18px;
    margin-bottom: 50px;
  }
`;

const RobotImageStyles = css`
  margin-right: -8px;
`;

const DescriptionBlock: React.FC = () => {

  return (
    <Wrapper>
      <TextContainer>
        <Title>
          Что такое робот?
        </Title>

        <Text>
          Определение от International Federation of Robotics (далее — IFR): «Робот — это рабочий механизм, программируемый
          по нескольким осям некоторой степенью автономности
          и способный передвигаться в пределах определённой среды, выполняя поставленные задачи».
          <br />
          <br />
          В производстве роботы - это многоосевые манипуляторы («руки») со сменными инструментами, от обычного захвата
          до отвертки или сварочного аппарата.
        </Text>
      </TextContainer>

      <StaticImage css={RobotImageStyles} src='../../images/robot1.png' alt='robot' />
    </Wrapper>
  );
};

export default DescriptionBlock;
