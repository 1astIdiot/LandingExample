import React from 'react';
import styled from '@emotion/styled';

import { Typography } from 'components';

import IPlus from 'icons/IPlus';

import { colors } from 'styles/variables';

const ContentContainer = styled.div`
  padding: 80px 100px 0 100px;
`;

const Title = styled<React.FC>((props) => <Typography variant='h1' {...props} />)`
  margin-bottom: 40px;
  text-align: center;
  align-self: center;
  color: ${colors.header};
  white-space: pre-line;

  @media (min-width: 320px) and (max-width: 480px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.005em;
    text-align: center;
  }
`;

const FeaturesTitle = styled<React.FC>((props) => <Typography variant='h2' {...props} />)`
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-left: 16px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
  }
`;

const SignContainer = styled.div`
  margin-left: 28px;
`;

const Text = styled<React.FC>((props) => <Typography variant='body1' {...props} />)`
  margin-right: 25px;
  width: 408px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-right: 0;
    width: 85%;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 76px;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FeatureContainer = styled.div`
  padding-left: 88px;
  margin-bottom: 70px;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-left: 0;
  }
`;

const FeaturesInnerContainer = styled.div`
  margin-bottom: 76px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -28px;
  transform: translate(-100%, -50%);
  color: ${colors.white};

  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    top: auto;
    left: auto;

    transform: none;
  }
`;

const ProsIcon = styled(Circle)`
  background-color: ${colors.teal100};
`;

const ConsIcon = styled(Circle)`
  background-color: ${colors.miscellaneous.yellow200};

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 5px;
    background-color: ${colors.white};
  }
`;

const StyledFeatureItem = styled.li`
  position: relative;
  margin-bottom: 16px;

  div:first-line {
    color: ${colors.header};
  }

  &:before {
    content: '';
    position: absolute;
    left: -24px;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${colors.teal100};
  }
`;

const FeaturesList = styled.ul`
  padding-left: 24px;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-left: 41px;
    padding-right: 19px;
  }
`;

interface FeaturesListItemProps {
  title: string;
  text?: string;
}

const FeaturesListItem: React.FC<FeaturesListItemProps> = (props) => {
  const {
    title,
    text,
  } = props;

  return (
    <StyledFeatureItem>
      <Typography>
        {title} <br />
        {text}
      </Typography>
    </StyledFeatureItem>
  );
};

interface Props {
  title: string;
  textLeftColumn: string;
  textRightColumn: string;
  pros: FeaturesListItemProps[];
  cons: FeaturesListItemProps[];
}

const AutomationCobotInfo = (props: Props) => {
  const {
    title,
    textLeftColumn,
    textRightColumn,
    pros,
    cons,
  } = props;

  return (
    <ContentContainer>
      <Title>
        {title}
      </Title>

      <TextContainer>
        <Text>
          <div dangerouslySetInnerHTML={{
            __html: textLeftColumn,
          }} />
        </Text>

        <Text>
          <div dangerouslySetInnerHTML={{
            __html: textRightColumn,
          }} />
        </Text>
      </TextContainer>

      <FeatureContainer>
        <FeaturesInnerContainer>
          <FeaturesTitle>
            <ProsIcon><IPlus /></ProsIcon>

            <SignContainer>
              Плюсы
            </SignContainer>
          </FeaturesTitle>

          <FeaturesList>
            {pros.map((item) => <FeaturesListItem key={item.title} {...item} />)}
          </FeaturesList>
        </FeaturesInnerContainer>

        <FeaturesInnerContainer>
          <FeaturesTitle>
            <ConsIcon>-</ConsIcon>

            <SignContainer>
              Минусы
            </SignContainer>
          </FeaturesTitle>

          <FeaturesList>
            {cons.map((item) => <FeaturesListItem key={item.title} {...item} />)}
          </FeaturesList>
        </FeaturesInnerContainer>
      </FeatureContainer>
    </ContentContainer>
  );
};

export default AutomationCobotInfo;
