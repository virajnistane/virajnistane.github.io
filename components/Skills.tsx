const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "SQL", "NoSQL", "Bash", "Git", "Deep Learning", "Machine Learning"],
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      "TensorFlow", "Keras", "Pandas", "NumPy", "SciPy", "Matplotlib", "Plotly",
      "SQLAlchemy", "Prefect", "PyMongo", "PySpark", "DeltaLake", "Asyncio",
      "Pytest", "Marimo", "Databricks",
    ],
  },
  {
    category: "Infrastructure & DevOps",
    skills: ["Docker", "Jenkins", "GitLab CI/CD", "SSH", "Slurm", "OpenMPI", "GPU Programming", "Agile"],
  },
  {
    category: "HPC & Distributed Systems",
    skills: ["Parallel Programming", "Distributed Systems", "HPC", "GPU Programming"],
  },
  {
    category: "Data & Analytics",
    skills: [
      "ETL Pipelines", "Data Quality", "Statistical Analysis",
      "Mathematical Modelling", "Bayesian Analysis", "Data Visualisation",
    ],
  },
  {
    category: "Languages",
    skills: ["English (C2)", "Hindi (C2)", "Marathi (C2, Native)", "French (B1)", "German (A1)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Skills</h2>
        <span className="section-subline" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="card">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
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
