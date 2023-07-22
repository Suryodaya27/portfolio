import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion as m } from "framer-motion";

export const Home = () => {
  const navigate = useNavigate();
  function handleClickAbout() {
    navigate("/about");
  }
  function handleClickProject() {
    navigate("/projects");
  }
  const logo = require("../images/new_home.png");
  return (
    <AnimatePresence>
      <div className="homePage  px-14 lg:px-28 lg:pt-20">
        <div className="  flex flex-col gap-10 justify-between lg:flex-row lg:gap-20 lg:px-20">
          <div className="pt-10">
            <m.div
              className=" text-5xl text-slate-100 font-medium py-2 lg:py-5 lg:text-7xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Hello there !!</h1>
            </m.div>
            <m.div
              className="text-2xl text-orange-600 py-2 lg:py-5 lg:text-4xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h3>I am Suryodaya pandey</h3>
            </m.div>
            <m.div
              className="text-xl text-slate-300 py-2 lg:py-5 lg:text-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p>I'm Full-Stack developer</p>
            </m.div>
          </div>
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <img className="Image lg:pt-16 pb-8" src={logo} />
          </m.div>
        </div>
        <m.div
          className=" text-sm  flex font-normal flex-col gap-10 lg:flex-row lg:gap-16 lg:px-20 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2
              className=" bg-orange-600 p-3 rounded-lg w-fit cursor-pointer hover:bg-orange-300"
              onClick={handleClickAbout}
            >
              About me &rarr;
            </h2>
          </div>
          <div>
            <h2
              className=" bg-sky-300 p-3 rounded-lg w-fit cursor-pointer hover:bg-sky-600"
              onClick={handleClickProject}
            >
              My projects &rarr;
            </h2>
          </div>
        </m.div>
      </div>
    </AnimatePresence>
  );
};
