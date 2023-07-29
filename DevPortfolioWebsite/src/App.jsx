import { useState } from 'react'
import { Navbar, Hero } from './components'
import styles from './style'

export const App = () => (
  <div className="bg-primary-gradient w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={` w-full overflow-hidden h-[1000px] ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

  </div>
)

export default App
