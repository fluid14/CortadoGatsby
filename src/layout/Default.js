import React from 'react';
import HeaderSlider from '../components/shared/sliders/HeaderSlider/HeaderSlider';
import HowItWork from '../components/sections/HowItWork/HowItWork';
import Satisfaction from '../components/sections/Satisfaction/Satisfaction';
import Benefits from '../components/sections/Benefits/Benefits';
import Testimonials from '../components/sections/Tesimonials/Testimonials';
import Products from '../components/sections/Products/Products';
import TextWithImage from '../components/sections/TextWithImage/TextWithImage';
import Partners from '../components/sections/Partners/Partners';
import Faq from '../components/sections/Faq/Faq';
import Wyswig from '../components/shared/Wyswig/Wyswig';

const Default = ({ pageContext: { data } }) => {
  return (
    <>
      {data?.map((component) => {
        const { strapi_component: componentType, id } = component;

        switch (componentType) {
          case 'sections.header-slider':
            return <HeaderSlider data={component} key={id} />;

          case 'sections.how-it-works':
            return <HowItWork data={component} key={id} />;

          case 'sections.text-with-icon':
            return <Satisfaction data={component} key={id} />;

          case 'sections.benefits':
            return <Benefits data={component} key={id} />;

          case 'sections.testimonials':
            return <Testimonials data={component} key={id} />;

          case 'sections.products':
            return <Products data={component} key={id} />;

          case 'sections.text-with-background-image':
            return <TextWithImage data={component} key={id} />;

          case 'sections.images-grid':
            return <Partners data={component} key={id} />;

          case 'sections.faq':
            return <Faq data={component} key={id} />;

          case 'sections.wyswig':
            return <Wyswig data={component} key={id} />;

          default:
            return null;
        }
      })}
    </>
  );
};

export default Default;
