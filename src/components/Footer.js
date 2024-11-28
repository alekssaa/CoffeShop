import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaPhone,
} from "react-icons/fa";
import creditCards from "../assets/img/credit-cards.webp";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold uppercase">Coders Coffe</h1>
            <p className="text-sm max-w-[300px]">
              Ex magna labore in anim cupidatat. Cupidatat ea ut ad ad est
              tempor aliquip. Aliqua dolor labore do
            </p>
            <div>
              <p className="flex items-center gap-2 ">
                <FaPhone /> +387 66 666 666{" "}
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Banja Luka
              </p>
            </div>
          </motion.div>
          <motion.div
            className="space-y-6 "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold ">Quick Links</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <ul className="space-y-6 cursor-pointer">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact US</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-6 cursor-pointer">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact US</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold ">Follow Us</h1>
            <div className="flex items-center gap-3 cursor-pointer">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2 "> Payment Methods</h1>
              <img src={creditCards} alt="credit cards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        <p className="text-white text-center mt-8  pt-8 border-t-2">
          Copyright &copy; 2024 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
