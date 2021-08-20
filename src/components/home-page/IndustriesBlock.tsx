import React, { useState } from 'react';
import styled from '@emotion/styled';
import { lighten } from 'polished';

import { ButtonCorner, Container, Typography } from 'components';
import { colors } from 'styles/variables';
import { industriesBlocks, industryMedia } from 'constants/home-page';

import IndustryMediaModal from './IndustryMediaModal';
import { Industries } from 'types/home-page';

const Wrapper = styled(Container)`
  align-items: center;
`;

const Title = styled<React.FC>((props) => <Typography variant='h1' {...props} />)`
  margin-bottom: 60px;
  color: ${colors.header};

  @media (min-width: 320px) and (max-width: 480px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: center;
  }
`;

const IndustryTilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -24px;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const IndustryItemContainer = styled.div`
  position: relative;
  width: 384px;
  margin-bottom: 24px;
  margin-right: 24px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 85%;

    margin-bottom: 24px;
    margin-right: 0px;
  }

  &:nth-of-type(3n) {
    margin-right: 0;
  }
`;

const IndustryMainContainer = styled.div`
  height: 188px;
  padding: 40px 32px;
  border-radius: 3px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 30px rgba(0,0,0,0.2);
`;

const IndustryItemHeader = styled<React.FC>((props) => <Typography variant='subtitle1' {...props} />)`
  margin-bottom: 16px;
  text-transform: uppercase;
  color: ${colors.header};
`;

const IndustryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
interface IndustryTagProps {
  color: string;
}
const IndustryTag = styled.button<IndustryTagProps>`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  height: 24px;
  padding: 0 10px;
  background-color: ${props => props.color};
  border: none;
  outline: none;

  &:hover, &:focus {
    cursor: pointer;
    background-color: ${props => lighten(0.03, props.color)};
  }
`;

const IndustryMediaButton = styled(ButtonCorner)`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 3px;
`;

interface IndustryItemProps {
  id: Industries;
  title: string;
  text: string;
  tags: {
    title: string;
    color: string;
    url: string;
  }[];
  onOpen: () => void;
}

const IndustryItem: React.FC<IndustryItemProps> = (props) => {
  const {
    id,
    title,
    text,
    tags,
    onOpen,
  } = props;

  const isMediaNotEmpty = industryMedia[id].length > 0;

  return (
    <IndustryItemContainer>
      <IndustryMainContainer>
        <IndustryItemHeader>{title}</IndustryItemHeader>

        <Typography variant='body2'>{text}</Typography>

        {isMediaNotEmpty && <IndustryMediaButton onClick={() => onOpen()} />}
      </IndustryMainContainer>

      <IndustryTags>
        {tags.map((item) => {

          return (
            <IndustryTag color={item.color} key={item.title}>
              <Typography variant='caption'>
                {item.title}
              </Typography>
            </IndustryTag>
          );
        })}
      </IndustryTags>
    </IndustryItemContainer>
  );
};

interface MediaModalState {
  isShown: boolean;
  mediaId?: Industries;
}

const IndustriesBlock: React.FC = () => {
  const [modalState, setModalState] = useState<MediaModalState>({
    isShown: false,
    mediaId: undefined,
  });

  const closeModal = () => setModalState({
    isShown: false,
    mediaId: undefined,
  });

  return (
    <Wrapper>
      <Title>
        Где применяются роботы?
      </Title>

      <IndustryTilesContainer>
        {industriesBlocks.map((item) => {
          const {
            title,
            text,
            mediaId,
            tags,
          } = item;

          return (
            <IndustryItem
              key={mediaId}
              id={mediaId}
              title={title}
              text={text}
              tags={tags}
              onOpen={() => setModalState({
                isShown: true,
                mediaId,
              })}
            />
          );
        })}
      </IndustryTilesContainer>

      {modalState.isShown && (
        <IndustryMediaModal
          isShown={true}
          onClose={() => closeModal()}
          mediaId={modalState.mediaId}
        />
      )}
    </Wrapper>
  );
};

export default IndustriesBlock;
