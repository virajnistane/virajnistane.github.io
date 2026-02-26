import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "alexiAId",
    short: "Emotion Translator — Tough Tongue AI",
    description:
      "Production-ready emotion translation and coaching app for alexithymic individuals — built with Next.js 15, TypeScript, Firebase, and the Tough Tongue AI API (implemented at Tough Tongue AI). Features an AI emotion coach, interactive assessments, emotion journaling, progress dashboard, and an admin analytics panel.",
    href: "https://alexi-aid.vercel.app/",
    githubHref: "https://github.com/virajnistane/alexiAId",
    tags: ["Next.js", "TypeScript", "Firebase", "Tough Tongue AI", "Tailwind CSS", "Zustand"],
  },
  {
    name: "ESA Euclid Mission",
    short: "European Space Agency",
    description:
      "Contributing to the Euclid space telescope mission as a CNRS Research Software Engineer. Built EuclidClusterViz, a data quality-control platform for scientific users, and developed modular pipelines for compliant scientific data flow.",
    href: "https://sci.esa.int/web/euclid/",
    githubHref: "https://github.com/virajnistane/EuclidClusterViz",
    tags: ["Cosmology", "Data Pipelines", "CI/CD", "Python"],
  },
  {
    name: "HIRAX",
    short: "Hydrogen Intensity Real-Time Analysis eXperiment",
    description:
      "Contributed to the HIRAX radio telescope project — a 256-element interferometric array designed to detect dark energy through 21-cm hydrogen intensity mapping. Developed the HIRAXmcmc Python package for Bayesian parameter estimation and led cosmological simulation-driven forecasting studies.",
    href: "https://hirax.ukzn.ac.za",
    tags: ["Radio Astronomy", "Bayesian Analysis", "Python", "HPC"],
  },
  {
    name: "SKA-CH",
    short: "Square Kilometre Array Switzerland",
    description:
      "Member of the Swiss consortium for the Square Kilometre Array (SKA) — the world's largest radio telescope. Involved in 21-cm signal analysis, foreground removal research, and Science Data Challenges.",
    href: "https://skach.org",
    tags: ["21-cm Cosmology", "Signal Processing", "Research"],
  },
  {
    name: "SERENEt",
    short: "Deep Learning for Radio Astronomy",
    description:
      "Co-developed SERENEt, a deep learning framework using TensorFlow/Keras to recover astrophysical signals from contaminated radio images. Included building structured training datasets by extracting and parsing data from the GLEAM-MWA online catalog.",
    href: "",
    tags: ["TensorFlow", "Keras", "Deep Learning", "Radio Astronomy"],
  },
  {
    name: "HIRAXmcmc",
    short: "Python Package",
    description:
      "Open-source Python package for efficient Bayesian analysis and MCMC-based parameter forecasting for HIRAX cosmology experiments. Enables simulation-driven survey configuration comparisons.",
    href: "https://github.com/virajnistane",
    tags: ["Python", "MCMC", "Bayesian", "Open Source"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Projects & Collaborations</h2>
        <span className="section-subline" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="card group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-teal-400 transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 ml-2 shrink-0">
                    {"githubHref" in project && project.githubHref && (
                      <a
                        href={project.githubHref as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-teal-400 transition-colors"
                        aria-label={`GitHub: ${project.name}`}
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-teal-400 transition-colors"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-xs text-teal-400 mb-3">{project.short}</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
