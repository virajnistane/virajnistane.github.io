import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Data Engineer",
    company: "Tough Tongue AI",
    location: "Remote",
    period: "05/2025 – Present",
    bullets: [
      "Designed and operated advanced ETL routines, transforming semi-structured NoSQL application data into reliable analytical products in PostgreSQL, optimised for bulk ingestion, throughput, and transformation efficiency.",
      "Orchestrated and automated analytics workflows using Prefect/Cronitor (DAG-style scheduling, retries, alerts), feeding up-to-date metrics into Marimo dashboards supporting product, finance, and operations decisions.",
      "Implemented testing, logging, and basic observability on pipelines, enabling faster incident detection and more reliable, repeatable releases in a small, fast-moving team.",
      "Delivered actionable insights on usage, retention, and system performance, directly supporting product strategy and enhancing user engagement.",
    ],
    tags: ["Python", "PostgreSQL", "Prefect", "Cronitor", "Marimo", "ETL", "NoSQL"],
  },
  {
    role: "Research Software Engineer",
    company: "Observatoire de la Côte d'Azur (CNRS)",
    location: "Nice, France",
    period: "10/2024 – Present",
    note: "ESA's Euclid Mission",
    bullets: [
      "Built and maintained EuclidClusterViz, a user-oriented data quality-control platform that streamlined development and production data access, significantly boosting research turnarounds for scientific users.",
      "Developed modular data pipelines for robust, scalable, and compliant scientific data flow, with documentation enabling self-service use across a diverse scientific team.",
      "Integrated CI/CD practices using GitLab and Jenkins, supporting modular development, automated testing, and seamless deployments for complex, long-running data workflows.",
      "Designed a flexible Pipeline Processing Order (PPO) framework to orchestrate and optimise computation, ensuring reliable, dependency-aware task execution across research workflows.",
    ],
    tags: ["Python", "GitLab CI/CD", "Jenkins", "Docker", "Data Pipelines", "Euclid"],
  },
  {
    role: "Doctoral / Post-doctoral Researcher",
    company: "Université de Genève",
    location: "Geneva, Switzerland",
    period: "08/2019 – 09/2024",
    bullets: [
      "Led simulation-driven parameter forecasting studies in large-scale astronomical collaborations, framing outputs as opportunity-evaluation analyses comparing survey configurations and quantifying scientific yield.",
      "Developed HIRAXmcmc, a robust Python package enabling efficient Bayesian analysis and forecasting for the HIRAX radio telescope experiment.",
      "Engineered and validated an advanced statistical estimator to extract weak signals from noisy spatial density data, boosting signal-to-noise ratio by 30–38× through optimised variance reduction.",
      "Co-developed SERENEt, a deep learning framework (TensorFlow/Keras) for recovering astrophysical signals from contaminated radio images, including building training datasets from the GLEAM-MWA online catalog.",
    ],
    tags: ["Python", "TensorFlow", "Keras", "Bayesian Analysis", "HPC", "Slurm", "MCMC"],
  },
  {
    role: "JSPS Research Fellow",
    company: "Nagoya University Cosmology Group",
    location: "Nagoya, Japan",
    period: "Jun 2022 – Sep 2022",
    bullets: [
      "Conducted research on cosmological signal analysis as part of the JSPS Strategic Program Fellowship.",
    ],
    tags: ["Cosmology", "Python", "Research"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Experience</h2>
        <span className="section-subline" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-800 hidden md:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-14 relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1.5 w-10 h-10 rounded-full bg-slate-900 border border-slate-800 items-center justify-center">
                  <Briefcase size={16} className="text-teal-400" />
                </div>

                <div className="card group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-teal-400 transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-teal-400 text-sm font-medium">
                        {job.company}
                        {job.note && (
                          <span className="text-slate-500 font-normal">
                            {" "}
                            · {job.note}
                          </span>
                        )}
                      </p>
                      <p className="text-slate-500 text-xs">{job.location}</p>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
                        <span className="text-teal-500 mt-1 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
