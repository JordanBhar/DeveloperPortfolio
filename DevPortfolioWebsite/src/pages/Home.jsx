import React from 'react';
import styles from '../style';
import { Socials } from '../components';

const Home = () => {
  return (
    <div>
      {/* Home Section Starts Here */}
      <section>
        s
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth}`}>
            {/* Navbar is already included in the App component */}
          </div>
        </div>
        <Socials/>
      </section>
    </div>
  );
};

export default Home;
