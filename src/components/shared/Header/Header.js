import React from "react";
import * as styles from './Header.module.scss';
import Button from "../Button/Button";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrap}>
                <p className={styles.logo}>
                    Cortado
                </p>
                <p className={styles.contact}>
                    Zapytaj o produkt
                    <a className={styles.contactLink} href='mailto: info@cortado.pl'>info@cortado.pl</a>
                </p>
            </div>

            <div className={styles.actionWrap}>
                <Button size='small'>
                    Chcę subskrybować
                </Button>

                <div className={styles.loginWrap}>
                    <Button size='medium' text secondary>
                        Logowanie
                    </Button>
                </div>
            </div>
        </header>
    )
};

export default Header;
