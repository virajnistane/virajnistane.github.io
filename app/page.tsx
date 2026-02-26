import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Teaching from "@/components/Teaching";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Publications />
      <Teaching />
      <Contact />
      <Footer />
    </main>
  );
}
