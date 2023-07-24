import React from 'react';
import * as styles from './Faq.module.scss';
import cs from 'classnames';
import 'react-bootstrap-accordion/dist/index.css';
import { Accordion } from 'react-bootstrap-accordion';
import Button from '../../shared/Button/Button';

const Faq = () => {
  return (
    <section className={cs('section fullWidth', styles.faqWrap)}>
      <h2 className={styles.title}>Najczęściej zadawane pytania</h2>
      <div className={styles.accordionWrap}>
        <Accordion className={styles.accortionItem} title="Jaki jest minimalny okres subskrypcji?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi odit ducimus
          eos maiores, reiciendis numquam voluptas cupiditate! Eligendi, aliquid optio voluptates ut
          quas minus provident voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores consequatur
          voluptate deleniti. Fuga repudiandae fugit facere maiores eligendi nulla? Exercitationem
          rerum optio esse tempore accusantium unde.
        </Accordion>
        <Accordion title="Czy można miksować rodzaje kaw w subskrypcji?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi odit ducimus
          eos maiores, reiciendis numquam voluptas cupiditate! Eligendi, aliquid optio voluptates ut
          quas minus provident voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores consequatur
          voluptate deleniti. Fuga repudiandae fugit facere maiores eligendi nulla? Exercitationem
          rerum optio esse tempore accusantium unde.
        </Accordion>
        <Accordion title="Czy można zamówić kawy na próbę i dopiero potem wybrać?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi odit ducimus
          eos maiores, reiciendis numquam voluptas cupiditate! Eligendi, aliquid optio voluptates ut
          quas minus provident voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores consequatur
          voluptate deleniti. Fuga repudiandae fugit facere maiores eligendi nulla? Exercitationem
          rerum optio esse tempore accusantium unde.
        </Accordion>
        <Accordion title="Czy w trakcie mogę zmienić rodzaj kawy i wielkość zamówienia?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi odit ducimus
          eos maiores, reiciendis numquam voluptas cupiditate! Eligendi, aliquid optio voluptates ut
          quas minus provident voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores consequatur
          voluptate deleniti. Fuga repudiandae fugit facere maiores eligendi nulla? Exercitationem
          rerum optio esse tempore accusantium unde.
        </Accordion>
      </div>
      <Button className={styles.button} size="medium" secondary>
        Pokaż więcej
      </Button>
    </section>
  );
};

export default Faq;
