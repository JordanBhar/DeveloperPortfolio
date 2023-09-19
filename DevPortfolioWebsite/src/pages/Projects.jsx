import React from "react";
import styles from "../style";

export const Projects = () => {
  return (
    <section id="Projects">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>

          <h2 className="text-4xl font-bold text-white my-5">
            <div className="flex flex-row items-center">
              Projects 
              <hr className={`ml-[30px] h-0.5 mt-4 ${styles.boxWidth} bg-white border-0`}></hr>
            </div>
          </h2>

          <div className="bg-acrylic h-a rounded-xl p-2">

          </div>


        </div>
      </div>
    </section>
  );
};

export default Projects;
