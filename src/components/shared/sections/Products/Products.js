import React from 'react';
import * as styles from './Products.module.scss';
import cs from 'classnames';
import Button from '../../Button/Button';
import Product from './Product/Product';

const Products = () => {
  return (
    <section className={cs('section small', styles.productsWrap)}>
      <h3 className={styles.title}>
        Już musisz martwić się o dobór kawy, zrobiliśmy to za Ciebie!
      </h3>
      <p className={styles.description}>
        Poznaj trzy starannie wyselekcjonowane kawy ziarniste, które doskonale sprawdzą się z Twojej
        firmie:
      </p>

      <ul className={styles.productsList}>
        <Product
          title="Cortado 100% Arabica"
          description="Ta kawa smakuje Wam najbardziej. Starannie skomponowana receptura ziaren kawy 100% arabica z plantacji Ameryki Łacińskiej i Afryki. Uniwersalna, średnio palona kompozycja ziaren wyróżnia się harmonijnym i wyrafinowanym smakiem. To kawa, która pogodzi najbardziej różnorodne gusta miłośników kawy. Napój idealnie sprawdza się jako skoncentrowana czarna kawa, jak również jako baza do kaw mlecznych."
        />
        <Product
          title="Cortado Blenda"
          description="Najlepsza kawa w relacji jakości do ceny. Cortado Blend to mieszanka wysokiej jakości ziarna arabica oraz robusta,  która gwarantuje harmonijny i delikatny smak. Kawa o niezwykłym aromacie z wyczuwalnymi nutami czekolady oraz orzechów włoskich. Doskonała zarówno dla miłośników kaw czarnych, jak i mlecznych. Średnio palona, aromatyczna, przepyszna!Ameryki Łacińskiej i Afryki. Uniwersalna, średnio palona kompozycja ziaren wyróżnia się harmonijnym i wyrafinowanym smakiem. To kawa, która pogodzi najbardziej różnorodne gusta miłośników kawy. Napój idealnie sprawdza się jako skoncentrowana czarna kawa, jak również jako baza do kaw mlecznych."
        />
        <Product
          title="Cortado Speciality"
          description="Perełka wśród naszych kaw - najwyższa jakość i wyjątkowy aromat.To unikalna mieszanka ziaren z Afryki i Ameryki Środkowej, która zadowoli najbardziej wyszukane podniebienia. Posiada harmonijny i delikatny smak oraz wyczuwalne aromaty orzechów i czekolady. Charakteryzuje się bardzo intensywnym aromatem, jednak dzięki średniemu prażeniu ziaren zachowuje zrównoważony charakter.Ameryki Łacińskiej i Afryki. Uniwersalna, średnio palona kompozycja ziaren wyróżnia się harmonijnym i wyrafinowanym smakiem. To kawa, która pogodzi najbardziej różnorodne gusta miłośników kawy. Napój idealnie sprawdza się jako skoncentrowana czarna kawa, jak również jako baza do kaw mlecznych."
        />
      </ul>

      <Button size="medium">Chcę subskrybować</Button>
    </section>
  );
};

export default Products;
