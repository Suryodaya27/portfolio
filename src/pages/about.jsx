import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion as m } from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export const About = () => {
  const logo = require("../images/human-hand.png");
  const leetcode = require("../images/leetcode.png");
  const navigate = useNavigate();
  function handleClickHome() {
    navigate("/");
  }
  return (
    <AnimatePresence>
      <div className=" homePage py-5 px-7 lg:px-28">
        <m.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className=" p-5 lg:text-7xl text-5xl text-yellow-300 font-semibold ">
            About Me
          </h2>
        </m.div>
        <div className="px-6 flex flex-col justify-between lg:flex-row">
          <div className=" text-white">
            <m.p
              className="py-10 lg:w-2/3 "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              I am studying in Thadomal Shahani Engineering College(TSEC),Mumbai
              in the Electronics and Telecommunication branch, I am expected to
              graduate in 2024. My interest lies in full stack development, and I
              have already solved <u>more than 750 problems on Leetcode</u>.
            </m.p>
            <m.p
              className="py-3  text-xl text-slate-200"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Languages: C++, HTML, CSS , Javascript <br/>
              Framework: ReactJs , Bootstrap , Tailwind <br/>
              Backend Tools: NodeJs , Express , Prisma<br/>
              Database: MySQL
            </m.p>
            <m.div
              className="flex py-5 text-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <div>
                <h3 className=" font-semibold text-slate-300">Profiles : </h3>
              </div>
              <div className=" px-5 flex gap-10 ">
                <a
                  href="https://www.linkedin.com/in/suryodaya27"
                  target="_blank"
                >
                  <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/Suryodaya27" target="_blank">
                  <FaGithub size={30} />
                </a>
                <a href="https://leetcode.com/suryodaya_27/" target="_blank">
                  <img src={leetcode} style={{ height: "32px" }} />
                </a>
              </div>
            </m.div>
          </div>
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <img className="tableImage" src={logo} alt="" />
          </m.div>
        </div>
        <m.div
          className="p-10 flex gap-6 lg:p-5 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className=" bg-yellow-300 p-3 rounded-lg w-fit cursor-pointer hover:bg-yellow-600"
            onClick={handleClickHome}
          >
            &larr; Back to home
          </h2>
          <h2 className=" bg-sky-300 p-3 rounded-lg w-fit cursor-pointer hover:bg-sky-600">
            <a
              href="https://drive.google.com/file/d/1_rJuBA8_HxgzvyXhOHiKajsB4JFAb8Im/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </h2>
        </m.div>
      </div>
    </AnimatePresence>
  );
};
