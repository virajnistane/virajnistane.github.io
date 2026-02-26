import React from "react";

const experience: Array<{
  role: string;
  company: string;
  location: string;
  period: string;
  note?: string;
  summary: string | React.ReactNode;
  tags: string[];
}> = [
  {
    role: "Data Engineer",
    company: "Tough Tongue AI",
    location: "Remote",
    period: "05/2025 - Present",
    summary:
      "ETL pipelines (NoSQL → PostgreSQL), workflow orchestration with Prefect/Cronitor, pipeline observability, and Marimo dashboards for product and operations analytics.",
    tags: ["Python", "PostgreSQL", "Prefect", "Cronitor", "Marimo", "ETL", "NoSQL"],
  },
  {
    role: "Research Software Engineer",
    company: "Observatoire de la Côte d'Azur (CNRS)",
    location: "Nice, France",
    period: "10/2024 - Present",
    note: "ESA's Euclid Mission",
    summary: (
      <>
        Built{" "}
        <a href="#projects" className="text-teal-400 hover:text-teal-300 underline">
          EuclidClusterViz
        </a>{" "}
        (data QC platform), modular scientific data pipelines, CI/CD integration with GitLab & Jenkins, and a PPO framework for dependency-aware workflow orchestration.
      </>
    ),
    tags: ["Python", "GitLab CI/CD", "Jenkins", "Docker", "Data Pipelines", "Euclid"],
  },
  {
    role: "Doctoral / Post-doctoral Researcher",
    company: "Université de Genève",
    location: "Geneva, Switzerland",
    period: "08/2019 - 09/2024",
    summary: (
      <>
        Simulation-driven cosmological forecasting, Bayesian analysis (
        <a href="#projects" className="text-teal-400 hover:text-teal-300 underline">
          HIRAXmcmc
        </a>{" "}
        package), 30-38x improvement in reconstruction noise via novel statistical estimator for weak (lensing) signals 
        from noisy spatial density data, and co-developed{" "}
        <a href="#projects" className="text-teal-400 hover:text-teal-300 underline">
          SERENEt
        </a>{" "}
        deep learning framework for radio signal recovery.
      </>
    ),
    tags: ["Python", "TensorFlow", "Keras", "Bayesian Analysis", "HPC", "Slurm", "MCMC"],
  },
  {
    role: "JSPS Research Fellow",
    company: "Nagoya University Cosmology Group",
    location: "Nagoya, Japan",
    period: "Jun 2022 - Sep 2022",
    summary: "Cosmological signal analysis research under the JSPS Strategic Program Fellowship.",
    tags: ["Cosmology", "Python", "Research"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Experience</h2>
        <span className="section-subline" />

        <div className="space-y-4">
          {experience.map((job, i) => (
            <div key={i} className="card group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-semibold text-slate-100 group-hover:text-teal-400 transition-colors leading-tight">
                    {job.role}
                    <span className="text-teal-400 font-normal"> · {job.company}</span>
                    {job.note && (
                      <span className="text-slate-500 font-normal text-xs"> ({job.note})</span>
                    )}
                  </h3>
                  <p className="text-xs text-slate-500">{job.location}</p>
                </div>
                <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap self-start shrink-0">
                  {job.period}
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                {typeof job.summary === "string" ? job.summary : job.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
