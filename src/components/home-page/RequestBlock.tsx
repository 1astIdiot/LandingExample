import React from 'react';
import styled from '@emotion/styled';

import { Typography, RequestForm } from 'components';
import { breakpoints, colors } from 'styles/variables';
import Container from 'components/_shared/Container';

const Wrapper = styled(Container)`
  position: relative;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 0;

  &:before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0px;
      width: 100vw;
      height: 1px;
      background-color: ${colors.miscellaneous.gray700};
    }
`;

const Title = styled<React.FC>((props) => <Typography variant='h1' {...props} />)`
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 10px;

    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: left;
  }
`;

const Text = styled<React.FC>((props) => <Typography variant='subtitle1' {...props} />)`
  text-transform: uppercase;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

const LeftColumn = styled(FlexContainer)`
  padding-top: 181px;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 0;
    width: 85%;

    margin-bottom: 40px;
  }
`;

const RightColumn = styled(FlexContainer)`
  position: relative;
  padding: 125px 0 132px 0;
  background-color: ${colors.miscellaneous.gray600};

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
    padding-top: 50px;
    width: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 1px;
    transform: translateX(-100%);
    height: 100%;
    width: 103px;
    background-color: ${colors.miscellaneous.gray600};
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    height: 100%;
    width: 100vw;
    background-color: ${colors.miscellaneous.gray600};

    @media (max-width: ${breakpoints.sm}px) {
      width: unset;
    }
  }
`;

const RequestBlock: React.FC = () => {
  return (
    <Wrapper>
      <LeftColumn>
        <Title>
          Хотите узнать больше? <br />
          Давайте созвонимся!
        </Title>

        <Text>
          Запишитесь на консультацию,<br />
          заполните форму
        </Text>
      </LeftColumn>

      <RightColumn>
        <RequestForm />
      </RightColumn>
    </Wrapper>
  );
};

export default RequestBlock;
