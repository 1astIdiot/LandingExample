import React from 'react';
import styled from '@emotion/styled';

import {
  Modal,
  RequestForm,
  Typography,
} from 'components';

import { ModalContainerProps } from 'components/_shared/Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 102px 120px 102px;
`;

const Title = styled<React.FC>((props) => <Typography variant='subtitle1' {...props} />)`
  margin-bottom: 40px;
  text-transform: uppercase;
  align-self: flex-start;
`;

const RequestModal: React.FC<ModalContainerProps> = (props) => {
  const {
    onClose,
  } = props;

  return (
    <Modal {...props}>
      <Container>
        <Title>
          Заявка на получение консультации
        </Title>

        <RequestForm onClose={onClose} />
      </Container>
    </Modal>
  );
};

export default RequestModal;
