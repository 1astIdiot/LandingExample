import React, { useState } from 'react';

import IndexLayout from 'layouts';
import {
  Page,
} from 'components';

import IntroBlock from 'components/home-page/IntroBlock';
import DescriptionBlock from 'components/home-page/DescriptionBlock';
import IndustriesBlock from 'components/home-page/IndustriesBlock';
import DemonstrationBlock from 'components/home-page/DemonstrationBlock';
import AutomationBlock from 'components/home-page/AutomationBlock';
// import OnlineDemonstrationBlock from 'components/home-page/OnlineDemonstrationBlock'; //Temporarily removed
import RobotInfoBlock from 'components/home-page/RobotInfoBlock';
import SpecialistsBlock from 'components/home-page/SpecialistsBlock';
import RequestBlock from 'components/home-page/RequestBlock';
import RequestModal from 'components/home-page/RequestModal';

const IndexPage = () => {
  const [isRequestModalShown, toggleRequestModal] = useState<boolean>(false);

  return (
    <IndexLayout>
      <Page>
        <IntroBlock showRequestModal={() => toggleRequestModal(true)} />
        <DescriptionBlock />
        <IndustriesBlock />
        <DemonstrationBlock showRequestModal={() => toggleRequestModal(true)}/>
        <AutomationBlock showRequestModal={() => toggleRequestModal(true)} />
        {/* <OnlineDemonstrationBlock /> //Temporarily removed */}
        <RobotInfoBlock />
        <SpecialistsBlock />
        <RequestBlock />
      </Page>

      <RequestModal
        isShown={isRequestModalShown}
        onClose={() => toggleRequestModal(false)}
      />
    </IndexLayout>
  );
};

export default IndexPage;
