import React from 'react';
import * as styles from './Benefits.module.scss';
import cs from 'classnames';
import Button from '../../Button/Button';
import Benefit from './Benefit/Benefit';
import clockImage from '../../../../images/develop/clock.svg';

const Benefits = () => {
  return (
    <section className={cs('section test', styles.benefitsWrap)}>
      <div className={styles.descriptionWrap}>
        <h3 className={styles.title}>Co zyskujesz subskrybują kawę Cortado?</h3>
        <p className={styles.text}>
          W regularnych odstępach czasu dostarczymy do Twojej firmy aromatyczną, znakomitej jakości
          kawę do ekspresu.
        </p>
        <Button className={styles.subscriptionButton} size="small" secondary>
          Chcę subskrybować
        </Button>
      </div>

      <ul className={styles.list}>
        <Benefit
          img={clockImage}
          imgAlt="imgAlt"
          description="·Oszczędność czasu, nie musisz już pamiętać o obowiązkach związanych z zakupem kawy."
        />
        <Benefit
          img={clockImage}
          imgAlt="imgAlt"
          description="Doskonałej jakości kawę w bardzo konkurencyjnej cenie. Nasze kawy posiadają ekoceryfikaty."
        />
        <Benefit
          img={clockImage}
          imgAlt="imgAlt"
          description="Elastyczne terminy dostaw – z możliwością czasowego zawieszenia np. na czas wakacji. Dopasujemy się do Twoich potrzeb."
        />
        <Benefit img={clockImage} imgAlt="imgAlt" description=" Brak minimum zakupowego." />
        <Benefit
          img={clockImage}
          imgAlt="imgAlt"
          description="Żadnych ukrytych opłat – liczy się dla nas transparentność współpracy i Twoje zadowolenie."
        />
        <Benefit
          img={clockImage}
          imgAlt="imgAlt"
          description="Anuluj online w dowolnym momencie – to Ty decydujesz o dalszej subskrypcji."
        />
      </ul>
    </section>
  );
};

export default Benefits;
