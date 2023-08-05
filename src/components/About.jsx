"use client";
import Image from "next/image";
import Fade from "react-reveal/Fade";
Image;

const About = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="flex py-5 text-lg md:w-3/5 text-center">
          <Fade top>
            <p>
              We are a statutory body dedicated to advancing engineering and
              technology. Our mission is to empower students through workshops,
              hackathons, training, and research projects. Join us to become a
              corporate member upon program completion and excel in your
              engineering career. Together, let&apos;s shape the future of
              technology!
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
