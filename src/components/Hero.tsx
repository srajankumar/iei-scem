import React from "react";
import Image from "next/image";

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
          <p> The Institution of Engineers (India)</p>
          <p>CSE Sahyadri Student Chapter</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
