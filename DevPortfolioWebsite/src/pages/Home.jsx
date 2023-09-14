import React from "react";
import styles from "../style";
import { profile } from "../assets";
import { Socials } from "../components";

const Home = () => {
  return (
    <section className="mt-16">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        
        <div className={`${styles.boxWidth}`}>

          <div className="flex flex-col justify-center space-y-10 md:flex-row">

            <div className="md:w-3/4 space-y-5">

              <p className="text-5xl font-bold text-white">
                Hello, I'm Jordan
              </p>

              <p className="text-5xl font-bold text-teal-300">
                I'm a Full Stack Developer
              </p>

              <p className="text-sm text-white text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia cupiditate error pariatur ducimus facilis architecto odit ratione, blanditiis quia quod magnam! A, iure placeat earum non laborum dolore eligendi autem. Dignissimos voluptatibus ea qui ducimus consectetur fugiat nostrum voluptas numquam aliquid, ipsum iusto officiis ipsa porro eligendi ipsam odit! Eaque, totam eveniet? Obcaecati repellendus recusandae odio eaque totam deleniti alias. Rem reiciendis, id unde nisi sed minima quae nulla illo incidunt iste fuga sequi! Odit animi deserunt eos corrupti maxime natus, quos veniam minima incidunt tempora atque ratione exercitationem repellat perferendis vel magnam magni eveniet iste mollitia vitae sint quod nesciunt explicabo similique! Tempora necessitatibus ullam dolores! Accusantium, harum odit animi dignissimos ab hic corporis nesciunt iure et voluptates culpa, sapiente dolorem alias enim veritatis consequatur? Eum cum, nisi similique totam corporis architecto soluta inventore eaque molestias ipsum minima autem ducimus cumque? Exercitationem quae magni porro, asperiores magnam repellendus libero dolores ipsum ad reprehenderit commodi temporibus, aut nesciunt sunt error natus perspiciatis quasi? Deserunt hic maiores ipsum, sed accusamus error odio quae unde quasi enim incidunt blanditiis quas. Perspiciatis ullam impedit minus accusantium quisquam beatae velit excepturi, possimus saepe! Sint asperiores velit iste non eius facilis voluptatibus deleniti accusamus.
              </p>

              <div>
                <a className="rounded-full bg-teal-400 text-white py-2 px-4" href="mailto:suv300@icloud.com">
                  Contact Me
                </a>
              </div>

            </div>

            <div className=" mbs:invisible md:visible md:w-2/4 flex justify-center mt-[0px]">
              <img src={profile} className="h-[25em] w-[20em] shrink rounded-lg shadow-2xl border-2 " alt="Profile"/>
            </div>

          </div>

        </div>

      </div>

      <Socials />
    </section>
  );
};

export default Home;
