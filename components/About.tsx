import { Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">About</h2>
        <span className="section-subline" />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-4 text-slate-300 leading-relaxed">
            <p>
              I&apos;m a Research &amp; Data Engineer with a{" "}
              <span className="text-teal-400 font-medium">
                PhD in Theoretical Physics
              </span>{" "}
              from the University of Geneva, with hands-on experience building
              production-grade data pipelines, ETL routines, and scientific
              computing systems.
            </p>
            <p>
              My background spans cosmological simulations, Bayesian analysis,
              deep learning for radio astronomy, and modern data engineering
              practices — bridging the gap between rigorous research and
              scalable software.
            </p>
            <p>
              I&apos;m skilled in workflow orchestration, data
              quality/observability, and mathematical modelling, with a track
              record of turning complex data into actionable insights across
              academic and industry settings.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            {/* Award highlight */}
            <div className="card flex items-start gap-4">
              <div className="mt-0.5 p-2 bg-teal-950 rounded-lg">
                <Award size={18} className="text-teal-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  JSPS Fellowship (FY2021)
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Japan Society for the Promotion of Science — Strategic Program
                  Research Fellow in Japan
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="card space-y-3">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  ["Location", "Nice, France"],
                  ["Nationality", "Indian"],
                  ["Languages", "English, Hindi, Marathi, French"],
                  ["Email", "nato.viraj@gmail.com"],
                ].map(([k, v]) => (
                  <li key={k} className="flex gap-2">
                    <span className="text-slate-500 w-20 shrink-0">{k}</span>
                    <span className="text-slate-300">{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* External profiles */}
            <div className="card space-y-2">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Research Profiles
              </h3>
              {[
                ["Google Scholar", "https://scholar.google.com/citations?user=rRZ46wUAAAAJ&hl=en&oi=ao"],
                ["ORCiD", "https://orcid.org/0000-0002-2165-1393"],
                ["arXiv", "https://arxiv.org/search/?query=viraj+nistane&searchtype=all"],
                ["inSPIRE-HEP", "http://inspirehep.net/search?ln=en&p=f+a+viraj+nistane&of=hb&action_search=Search&sf=earliestdate&so=d"],
              ].map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-teal-400 hover:text-teal-300 transition-colors"
                >
                  → {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
