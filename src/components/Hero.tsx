"use client";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="flex font-poppins rounded-3xl text-black justify-center items-center h-96 my-5">
      <div className="flex items-center md:flex-row flex-col lg:text-4xl md:text-3xl text-lg font-bold">
        <Image
          src="/logomain1.png"
          alt="logo-main"
          className="w-48 my-5 mx-5"
          width={500}
          height={500}
        ></Image>
        <div className="flex justify-center leading-relaxed flex-col items-center">
          <Fade left cascade>
            <h1> The Institution of Engineers (India)</h1>
            <h2>CSE Sahyadri Student Chapter</h2>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
