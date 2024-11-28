import React from "react";
import BgImage from "../assets/img/bg-slate.png";
import CoffeeCup from "../assets/img/black.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { useState } from "react";
const Hero = () => {
  const [sideBar, setSidebar] = useState(false);

  return (
    <main
      className="bg-cover bg-center bg-no-repeat h-screen w-screen overflow-hidden "
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          <Navbar sideBar={sideBar} setSidebar={setSidebar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Black Tumbler
              </motion.h1>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    {" "}
                    Anim deserunt do do sunt Lorem est consectetur esse minim
                    adipisicing ad aliquip. Fugiat dolore nisi aliquip
                    exercitation aliqua laboris voluptate cupidatat esse. Offici
                  </h1>
                  <div className="absolute -top-6 -left-10 w-[200px] h-[190px] bg-gray-700/25"></div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="relative"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={CoffeeCup}
                alt="coffeecup"
                className="relative z-40 h-[400px] md:h-[700px]  img-shadow"
              />
              <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full z-10 border-[20px]" />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.8,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                {" "}
                <h1 className="text-[110px] scale-150 font-bold text-darkGray/40 leading-none">
                  Black Thumbler
                </h1>
              </motion.div>
            </motion.div>
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
              >
                <h1 className="text-7xl font-bold leading-tight ml-14 opacity-0">
                  Black Tumbler
                </h1>
                <div>
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                    <h1 className="text-sm opacity-55 leading-loose">
                      {" "}
                      Anim deserunt do do sunt Lorem est consectetur esse minim
                      adipisicing ad aliquip. Fugia
                    </h1>
                    <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {sideBar && <Sidebar />}
      </section>
    </main>
  );
};

export default Hero;
