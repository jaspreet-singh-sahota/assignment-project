import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

const NotFound = () => (
  <div className={styles.container}>
    <h1>404 - Page Not Found!</h1>
    <p>Sorry we can't seem to find that page.
       Please check and try again or click here to go to the homepage.
    </p>
    <div>
      <Link className={styles.homepage} to="/">
        Go Home
    </Link>
    </div>
  </div>
);

export default NotFound;