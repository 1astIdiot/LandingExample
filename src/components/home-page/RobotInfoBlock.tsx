import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import { Container, Typography } from 'components';
import { colors } from 'styles/variables';

const Wrapper = styled(Container)`
  position: relative;
  align-items: center;
  margin-top: 262px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 0;
  }
`;

const Title = styled<React.FC>((props) => <Typography variant='h2' {...props} />)`
  margin-bottom: 24px;
  color: ${colors.header};

  @media (min-width: 320px) and (max-width: 480px) {
    width: 85%;

    margin-top: 30px;

    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: left;

  }
`;

const Text = styled<React.FC>((props) => <Typography variant='body1' {...props} />)`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 85%;

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

const DescriptionContainer = styled.div`
  width: 1020px;
  padding: 50px 77px 60px 280px;
  background: linear-gradient(96.56deg, rgba(199, 233, 249, 0.312) 33.41%, rgba(232, 245, 233, 0.8) 62.54%);

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    padding-bottom: 70px;
  }
`;

const RobotImageStyles = css`
  position: absolute;
  left: 0;
  top: -122px;

  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    left: auto;
    top: auto;
  }
`;

const RobotInfoBlock: React.FC = () => {
  return (
    <Wrapper>
      <DescriptionContainer>
        <StaticImage
          css={RobotImageStyles}
          src='../../images/robot4.png'
          alt='robot'
        />
        <Title>
          Защита роботов от пыли и влаги
        </Title>
        <Text>
          Промышленные роботы и коботы защищены по стандарту от IP54 до IP69.
          Показатели свыше IP54 достигаются как конструктивно, так и с применением специальных
          гибких кожухов. Роботы подходят для использования в пищевой промышленности, больничных
          палатах и чистых комнатах (лаборатории, операционные и тп). Практически все модели можно
          подвергнуть мойке струей воды.
        </Text>
      </DescriptionContainer>
    </Wrapper>
  );
};

export default RobotInfoBlock;
