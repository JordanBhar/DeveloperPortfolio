import React from 'react'
import styles from '../style';
import { SkillsTab } from '../components';

export const Education = () => {
  return (
    <section id="Education">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
        
          <h2 className="text-4xl font-bold text-white my-5">
            <div className="flex flex-row items-center">
              <p className='whitespace-nowrap'>Education & Skills</p>
              <hr className={`ml-[30px] h-0.5 mt-4 w-full bg-white border-0`}></hr>
            </div>
          </h2>

          <div className="bg-acrylic h-[300px] rounded-xl">
            <SkillsTab/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education