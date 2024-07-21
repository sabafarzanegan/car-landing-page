import React from "react";
import car from "../assets/images/car-C1G8urFv.png";
import buildingImg from "../assets/images/building2-DXkDzn_X.jpg";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const bgImage = {
  backgroundImage: `url(${buildingImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const slideUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 1,
      type: "spring",
      stiffness: 100,
    },
  },
});
function Hero() {
  return (
    <>
      <main style={bgImage}>
        <div className="bg-gradient-to-r from-primary to bg-primaryDark/90">
          <div className="container text-white">
            {/* navbar components */}
            <Navbar />
            {/* hero section components */}
            <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]">
              {/* text section */}
              <div className="space-y-8">
                <motion.h1
                  variants={slideUp(0.2)}
                  initial="hidden"
                  animate="show"
                  className="text-5xl lg:text-7xl font-bold leading-tight uppercase">
                  Honda <br />{" "}
                  <span className="uppercase text-transparent text-outline">
                    Sports EV
                  </span>
                </motion.h1>
                {/* button section */}
                <button className="border-[3px] rounded-lg px-6 py-2 flex items-center justify-center gap-4 group ">
                  Explore{" "}
                  <FaArrowRight className="group-hover:translate-x-2 transition" />
                </button>
                {/* feature section */}
                <div className="bg-black/40 space-y-2 p-4 lg:max-w-[350px] !mt-[60px]">
                  <h1 className="uppercase text-lg">vehicle feature </h1>
                  <p className="text-sm leading-loose">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione saepe numquam veritatis quidem consequuntur eius,
                    repellat reprehenderit corrupti magni officiis sapiente.
                    Expedita laborum praesentium molestias velit assumenda qui
                    vel quam.
                  </p>
                </div>
              </div>

              {/* img section */}
              <div className="relative">
                <motion.img
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    duration: 0.5,
                    stiffness: 100,
                    damping: 10,
                  }}
                  src={car}
                  alt=""
                  className="relative z-30 w-full"
                />
                <div className="absolute top-0 left-1/2 border-[20px] border-cyan-200 rounded-full h-[180px] w-[180px] md:h-[300px] md:w-[300px] glowing-sahdow"></div>
                <div className="absolute -top-40 left-0 z-[1]">
                  <h1 className="text-[150px] scale-150 font-bold uppercase text-cyan-200/10">
                    sport
                  </h1>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
