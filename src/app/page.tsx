import About from "@/components/About";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Image from "next/image";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Background />
      <Navbar />
      <div className="pt-20 px-10">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="team">
          <Team />
        </section>
      </div>
    </div>
  );
}
