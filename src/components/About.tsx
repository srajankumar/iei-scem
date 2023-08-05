import Image from "next/image";
import React from "react";
Image;

const About = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="flex md:w-3/5 text-center">
          {/* <h1 className="flex items-center font-poppins text-3xl px-20">
            About
          </h1> */}
          <p className="py-5 text-lg">
            We are a statutory body dedicated to advancing engineering and
            technology. Our mission is to empower students through workshops,
            hackathons, training, and research projects. Join us to become a
            corporate member upon program completion and excel in your
            engineering career. Together, let's shape the future of technology!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
