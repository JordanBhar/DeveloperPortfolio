import React from "react";
import styles from "../style";
import { profile } from "../assets";
import { Socials } from "../components";

const Home = () => {
  return (
    <section className="mt-[125px]">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-row`}>
            {/* Navbar is already included in the App component */}

            <div className="basis-3/4 flex-col justify-center space-y-4">
              <p className="text-5xl font-poppins font-bold text-white">
                Hello, Im Jordan
              </p>

              <p className="text-5xl font-poppins font-bold text-teal-300">
                Im a Full Stack Developer
              </p>

              <p className="text-sm font-poppins text-white text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                turpis mi, auctor quis mi sit amet, scelerisque tincidunt eros.
                Phasellus consequat neque sit amet orci consectetur, et faucibus
                magna pretium. Nam faucibus eu turpis sit amet molestie. Donec
                sapien tortor, sodales vel odio varius, posuere facilisis erat.
                Morbi consectetur urna ut diam vestibulum, et rutrum diam
                maximus. Donec sollicitudin dui et velit vulputate semper. Nam
                laoreet ac lacus eget aliquet.
              </p>

              <a className="rounded-full bg-teal-400 text-white py-2 px-4 mt-[200px]" href="mailto:suv300@icloud.com">Contact Me</a>
              
            </div>

            <div className="basis-1/4 flex justify-center"></div>

            <div className="basis-2/4 flex justify-center object-contain">
              <img
                src={profile}
                className="h-[420px] w-[315px] rounded-lg shadow-2xl border-2"
              ></img>
            </div>

            
          </div>
          
          <div className={`flex flex-row`}>
            
            

          </div>
          
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default Home;
