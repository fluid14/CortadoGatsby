import * as React from 'react';
import Theme from '../theme/Theme';
import HowItWork from '../components/shared/sections/HowItWork/HowItWork';
import Satisfaction from '../components/shared/sections/Satisfaction/Satisfaction';
import Benefits from '../components/shared/sections/Benefits/Benefits';
import Products from '../components/shared/sections/Products/Products';
import HeaderSlider from '../components/shared/sliders/HeaderSlider/HeaderSlider';

const IndexPage = () => {
  return (
    <Theme>
      <HeaderSlider />
      <HowItWork />
      <Satisfaction />
      <Benefits />
      <Products />
    </Theme>
  );
};

export default IndexPage;
