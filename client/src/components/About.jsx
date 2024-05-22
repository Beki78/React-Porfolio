import React from "react";
import Photo from "../assets/photo_2024-05-15_11-02-44.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="bg-slate-950 min-h-screen flex items-center flex-col lg:flex-row gap-7 md:gap-20 px-5 sm:px-16 md:px-32 lg:px-52 font-[Poppins] pb-14">
        <div >
          <img
            src={Photo}
            className="w-48 lg:w-[90rem] rounded-lg shadow-lg shadow-cyan-800 "
          />
        </div>
        <div>
          <p className="text-cyan-400 text-xs sm:text-[1rem] leading-6">
            Hi, I'm Bereket, a passionate full stack developer from Ethiopia. I
            can build dynamic and responsive web applications using MERN stack.
            Driven by curiosity and dedication, I am self-taught, and I like to
            update my self to the latest technology. I'm eager to contribute to
            innovative projects and collaborate with like-minded professionals
            to create impactful digital solutions. Welcome to my portfolio!
            <Link to="/about" className="text-cyan-200 font-semibold">
              &nbsp; More about me
              <CiShare1 className="inline text-lg" />
            </Link>
          </p>
          <hr className="border-[1/4px] my-7 mx-6 border-cyan-300  hover:text-cyan-500" />
          <div className="text-2xl text-cyan-500 flex gap-12 justify-center mt-12 ">
            <Link to="https://www.linkedin.com/in/bereketgetachew/">
              <FaLinkedin className="border-cyan-300  hover:text-cyan-700  duration-100 ease-in" />
            </Link>
            <Link to="https://github.com/Beki78/">
              <FaGithub className="border-cyan-300  hover:text-cyan-700  duration-100 ease-in" />
            </Link>
            <Link to="mailto:your.bakiget78@gmail.com">
              <MdEmail className="border-cyan-300  hover:text-cyan-700  duration-100 ease-in" />
            </Link>
            <Link to="https://t.me/BGM78BB">
              <FaTelegram className="border-cyan-300  hover:text-cyan-700  duration-100 ease-in" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
