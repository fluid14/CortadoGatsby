import * as React from 'react';
import Theme from '../theme/Theme';
import HowItWork from '../components/sections/HowItWork/HowItWork';
import Satisfaction from '../components/sections/Satisfaction/Satisfaction';
import Benefits from '../components/sections/Benefits/Benefits';
import Products from '../components/sections/Products/Products';
import HeaderSlider from '../components/shared/sliders/HeaderSlider/HeaderSlider';
import Testimonials from '../components/sections/Tesimonials/Testimonials';

const IndexPage = () => {
  return (
    <Theme>
      <HeaderSlider />
      <HowItWork />
      <Satisfaction />
      <Benefits />
      <Products />
      <Testimonials />
    </Theme>
  );
};

export default IndexPage;
