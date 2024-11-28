import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
const Navbar = ({ sideBar, setSidebar }) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-[9999]">
      <div className="container">
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-semibold uppercase"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          >
            <span className="text-primary">Coders </span>Caffee.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          >
            <GiHamburgerMenu
              className="text-3xl cursor-pointer"
              onClick={() => {
                setSidebar(!sideBar);
              }}
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
