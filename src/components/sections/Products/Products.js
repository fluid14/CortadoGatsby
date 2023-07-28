import React from 'react';
import * as styles from './Products.module.scss';
import cs from 'classnames';
import Button from '../../shared/Button/Button';
import Product from './Product/Product';
import productImage from '../../../images/develop/product.png';

const Products = ({
  data: {
    title,
    text,
    button: { size, secondary, text: buttonText, url },
  },
}) => {
  return (
    <section className={cs('section small', styles.productsWrap)}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{text}</p>

      <ul className={styles.productsList}>
        <Product
          img={productImage}
          title="Cortado 100% Arabica"
          description="Ta kawa smakuje Wam najbardziej. Starannie skomponowana receptura ziaren kawy 100% arabica z plantacji Ameryki Łacińskiej i Afryki. Uniwersalna, średnio palona kompozycja ziaren wyróżnia się harmonijnym i wyrafinowanym smakiem. To kawa, która pogodzi najbardziej różnorodne gusta miłośników kawy. Napój idealnie sprawdza się jako skoncentrowana czarna kawa, jak również jako baza do kaw mlecznych."
        />
        <Product
          img={productImage}
          title="Cortado Blenda"
          description="Najlepsza kawa w relacji jakości do ceny. Cortado Blend to mieszanka wysokiej jakości ziarna arabica oraz robusta,  która gwarantuje harmonijny i delikatny smak. Kawa o niezwykłym aromacie z wyczuwalnymi nutami czekolady oraz orzechów włoskich. Doskonała zarówno dla miłośników kaw czarnych, jak i mlecznych. Średnio palona, aromatyczna, przepyszna!Ameryki Łacińskiej i Afryki. Uniwersalna, średnio palona kompozycja ziaren wyróżnia się harmonijnym i wyrafinowanym smakiem. To kawa, która pogodzi najbardziej różnorodne gusta miłośników kawy. Napój idealnie sprawdza się jako skoncentrowana czarna kawa, jak również jako baza do kaw mlecznych."
        />
        <Product
          img={productImage}
          title="Cortado Speciality"
          description="Perełka wśród naszych kaw - najwyższa jakość i wyjątkowy aromat.To unikalna mieszanka ziaren z Afryki i Ameryki Środkowej, która zadowoli najbardziej wyszukane podniebienia. Posiada harmonijny i delikatny smak oraz wyczuwalne aromaty orzechów i czekolady. Charakteryzuje się bardzo intensywnym aromatem, jednak dzięki średniemu prażeniu ziaren zachowuje zrównoważony charakter.Ameryki Łacińskiej i Afryki. Uniwersalna, średnio palona kompozycja ziaren wyróżnia się harmonijnym i wyrafinowanym smakiem. To kawa, która pogodzi najbardziej różnorodne gusta miłośników kawy. Napój idealnie sprawdza się jako skoncentrowana czarna kawa, jak również jako baza do kaw mlecznych."
        />
      </ul>

      <Button type="link" to={url} size={size} secondary={secondary}>
        {buttonText}
      </Button>
    </section>
  );
};

export default Products;
