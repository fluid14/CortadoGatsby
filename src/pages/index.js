import * as React from 'react';
import Theme from '../theme/Theme';
import HowItWork from '../components/shared/sections/HowItWork/HowItWork';
import Satisfaction from '../components/shared/sections/Satisfaction/Satisfaction';

const IndexPage = () => {
  return (
    <Theme>
      {/*<HeaderSlider />*/}
      <HowItWork />
      <Satisfaction />
    </Theme>
  );
};

export default IndexPage;
