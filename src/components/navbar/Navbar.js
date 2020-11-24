import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Button from '../button/Button'
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth > 1220 ? setShowHamburgerMenu(false) : setShowHamburgerMenu(true);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['left-nav-items']}>
        <div className={styles.logo}>R logo</div>
        {showHamburgerMenu ? !isMenuOpen ?
          <GiHamburgerMenu
            onClick={() => setIsMenuOpen(prev => !prev)}
            className={styles['hamburger-menu']}
          /> :
          <ImCross
            onClick={() => setIsMenuOpen(prev => !prev)}
            className={styles['cross-icon']}
          /> : null
        }
        {
          (isMenuOpen || !showHamburgerMenu) &&
          <div className={styles[!showHamburgerMenu ? 'nav-items' : 'sidebar-items']}>
            <div className={styles[!showHamburgerMenu ? 'nav-item' : 'sidebar-item']}>Individuals</div>
            <div className={styles[!showHamburgerMenu ? 'nav-item' : 'sidebar-item']}>Tech Employers</div>
            <div className={styles[!showHamburgerMenu ? 'nav-item' : 'sidebar-item']}>Property Managers</div>
            <div className={styles[!showHamburgerMenu ? 'nav-item' : 'sidebar-item']}>Gig Economies</div>
            <div className={styles[!showHamburgerMenu ? 'nav-item' : 'sidebar-item']}>Social Media Check</div>
            <div className={styles[!showHamburgerMenu ? 'nav-item' : 'sidebar-item']}>How It Works</div>
            <div className={styles[!showHamburgerMenu ? 'nav-item' : 'sidebar-item']}>About</div>
            <div className={styles[!showHamburgerMenu ? 'nav-item' : 'sidebar-item']}>Contact</div>
          </div>
        }
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

export default Navbar
