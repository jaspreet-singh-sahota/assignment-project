import React from 'react';
import { footerData } from './footerData'

import {
  FaYoutube, FaTwitter,
  FaInstagram, FaFacebookF,
  FaAngellist, FaAirbnb, FaAmazon
} from 'react-icons/fa';

import styles from './styles.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <h1>Enabling trust that's easy to prove.</h1>
      <p>R-logo allows you to gather your ratings from ANY website, including:</p>

      <div className={styles.icons}>
        <FaFacebookF className={styles.icon} />
        <FaInstagram className={styles.icon} />
        <FaTwitter className={styles.icon} />
        <FaAngellist className={styles.icon} />
        <FaAmazon className={styles.icon} />
        <FaAirbnb className={styles.icon} />
        <FaYoutube className={styles.icon} />
      </div>

      <div className={styles.container}>
        <div className={styles['flex-container']}>
          <div className={styles.row}>

            {footerData.map(data =>
              <div key={data.id} className={styles.column}>
                {data.items.map(item =>
                  <div key={item} className={styles.link} href="#">
                    {item}
                  </div>)
                }
              </div>)
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
