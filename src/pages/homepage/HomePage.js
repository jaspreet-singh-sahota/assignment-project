import React from 'react'
import styles from './styles.module.css'
import Header from '../../components/header/Header'
import ScrollingBanner from '../../components/scrolling-banner/ScrollingBanner'
import DetailCardRow from '../../components/detail-card-row/DetailCardRow'
import Video from '../../components/video/Video'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles['scrolling-container']}>
          <ScrollingBanner />
        </div>
      </div>
      <div className={styles.background}>
        <DetailCardRow/>
        <Video/>
        <DetailCardRow/>
      </div>
    </div>
  )
}

export default HomePage
