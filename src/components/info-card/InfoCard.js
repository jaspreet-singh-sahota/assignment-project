import React from 'react'
import styles from './styles.module.css'


const InfoCard = ({imgLink, info}) => {
  return (
    <div className={styles['info-card']}>
      <div className={styles.container}>
        <img className={styles.image} src={imgLink} />
        <ul>
          {info.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default InfoCard
