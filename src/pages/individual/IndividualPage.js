import React from 'react'
import styles from './styles.module.css'
import Video from '../../components/video/Video'
import ScrollingBanner from '../../components/scrolling-banner/ScrollingBanner'

const IndividualPage = () => {
  return (
    <div className={styles.container}>
      <Video />
      <div className={styles['rating-card']}>
        <ScrollingBanner />
      </div>
    </div>
  )
}

export default IndividualPage
