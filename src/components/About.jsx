"use client";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="md:pt-32 pt-20 min-h-[90vh]">
      <section className="flex flex-col body-font">
        <div className="container md:px-5 mx-auto">
          <h1 className="font-poppins font-bold text-black text-2xl py-5">
            About IEI Student Chapter (CSE)
          </h1>
          <Fade top>
            <p>
              IEI Student Chapter, Department of Computer Science & Engineering,
              SAHYADRI College of Engineering and Management Mangaluru,
              established in the year 2021. The student chapter has been
              established with the vision of providing a professional networking
              Platform to the stakeholders, opportunity to Exhibit Technical and
              Engineering Talent through Project Competition, organizing
              technical events in association with a recognized professional
              body
            </p>
          </Fade>
          <Fade delay={200} bottom>
            <p className="font-bold py-2">Chapter Code: 575007/SCEM/CS</p>
          </Fade>
        </div>
        <div className="container md:px-5 py-5 mx-auto">
          <h1 className="font-poppins font-bold text-black text-2xl py-5">
            About IEI-Institution of Engineers (India)
          </h1>
          <Fade delay={400} bottom>
            <p>
              The Institution of Engineers (India) is the national organization
              of engineers in India. The Institution of Engineers (India) has
              more than one million members in 15 engineering disciplines in 125
              centers or chapters in India and overseas; it is the world&apos;s
              largest multi-disciplinary engineering professional society in the
              engineering and technology world. The Institution of Engineers
              (India) was established in 1920 in Kolkata, West Bengal, and is
              acclaimed to have pioneered non-formal education in engineering.
              The Institution of Engineers (India) conducts an examination of
              its associate membership. This examination is considered to be on
              par with B.E. / B.Tech. When contemplated as an eligibility
              qualification to write competitive examinations like the Indian
              Civil Service, Indian Engineering Services, GATE, etc., and for
              employment in Government, public and private sectors in India.
              This qualification is recognized by the Ministry of HRD, the
              government of India, as equivalent to B.E./ B.Tech. The
              Institution of Engineers (India) was incorporated by the Royal
              Charter in 1935. It is currently headquartered at 8 Gokhale Road,
              Kolkata.
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default About;
