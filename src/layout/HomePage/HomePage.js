import React from 'react';
import Theme from '../../theme/Theme';
import HeaderSlider from '../../components/shared/sliders/HeaderSlider/HeaderSlider';
import HowItWork from '../../components/sections/HowItWork/HowItWork';

const HomePage = ({ pageContext: { data } }) => {
  console.log(data);

  return (
    <Theme>
      {data?.map((component) => {
        const { strapi_component: componentType, id } = component;
        console.log(componentType);

        switch (componentType) {
          case 'sliders.header-slider':
            return <HeaderSlider data={component} key={id} />;

          case 'sections.how-it-works':
            return <HowItWork data={component} key={id} />;

          default:
            return null;
        }
      })}
    </Theme>
  );
};

export default HomePage;
