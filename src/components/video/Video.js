import React from 'react'
import styles from './styles.module.css'

const Video = () => {
  return (
    <div className={styles.container}>
      <div className={styles['video-container']}>
        <iframe src='https://www.youtube.com/embed/6bpU-cEqUw4'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          className={styles.video}
        />
      </div>
    </div>
  )
}

export default Video
