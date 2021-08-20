import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import {
  Modal,
  Typography,
  Slider,
  Image,
} from 'components';

import { ModalContainerProps } from 'components/_shared/Modal';
import { industries, industryMedia } from 'constants/home-page';
import { colors, StylesForScrollbar } from 'styles/variables';
import { css } from '@emotion/react';
import { Industries } from 'types/home-page';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1044px;
  padding: 80px 125px;
  overflow-y: auto;
  overflow-x: hidden;
  ${StylesForScrollbar};
`;

const Title = styled<React.FC>((props) => <Typography variant='h1' {...props} />)`
  margin-bottom: 40px;
  align-self: flex-start;
  text-transform: capitalize;
`;

const CurrentVideoTitle = styled<React.FC>((props) => <Typography variant='h3' {...props} />)`
  margin-bottom: 40px;
  align-self: flex-start;
`;

const VideoTitle = styled<React.FC>((props) => <Typography variant='subtitle2' {...props} />)`

`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 180px;
  min-width: 180px;
  padding: 0 12px;
  background: none;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;

    ${VideoTitle} {
      color: ${colors.forestGreen100};
    }
  }
`;

const StyledImg = styled(Image)`
  min-height: 118px;
  margin-bottom: 16px;
`;

interface IndustryMediaModalProps extends ModalContainerProps {
  mediaId?: Industries;
}

const IndustryMediaModal: React.FC<IndustryMediaModalProps> = (props) => {
  const {
    mediaId,
  } = props;

  const [state, setState] = useState<{ id: string; title: string; }[]>([]);
  const [activeMedia, setActiveMedia] = useState<number>(0);

  useEffect(() => {
    mediaId && setState(industryMedia[mediaId]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Modal {...props}>
      <Container>
        <Title>
          {mediaId && industries[mediaId].title}
        </Title>

        {!!state.length && (
          <>
            <iframe
              css={css`
                margin-bottom: 24px;
              `}
              width='100%'
              height='445'
              src={`https://www.youtube.com/embed/${state[activeMedia].id}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            >
            </iframe>

            <CurrentVideoTitle>
              {state[activeMedia].title}
            </CurrentVideoTitle>
          </>
        )}

        <Slider>
          {state.map((item, index) => {
            const {
              id,
              title,
            } = item;

            return (
              <StyledButton key={id} onClick={() => setActiveMedia(index)}>
                <StyledImg
                  publicUrl={`https://img.youtube.com/vi/${id}/default.jpg`}
                  alt='thumbnail'
                />

                <VideoTitle
                  css={css`
                    color: ${activeMedia === index && colors.forestGreen200};
                  `}
                >
                  {title}
                </VideoTitle>
              </StyledButton>
            );
          })}
        </Slider>
      </Container>
    </Modal>
  );
};

export default IndustryMediaModal;
