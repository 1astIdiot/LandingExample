import React from 'react';
import styled from '@emotion/styled';

import { Container, Typography } from 'components';
import { colors, dimensions } from 'styles/variables';
import { specialists } from 'constants/home-page';

const Wrapper = styled(Container)`
  align-items: center;
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
    text-align: center;
  }
`;

const Text = styled<React.FC>((props) => <Typography variant='body1' {...props} />)`
  margin-bottom: 60px;
  padding: 0 208px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
    width: 85%;
  }
`;

const SubTitle = styled<React.FC>((props) => <Typography variant='subtitle1' {...props} />)`
  margin-bottom: 60px;
  text-transform: uppercase;
`;

const SpecialistImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SpecialistImageContainer = styled.div`
  position: relative;
  width: 148px;
  height: 148px;
  margin-bottom: 38px;
  background-color: ${colors.miscellaneous.gray400};
  border-radius: 50%;
  overflow: hidden;
`;

const SpecialistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  text-align: center;

  &:nth-of-type(2) ${SpecialistImage} {
    top: 57%;
  }

  &:nth-of-type(3) ${SpecialistImage} {
    top: 53%;
  }

  &:nth-of-type(5) ${SpecialistImage} {
    top: 58%;
  }

  &:nth-of-type(6) ${SpecialistImage} {
    top: 58%;
  }
`;

const SpecialistsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SpecialistName = styled<React.FC>((props) => <Typography variant='subtitle2' {...props} />)`
  margin-bottom: 16px;
  white-space: pre-line;
`;

const Position = styled<React.FC>((props) => <Typography variant='body2' {...props} />)`
  margin-bottom: 16px;
`;

const Responsibilities = styled<React.FC>((props) => <Typography variant='body2' {...props} />)`
  margin-bottom: 10px;
`;

const Contacts = styled.a`
  color: ${colors.teal300};
  font-size: ${dimensions.fontSize.button};
  line-height: ${dimensions.lineHeight.body2};

  &:hover {
    color: ${colors.teal100};
    cursor: pointer;
  };

  &:active {
    color: ${colors.teal300}
  };
`;

interface SpecialistProps {
  name: string;
  position: string;
  responsibilities: string;
  tel: string;
  email: string;
  image: string;
}

const Specialist: React.FC<SpecialistProps> = (props) => {
  const {
    name,
    position,
    responsibilities,
    tel,
    email,
    image,
  } = props;

  return (
    <SpecialistContainer>
      <SpecialistImageContainer>
        <SpecialistImage
          src={image}
          alt={name}
        />
      </SpecialistImageContainer>

      <SpecialistName>{name}</SpecialistName>

      <Position>{position}</Position>

      <Responsibilities>{responsibilities}</Responsibilities>

      <Contacts href={`tel:${tel}`}>
        {tel}
      </Contacts>

      <Contacts href={`mailto:${email}`}>
        {email}
      </Contacts>
    </SpecialistContainer>
  );
};

const SpecialistsBlock: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        Команда специалистов
      </Title>
      <Text>
        Наша компания, Forest Valley, была основана в 2011 году как разработчик
        сложных программных решений, в т.ч. для промышленных предприятий. Сильный
        коллектив специалистов по автоматизации позволил создать отдел разработки
        и интеграции роботизированных решений Forest Valley Robotics.
      </Text>
      <SubTitle>
        Отдел автоматизации:
      </SubTitle>

      <SpecialistsContainer>
        {specialists.map((item) => <Specialist key={item.name} {...item} />)}
      </SpecialistsContainer>
    </Wrapper>
  );
};

export default SpecialistsBlock;
