import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Button, Container, Typography } from 'components';
import { automationItems } from 'constants/home-page';
import { colors } from 'styles/variables';
import { AutomationIdTypes } from 'types/home-page';
import AutomationModal from './AutomationModal';

const Wrapper = styled(Container)`
  align-items: center;
`;

const Title = styled<React.FC>((props) => <Typography variant='h1' {...props} />)`
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-left: 16px;
    margin-right: 18px;

    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: center;

  }
`;

const Text = styled<React.FC>((props) => <Typography variant='body1' {...props} />)`
  margin-bottom: 60px;
  padding: 0 220px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;

    margin-left: 16px;
    margin-right: 18px;

    //styleName: Body 1;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;

  }
`;

const AutomationTilesContainer = styled.div`
  display: flex;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 652px;
  margin-right: 25px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-right: 0;

    justify-content: center;
    align-items: center;
  }

  &:nth-of-type(3) {
    margin-right: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 25px;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const AutomationItemTitle = styled<React.FC>((props) => <Typography variant='h3' {...props} />)`
  position: absolute;
  left: 0;
  bottom: 0;
  color: ${colors.black};
  white-space: pre-line;

  @media (min-width: 320px) and (max-width: 480px) {
    left: 9%;
    font-size: 17px;
  }
`;


const AutomationItemText = styled<React.FC>((props) => <Typography variant='body2' {...props} />)`
  padding-right: 78px;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-right: 0;

    width: 85%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledButton = styled(Button)`
  margin-top: auto;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 40px;
  }
`;

interface AutomationTileProps {
  title: string;
  text: string;
  onOpen: () => void;
  image: string;
}

const AutomationTile: React.FC<AutomationTileProps> = (props) => {
  const {
    title,
    text,
    onOpen,
    image,
  } = props;

  return (
    <TileContainer>
      <ImageContainer>
        <img
          src={image}
          width={((typeof window !== "undefined")) ? window.screen.width >= 320 && window.screen.width <= 480 ? '85%' : 384 : '85%'}
          height={(typeof window !== "undefined") ? (window.screen.width >= 320 && window.screen.width <= 480) ? 'auto' : 485 : 'auto'}
          alt='robot'
        />
        <AutomationItemTitle>{title}</AutomationItemTitle>
      </ImageContainer>

      <AutomationItemText>
        {text}
      </AutomationItemText>

      <StyledButton
        variant='text'
        onClick={() => onOpen()}
      >
        Подробнее
      </StyledButton>
    </TileContainer>
  );
};

interface AutomationModalState {
  isShown: boolean;
  automationId?: AutomationIdTypes;
}

interface AutomationBlockProps {
  showRequestModal: () => void;
}

const AutomationBlock: React.FC<AutomationBlockProps> = (props) => {
  const {
    showRequestModal,
   } = props;

  const [modalState, setModalState] = useState<AutomationModalState>({
    isShown: false,
    automationId: undefined,
  });

  const closeModal = () => setModalState({
    isShown: false,
    automationId: undefined,
  });

  return (
    <Wrapper>
      <Title>
        Каких роботов вы используете?
      </Title>
      <Text>
        Мы различаем три вида автоматизации: с использованием систем с ЧПУ, промышленных роботов
        и коллаборативных роботов. У каждого подхода есть свои плюсы и минусы.
      </Text>

      <AutomationTilesContainer>
        {automationItems.map((item) => {
          const {
            id,
            ...rest
          } = item;

          return (
            <AutomationTile
              key={id}
              onOpen={() => setModalState({
                isShown: true,
                automationId: id,
              })}

              {...rest}
            />
          );
        })}
      </AutomationTilesContainer>

      {modalState.isShown && (
        <AutomationModal
          isShown={true}
          onClose={() => closeModal()}
          automationId={modalState.automationId}
          showRequestModal={showRequestModal}
        />
      )}
    </Wrapper>
  );
};

export default AutomationBlock;
