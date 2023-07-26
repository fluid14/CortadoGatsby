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
import Partners from '../components/sections/Partners/Partners';
import ProductDescription from '../components/sections/ProductDescription/ProductDescription';

const IndexPage = () => {
  return (
    <Theme>
      <ProductDescription />
      <HeaderSlider />
      <HowItWork />
      <Satisfaction />
      <Benefits />
      <Products />
      <Testimonials />
      <TextWithImage />
      <Partners />
      <Faq />
    </Theme>
  );
};

export default IndexPage;
