import React from 'react'
import DetailCard from '../detail-card/DetailCard'
import styles from './styles.module.css'
import { BsFillLockFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { FaUserSecret } from 'react-icons/fa'

const DetailCardRow = () => {
  return (
    <div className={styles['row-container']}>
      <DetailCard
        icon={<BsFillLockFill/>}
        title={'Where your reputation lives'}
        info={'Secure, own and control your reputation from any service.'}
      />
      <DetailCard
        icon={<TiTick/>}
        title={'Trust and interact with confidence'}
        info={'Verify you can trust a stranger, in any interaction, online or face to face.'}
      />
      <DetailCard
        icon={<FaUserSecret/>}
        title={'Anonymous yet trusted'}
        info={'Prove to others you are trustworthy (e.g. when applying for a job, home rental or loan), without giving them access to your profiles.'}
      />
    </div>
  )
}

export default DetailCardRow
