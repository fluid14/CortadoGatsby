import * as React from 'react';
import Theme from '../theme/Theme';
import HowItWork from '../components/sections/HowItWork/HowItWork';
import Satisfaction from '../components/sections/Satisfaction/Satisfaction';
import Benefits from '../components/sections/Benefits/Benefits';
import Products from '../components/sections/Products/Products';
import HeaderSlider from '../components/shared/sliders/HeaderSlider/HeaderSlider';
import Testimonials from '../components/sections/Tesimonials/Testimonials';
import TextWithImage from '../components/sections/TextWithImage/TextWithImage';
import Faq from '../components/sections/Faq/Faq';

const IndexPage = () => {
  return (
    <Theme>
      <HeaderSlider />
      <HowItWork />
      <Satisfaction />
      <Benefits />
      <Products />
      <Testimonials />
      <TextWithImage />
      <Faq />
    </Theme>
  );
};

export default IndexPage;
