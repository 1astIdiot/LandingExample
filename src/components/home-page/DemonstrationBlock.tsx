import React from 'react';
import styled from '@emotion/styled';

import { Button, Container, Typography } from 'components';
import { colors } from 'styles/variables';
import imageHighFive from 'images/high-five.png';

const Wrapper = styled(Container)`
  flex-direction: row;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  //margin-left: 16px;
  //margin-right: 18px;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 128px;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 85%;

    padding: 0;
    margin-top: 50px;
    //margin-left: 16px;
    //margin-right: 18px;
  }
`;

const Title = styled<React.FC>((props) => <Typography variant='h1' {...props} />)`
  margin-bottom: 40px;
  color: ${colors.header};

  @media (min-width: 320px) and (max-width: 480px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: left;
  }
`;

const Text = styled<React.FC>((props) => <Typography variant='body1' {...props} />)`
  margin-bottom: 50px;
`;

interface Props {
  showRequestModal: () => void;
}

const DemonstrationBlock = (props: Props) => {
  const {
    showRequestModal,
  } = props;

  return (
    <Wrapper>
      <ImageContainer>
        <img
          src={imageHighFive}
          alt='High five'
          width={((typeof window !== "undefined")) ? window.screen.width >= 320 && window.screen.width <= 480 ? '100%' : 484 : '100%'}
          height={(typeof window !== "undefined") ? (window.screen.width >= 320 && window.screen.width <= 480) ? 'auto' : 368 : 'auto'}
        />
      </ImageContainer>

      <DescriptionContainer>
        <Title>
          Кобот у Вас в гостях!
        </Title>

        <Text>
          Лучше один раз увидеть, чем сто раз прочитать. <br />
          Устроим онлайн показ работы паллетайзера. <br />
          Приедем к вам на предприятие и вживую продемонстрируем
          работу кобота на участке! <br />
          Ответим на все вопросы.
        </Text>

        <Button onClick={showRequestModal}>
          Пригласить нас
        </Button>

      </DescriptionContainer>
    </Wrapper>
  );
};

export default DemonstrationBlock;
