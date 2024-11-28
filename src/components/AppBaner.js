import React from "react";
import bannerImage from "../assets/img/coffee-cover.jpg";
import appstore from "../assets/img/app_store.png";
import playstore from "../assets/img/play_store.png";
import { motion } from "framer-motion";
const AppBaner = () => {
  return (
    <div className="container my-14">
      <div
        className="bg-cover bg-center bg-no-repeat overflow-hidden sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl "
        style={{
          backgroundImage: `url(${bannerImage})`,
          width: "100%",
          height: "100%",
        }}
      >
        {" "}
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-2xl text-center sm:text-4xl font-semibold"
            >
              Download the App
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="text-center sm:px-20"
            >
              {" "}
              Minim Lorem proident commodo nisi minim minim do labore. Dolore
              magna nul.
            </motion.p>
            <div className="flex justify-center items-center gap-4">
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.img
                  src={appstore}
                  alt="appstore"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                />
              </a>
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5,
                  }}
                  src={playstore}
                  alt="playstore"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBaner;
