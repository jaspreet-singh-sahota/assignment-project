import React from 'react'
import styles from './styles.module.css'
import InfoCard from '../../components/info-card/InfoCard'
import twitter from '../../assets/twitter.png'
import airBNB from '../../assets/airBNB.png'
import amazon from '../../assets/amazon.png'
import angelList from '../../assets/angellist.png'
import ebay from '../../assets/ebay.png'
import facebook from '../../assets/facebook.png'
import googleMaps from '../../assets/googleMaps.png'
import gitHub from '../../assets/gitHub.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import Header from '../../components/header/Header'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles['scrolling-container']}>
          <InfoCard
            imgLink={twitter}
            info={['360 Tweets', '500 Following', '650 Followers']}
          />
          <InfoCard
            imgLink={airBNB}
            info={['16/17 reviews', '3 Ids verified', 'Joined 20/4/18']}
          />
          <InfoCard
            imgLink={amazon}
            info={['16 Helpful votes', '13 reviews', '3 ratings']}
          />
          <InfoCard
            imgLink={angelList}
            info={['16 experience', '2 projects', '6 educations', '3 connections']}
          />
          <InfoCard
            imgLink={ebay}
            info={['100% Positive', '202 Ratings', 'Joined 20/4/18']}
          />
          <InfoCard
            imgLink={facebook}
            info={['246 friends', 'Joined 20/4/18']}
          />
          <InfoCard
            imgLink={gitHub}
            info={['5 Repositories', '10 following', '31 followers']}
          />
          <InfoCard
            imgLink={googleMaps}
            info={['Level 3', '6 Reviews', '3 Ratings']}
          />
          <InfoCard
            imgLink={linkedin}
            info={['4 experience', '6 educations', '459 connections']}
          />
          <InfoCard
            imgLink={instagram}
            info={['51 posts', '100 following', '310 followers']}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
