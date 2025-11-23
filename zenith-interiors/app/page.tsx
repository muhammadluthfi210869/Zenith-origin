import Hero from "../components/Hero";
import Features from "../components/Features";
import Calculator from "../components/Calculator";
import Process from "../components/Process";
import Studio from "../components/Studio";

export default function Home() {
  return (
    <div className="bg-[#0D1117] font-sans text-white">
      <Hero />
      <Features />
      <Calculator />
      <Process />
      <Studio />
    </div>
  );
}