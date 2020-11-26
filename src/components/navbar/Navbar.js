import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Button from '../button/Button'
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

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
        <Link to='/' className={styles.logo}>R logo</Link>

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
            <div className={styles[!showHamburgerMenu ? 'nav-item' : 'sidebar-item']}>
              <Link to='/individual'>Individuals</Link>
            </div>
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
          <a href='https://app.reputationaire.com/' target="_blank">
            <Button inverted type={'button'}>Login</Button>
          </a>
        </div>
        <div className={styles.button}>
          <Button type={'button'}>Free Demo</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
