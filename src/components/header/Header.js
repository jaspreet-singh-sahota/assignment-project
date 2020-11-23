import React from 'react'
import styles from './styles.module.css'
import Button from '../button/Button'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles['nav-items']}>
        <div className={styles['nav-item']}>R logo</div>
        <div className={styles['nav-item']}>Individuals</div>
        <div className={styles['nav-item']}>Tech Employers</div>
        <div className={styles['nav-item']}>Property Managers</div>
        <div className={styles['nav-item']}>Gig Economies</div>
        <div className={styles['nav-item']}>Social Media Check</div>
        <div className={styles['nav-item']}>How It Works</div>
        <div className={styles['nav-item']}>About</div>
        <div className={styles['nav-item']}>Contact</div>
      </div>
      <div className={styles['nav-items']}>
        <div className={styles.button}>
          <Button inverted type={'button'}>Login</Button>
        </div>
        <div className={styles.button}>
          <Button type={'button'}>Live Demo</Button>
        </div>
      </div>
    </div>
  )
}

export default Header
