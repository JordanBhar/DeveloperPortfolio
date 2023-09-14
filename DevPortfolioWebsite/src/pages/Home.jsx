import React from "react";
import styles from "../style";
import { profile } from "../assets";
import { Socials } from "../components";

const Home = () => {
  return (
    <section className="mt-16" id="Home">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        
        <div className={`${styles.boxWidth}`}>

          <div className="flex flex-col justify-center space-x-20 md:flex-row">

            <div className="md:w-3/4 space-y-10">

              <p className="text-5xl font-bold text-white">
                Hello, I'm Jordan
              </p>

              <p className="text-2xl text-teal-300">
                <span className="text-teal-300">I'm a Full Stack Developer</span> 
                <span className="text-white">, with 4 Years of FullStack Experience using Swift & Swift UI , .Net, Springboot, Vanilla JS, React. I encourage you to reach out to me for Questions & Inquiry</span>
              </p>

              <div className=" mbs:visible md:hidden md:w-2/4 flex justify-center p-[40px]">
                <img src={profile} className="h-[25em] w-[20em] shrink rounded-lg shadow-2xl border-2  " alt="Profile"/>
              </div>


              <div className="pt-[50px] flex justify-center animate-bounce ">
                <a className="rounded-full bg-teal-400 text-white py-2 px-4 text-xl" href="mailto:suv300@icloud.com">
                  Contact Me
                </a>
              </div>

            </div>

            <div className=" p:invisible md:visible md:w-2/4 flex justify-center">
              <img src={profile} className="h-[25em] w-[22em] shrink rounded-lg shadow-2xl border-2  " alt="Profile"/>
            </div>

          </div>

        </div>

      </div>

      <Socials />
    </section>
  );
};

export default Home;
