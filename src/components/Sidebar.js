import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
const Sidebar = () => {
  return (
    <motion.div
      whileInView={{ x: 0 }}
      className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primaryDark/80 backdrop-blur-sm z-10"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6 text-white">
          <div className="w-[1px] h-[70px] bg-white"></div>
          <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
            {" "}
            <FaFacebookF className="text-2xl" />
          </div>

          <div className="inline-block p-2 rounded-full cursor-pointer  border border-white">
            <FaTwitter className="text-2xl" />
          </div>
          <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
            <FaInstagram className="text-2xl" />
          </div>

          <div className="w-[1px] h-[70px] bg-white"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
