import React from 'react'
import styles from '../style';
import { SkillsTab } from '../components';

export const Education = () => {
  return (
    <section id="Education">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
        
          <h2 className={`${styles.headerOneText} text-white my-5`}>
            <div className={`${styles.row} items-center`}>
              <p className='whitespace-nowrap'>Education & Courses</p>
              <hr className={styles.horizontalRuleRight}></hr>
            </div>
          </h2>

          <div className={styles.containers}>
            <div className="grid grid-cols-2">
              <div className={`${styles.regularText}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia iure eum harum maiores voluptatum cum deserunt porro consequuntur eaque, aspernatur molestiae totam fuga tenetur placeat ipsa voluptate commodi assumenda consectetur cupiditate atque corporis! Nihil eos non at vero cupiditate reprehenderit ipsam, quo accusantium quod amet laborum mollitia vitae placeat. Necessitatibus esse voluptates fuga inventore ratione perferendis? Aspernatur illum quo porro magni quasi eaque maiores? Commodi saepe voluptas excepturi aut dolores reiciendis, quibusdam libero debitis quam. Culpa fugit maiores dignissimos enim hic similique sequi asperiores illum dolore atque doloribus ullam, officiis repellat laborum voluptas itaque tempore aspernatur qui amet cum in soluta a, sed velit. Odit nemo illo ipsum atque, cumque, dicta totam similique voluptatem, placeat earum iste voluptatibus accusamus a numquam perspiciatis repellendus sint provident inventore dolor deserunt deleniti nisi necessitatibus ea expedita. Laborum odit vero fugiat possimus ipsum modi fugit officia, eveniet nihil, dolores ex, rem vitae blanditiis. Debitis culpa odio dignissimos blanditiis modi tempora. Soluta minima accusantium distinctio vero eius nihil labore quam. Ratione expedita assumenda labore voluptatum, nemo sit delectus animi optio quisquam nulla quo eveniet doloremque deleniti dicta eum saepe quidem soluta necessitatibus quia provident sapiente dignissimos dolore autem officia. Iste ducimus dolor aliquid recusandae aut!
              </div>
              
              <div className={`${styles.col} justify-center  p-5`}>
                <img className='border-2 border-white rounded-xl h-[400px] mx-10' src='https://educationontario.com/app/uploads/2022/03/sheridan-trafalgar-campus-scaet-banner.jpg'></img>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education