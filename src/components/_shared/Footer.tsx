import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import { heights, colors } from 'styles/variables';
import { Nbsp } from 'constants/common';

import Container from './Container';
import Typography from './Typography';

const StyledFooter = styled.footer`
  width: 100%;
  height: ${heights.footer};
  background-color: ${colors.miscellaneous.gray500};

  @media (min-width: 320px) and (max-width: 480px) {
    height: auto;

    margin-top: -80px;
  }
`;

const FooterInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: ${colors.miscellaneous.gray500};
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: auto;
  }
`;

const LeftColumn = styled(FlexContainer)`
  align-items: flex-start;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 32px;
  }
`;

const CentralColumn = styled(FlexContainer)`
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 24px;
  }
`;

const RightColumn = styled(FlexContainer)`
  align-items: flex-end;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 28px;
  }
`;

const RoboticsLogoStyles = css`
  margin-bottom: 12px;
`;

const CopyrightText = styled(Typography)`
  font-size: 12px;
  line-height: 160%;
  color: ${transparentize(0.5, colors.white)};
`;

const StyledSubtitle = styled<React.FC>(props => <Typography variant='subtitle2' {...props} />)`
  margin-bottom: 8px;
  color: ${colors.white};
`;

const ContactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${transparentize(0.3, colors.white)};
`;

const Contacts = styled.a`
  color: inherit;

  &:hover {
    color: ${colors.text};
  }

  &:active {
    color: ${transparentize(0.3, colors.white)};
  }
`;

const FvLogoImageStyles = css`
  margin-bottom: 8px;
`;

const FvLink = styled.a`
  margin-right: 56px;
  font-size: 12px;
  line-height: 160%;
  color: ${transparentize(0.5, colors.white)};

  &:hover {
    color: ${colors.text};
    cursor: pointer;
  }

  &:active {
    color: ${transparentize(0.5, colors.white)};
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterInner>
        <LeftColumn>
          <StaticImage css={RoboticsLogoStyles} src='../../images/robotics.png' alt='logo' />

          <CopyrightText>© Robotics 2021</CopyrightText>
        </LeftColumn>

        <CentralColumn>
          <StyledSubtitle>Наши контакты:</StyledSubtitle>

          <ContactsContainer>
            <Contacts href='tel:+7 (9272) 705-678'>+7 (9272) 705-678</Contacts>

            {Nbsp}|{Nbsp}

            <Contacts href='mailto:ik@fv.dev'>ik@fv.dev</Contacts>
          </ContactsContainer>
        </CentralColumn>

        <RightColumn>
          <StaticImage css={FvLogoImageStyles} src='../../images/fvLogoGrey.png' alt='forest valley logo' />

          <FvLink href='https://fv.dev'>www.fv.dev</FvLink>
        </RightColumn>
      </FooterInner>
    </StyledFooter>
  );
};

export default Footer;
