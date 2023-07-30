import React from 'react';
import * as styles from './Faq.module.scss';
import cs from 'classnames';
import 'react-bootstrap-accordion/dist/index.css';
import { isBrowser } from '../../../utils/isBrowser';
import loadable from '@loadable/component';

const Faq = ({ data: { title, questions } }) => {
  if (!isBrowser()) return null;
  const Accordion = loadable(() =>
    import('react-bootstrap-accordion').then((module) => module.Accordion)
  );

  return (
    <section className={cs('section fullWidth', styles.faqWrap)}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.accordionWrap}>
        {questions.length &&
          questions.map(({ id, title, text }) => (
            <Accordion key={id} title={title}>
              {text}
            </Accordion>
          ))}
      </div>
    </section>
  );
};

export default Faq;
