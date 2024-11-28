import React from "react";
import { delay, motion, stagger } from "framer-motion";
import Img1 from "../assets/img/coffee1.png";
import Img2 from "../assets/img/coffee3.png";
import Img3 from "../assets/img/coffee1.png";
import { title } from "framer-motion/client";
const Service = () => {
  const ServicesData = [
    {
      id: 1,
      img: Img1,
      name: "Espresso",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
      aosDelay: 100,
    },
    {
      id: 2,
      img: Img2,
      name: "Americano",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
      aosDelay: 300,
    },
    {
      id: 3,
      img: Img1,
      name: "Cappuccino",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
      aosDelay: 500,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div className="container my-16 space-y-4">
      {/* Naslov i opis */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1.5,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1,
          }}
          className="text-sm opacity-50 "
        >
          Aliqua eiusmod aliqua cupidatat magna minim et ipsum irure magna
          consectetur ad qui velit. Eu veniam laboris vol
        </motion.p>
      </div>

      {/* Kartice sa kafama */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {ServicesData.map((coffee) => {
          const { id, img, name, description, aosDelay } = coffee;
          return (
            <motion.div
              key={id}
              variants={cardVariants}
              transition={{ delay: aosDelay / 1000 }}
              className="text-center p-4 space-y-6"
            >
              <img
                alt={name}
                src={img}
                className="img-shadow max-w-[200px] mx-auto hover:scale-110 duration-300 ease-in-out cursor-pointer"
              />
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-primary">{name}</h1>
                <h1 className="text-darkGray">{description}</h1>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Service;
