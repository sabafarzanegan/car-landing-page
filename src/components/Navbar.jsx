import React from "react";
import logo from "../assets/images/honda-logo-DkUJ5YbS.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
const slideRight = (delay) => ({
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});
const navMenu = [
  {
    id: 1,
    title: "home",
    link: "/",
    delay: 0.2,
  },
  {
    id: 2,
    title: "About us",
    link: "/",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Bikes",
    link: "/",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Cars",
    link: "/",
    delay: 0.5,
  },
];

const Navbar = () => {
  return (
    <main className="py-10">
      <div className="container ">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <div>
            <motion.img
              src={logo}
              alt=""
              className="w-[80px] invert"
              variants={slideRight(0.2)}
              initial="hidden"
              animate="show"
            />
          </div>
          {/* menu sections */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-center gap-4">
              {navMenu.map((item) => (
                <motion.li
                  key={item.id}
                  variants={slideRight(0.3)}
                  initial="hidden"
                  animate="show">
                  <motion.a
                    variants={slideRight(item.delay)}
                    initial="hidden"
                    animate="show"
                    className="inline-block px-4 py-2  uppercase text-lg  hover:scale-105 transition duration-300"
                    href={item.link}>
                    {item.title}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
          {/* icon section */}

          <div className="flex items-center justify-center gap-4">
            <motion.div
              variants={slideRight(0.5)}
              initial="hidden"
              animate="show"
              className="text-white text-lg w-[30px] h-[30px] flex items-center justify-center bg-white/30 rounded-full hover:scale-110 ">
              <IoSearchOutline />
            </motion.div>
            <motion.div
              variants={slideRight(0.6)}
              initial="hidden"
              animate="show"
              className="text-white text-lg w-[30px] h-[30px] flex items-center justify-center bg-white/30 rounded-full hover:scale-110 ">
              <FaBars />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
