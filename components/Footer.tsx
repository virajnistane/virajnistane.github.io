import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Viraj Nistane. Built with Next.js &amp;
          Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/virajnistane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-teal-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/viraj-nistane/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-teal-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:nato.viraj@gmail.com"
            className="text-slate-600 hover:text-teal-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
