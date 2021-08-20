import React from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

import { Button, Typography } from 'components';

import { automationCNCInfo, automationCobotInfo, automationIndustrialRobotInfo, } from 'constants/home-page';
import { colors, dimensions, StylesForScrollbar } from 'styles/variables';

import { Modal } from 'components';
import { automationItemIds } from 'constants/home-page';
import { ModalContainerProps } from 'components/_shared/Modal';
import { AutomationIdTypes } from 'types/home-page';

import AutomationCobotInfo from './AutomationModalContent';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1044px;
  overflow-y: auto;
  ${StylesForScrollbar};

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 60px 0 80px 218px;
  background-color: ${colors.miscellaneous.gray600};

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 0;
    padding-bottom: 55px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLeftColumn = styled(Flex)`
  z-index: 1;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterRightColumn = styled(Flex)`
  width: 310px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 30px;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterTitle = styled<React.FC>((props) => <Typography variant='h2' {...props} />)`
  margin-bottom: 62px;
  text-transform: uppercase;
  color: ${colors.header};

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 55px;
    margin-bottom: 42px;
  }
`;

const FooterCaption = styled<React.FC>((props) => <Typography variant='h3' {...props} />)`
  margin-top: 23px;
  margin-bottom: 28px;
  color: ${colors.miscellaneous.green400};
`;

const FooterImageStyles = css`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const FooterContactTel = styled.a`
  margin-bottom: 8px;
  font-weight: ${dimensions.weights.normal1};;
  font-size: ${dimensions.headingSizes.h2};
  line-height: ${dimensions.lineHeight.body2};
  color: ${colors.header};

  @media (min-width: 320px) and (max-width: 480px) {
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.005em;
    text-align: left;
  }
`;

const FooterContactsEmail = styled.a`
  font-size: ${dimensions.fontSize.body1};
  line-height: ${dimensions.lineHeight.body1};
  color: ${colors.text};
`;

interface AutomationModalProps extends ModalContainerProps {
  automationId?: AutomationIdTypes;
  showRequestModal: () => void;
}

interface AutomationModalInfoProps {
  title: string;
  textLeftColumn: string;
  textRightColumn: string;
  pros: { title: string; text?: string; }[];
  cons: { title: string; text?: string; }[];
}

const AutomationModal: React.FC<AutomationModalProps> = (props) => {
  const {
    automationId,
    showRequestModal,
  } = props;

  const getModalContentProps = (id: string): AutomationModalInfoProps => {
    switch (id) {
      case automationItemIds.CNC:
        return automationCNCInfo;
      case automationItemIds.INDUSTRIAL_ROBOT:
        return automationIndustrialRobotInfo;
      case automationItemIds.COBOTS:
        return automationCobotInfo;
      default:
        return {
          title: '',
          textLeftColumn: '',
          textRightColumn: '',
          pros: [],
          cons: [],
        };
    };
  };

  return (
    <Modal {...props}>
      <Wrapper>
        {automationId && <AutomationCobotInfo {...getModalContentProps(automationId)} />}

        <Footer>
          <FooterLeftColumn>
            <FooterTitle>
              Робот готов работать <br />
              без зарплаты!
            </FooterTitle>

            <Button onClick={() => showRequestModal()}>
              Получить консультацию
            </Button>
          </FooterLeftColumn>

          <FooterRightColumn>
            <FooterCaption>
              Остались вопросы? <br />
              Звоните!
            </FooterCaption>

            <FooterContactTel href='tel:+7 (9272) 705-678'>
              +7 (9272) 705-678
            </FooterContactTel>

            <FooterContactsEmail href='mailto:ik@fv.dev'>
              ik@fv.dev
            </FooterContactsEmail>

          </FooterRightColumn>

          {(typeof window !== "undefined") ? (window.screen.width >= 320 && window.screen.width <= 480) ? null :
            <StaticImage
              css={FooterImageStyles}
              src='../../images/robot5.png'
              alt='robot'
            />
          : null
          }
        </Footer>
      </Wrapper>
    </Modal>
  );
};

export default AutomationModal;
