import React from 'react'
import styles from '../style'
import { useState } from 'react'
import { Socials } from '../components'
import { Navbar} from '../components'
import { Navigate } from 'react-router'

export const Home = () => {
  return (
    <div>

      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>


      {/* Home Section Starts Here */}
      <section>
        <Socials/>
      </section>

    </div>
  )
}

export default Home
