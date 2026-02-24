import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(90deg, #14b8a6 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
        <p className="text-teal-400 font-mono text-sm mb-4 tracking-widest uppercase">
          Hello, world. I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
          Viraj Nistane
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-light mb-2">
          Data Scientist &amp; Research Engineer
        </p>
        <p className="text-slate-500 text-sm mb-8 flex items-center justify-center gap-1.5">
          <MapPin size={14} className="text-teal-500" />
          Nice, France
        </p>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          PhD in Theoretical Physics · Building production-grade data pipelines,
          ML models, and scientific computing systems.
        </p>

        {/* CTA links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#experience"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-lg transition-colors duration-200 text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-700 hover:border-teal-500 text-slate-300 hover:text-teal-400 font-semibold rounded-lg transition-colors duration-200 text-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/virajnistane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-teal-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/viraj-nistane/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-teal-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:nato.viraj@gmail.com"
            className="text-slate-500 hover:text-teal-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-teal-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
