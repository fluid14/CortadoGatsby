import * as React from 'react';
import Theme from '../theme/Theme';
import HowItWork from '../components/shared/sections/HowItWork/HowItWork';
import Satisfaction from '../components/shared/sections/Satisfaction/Satisfaction';
import Benefits from '../components/shared/sections/Benefits/Benefits';

const IndexPage = () => {
  return (
    <Theme>
      {/*<HeaderSlider />*/}
      <HowItWork />
      <Satisfaction />
      <Benefits />
    </Theme>
  );
};

export default IndexPage;
