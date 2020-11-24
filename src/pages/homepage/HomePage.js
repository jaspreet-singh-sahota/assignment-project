import React from 'react'
import styles from './styles.module.css'

import Header from '../../components/header/Header'
import ScrollingBanner from '../../components/scrolling-banner/ScrollingBanner'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles['scrolling-container']}>
          <ScrollingBanner/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
