import React from "react";
import styles from "../style";
import { profile } from "../assets";
import { Socials } from "../components";

const Home = () => {
  return (
    <section className="mt-16" id="Home">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

          <div className="flex flex-col md:flex-row space-y-5 md:space-y-10 md:space-x-40">
            <div className="md:w-3/4 space-y-5 md:space-y-10 bg-acrylic rounded-lg shadow-2xl p-5 md:p-10">
              <p className="text-3xl md:text-4xl font-bold text-gradient">
                About Me
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white">
                Hello, I am Jordan Bhar
              </p>
              <p className="text-base md:text-xl text-teal-300">
                <span className="text-white">I am a Full Stack Developer,</span> 
                <span className="text-white"> with 4 Years of FullStack Experience using Swift & Swift UI, .Net, Springboot, Vanilla JS, React. I am currently based in Toronto Ontario. I encourage you to reach out to me for Questions & Inquiry</span>
              </p>
              <div className="flex flex-row items-center gap-x-2 text-base md:text-lg text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                Toronto, Ontario
              </div>
              <div className="md:hidden flex justify-center">
                <img src={profile} className="h-[12em] w-[12em] md:h-[18em] md:w-[18em] shadow-2xl rounded-full border-2" alt="Profile"/>
              </div>
              <div className="pt-[30px] flex flex-row space-x-5 justify-start">
                <a className="rounded-full bg-teal-400 text-white py-2 px-3 md:py-3 md:px-4 text-base md:text-xl" href="#">
                  <div className="flex flex-row items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
                    </svg>
                    Resume
                  </div>
                </a>
                <a className="rounded-full bg-teal-400 text-white py-2 px-4 md:py-3 md:px-5 text-base md:text-xl" href="#">
                  <div className="flex flex-row items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Github
                  </div>
                </a>
              </div>
            </div>
            <div className="md:w-2/4 hidden md:flex flex flex-row justify-end ">
              <div className="flex flex-col justify-center">
                <img src={profile} className="h-[12em] w-[12em] md:h-[18em] md:w-[18em] shadow-2xl rounded-full border-2 inline-block align-middle" alt="Profile"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default Home;
