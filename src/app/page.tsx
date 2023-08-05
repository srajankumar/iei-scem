import About from "@/components/About";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Image from "next/image";
import Background from "@/components/Background";

export default function Home() {
  return (
    <div>
      <Background />
      <div className="pt-20 px-10">
        <Hero />
        <About />
        <section id="team">
          <Team />
        </section>
      </div>
    </div>
  );
}
