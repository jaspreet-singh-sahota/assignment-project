import React from 'react'
import DetailCard from '../detail-card/DetailCard'
import styles from './styles.module.css'
import {cardData} from './cardData'

const DetailCardRow = () => {
  return (
    <div className={styles['row-container']}>
      {cardData.map(data =>
        <DetailCard key={data.id}
          icon={<data.icon />}
          title={data.title}
          info={data.info}
        />)   
      }
    </div>
  )
}

export default DetailCardRow
