import React from 'react';
import {
  ImFacebook2, ImInstagram, ImTwitter, ImYoutube,
} from 'react-icons/im';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebookF, FaAngellist, FaAirbnb, FaAmazon } from 'react-icons/fa';

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
            <div className={styles.column}>
              <div className={styles.link} href="#">Blockchain Police Check</div>
              <div className={styles.link} href="#">Team</div>
              <div className={styles.link} href="#">Privacy</div>
            </div>

            <div className={styles.column}>
              <div className={styles.link} href="#">Services</div>
              <div className={styles.link} href="#">Blog</div>
              <div className={styles.link} href="#">Legal Notices</div>
            </div>

            <div className={styles.column}>
              <div className={styles.link} href="#">Help Center</div>
              <div className={styles.link} href="#">Sign in</div>
              <div className={styles.link} href="#">Live Demo</div>
            </div>

            <div className={styles.column}>
              <div className={styles.link} href="#">About us</div>
              <div className={styles.link} href="#">Contact us</div>
              <div className={styles.link} href="#">Terms of Use</div>
            </div>

          </div>
        </div>
      </div>

      <div className={styles['service-button-container']}>
      </div>
    </div>
  );
}

export default Footer;
