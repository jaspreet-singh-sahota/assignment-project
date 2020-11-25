import React from 'react'
import styles from './styles.module.css'

const DetailCard = ({icon, info, title}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {icon}
      </div>
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  )
}

export default DetailCard
