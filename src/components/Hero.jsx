"use client";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="flex font-poppins rounded-3xl text-black justify-center items-center h-96 my-5">
        <div className="flex items-center md:flex-row flex-col lg:text-4xl md:text-3xl text-lg font-bold">
          <Image
            src="/assets/iei-color.png"
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
      <div>
        <div className="flex w-full justify-center">
          <div className="flex py-5 text-lg md:w-3/5 text-center">
            <Fade top>
              <p>
                We are a statutory body dedicated to advancing engineering and
                technology. Our mission is to empower students through
                workshops, hackathons, training, and research projects. Join us
                to become a corporate member upon program completion and excel
                in your engineering career. Together, let&apos;s shape the
                future of technology!
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
