import { BookOpen, ExternalLink } from "lucide-react";

interface Paper {
  title: string;
  authors: string;
  preprint?: string;
  doi?: string;
  journal: string;
  href?: string;
  inspireHref?: string;
}

const journalPapers: Paper[] = [
  {
    title: "HIRAX: Cosmology Simulations and Forecasts",
    authors: "Viraj Nistane et al.",
    preprint: "",
    doi: "",
    journal: "In preparation",
    href: "",
  },
  {
    title:
      "Square Kilometre Array Science Data Challenge 3a: foreground removal for an EoR experiment",
    authors: "A. Bonaldi, P. Hartley, R. Braun, S. Purser, A. Acharya et al.",
    preprint: "2503.11740",
    doi: "",
    journal: "arXiv:2503.11740 [astro-ph.IM]",
    href: "https://arxiv.org/abs/2503.11740",
    inspireHref: "https://inspirehep.net/literature/2901067",
  },
  {
    title:
      "Deep learning approach for identification of HII regions during reionization in 21-cm observations — III. image recovery",
    authors:
      "Michele Bianco, Sambit K. Giri, Rohit Sharma, Tianyue Chen, Shreyam Parth Krishna et al.",
    preprint: "2408.16814",
    doi: "",
    journal: "arXiv:2408.16814 [astro-ph.CO]",
    href: "https://arxiv.org/abs/2408.16814",
    inspireHref: "https://inspirehep.net/literature/2823317",
  },
  {
    title:
      "Hydrogen Intensity and Real-Time Analysis Experiment: 256-element array status and overview",
    authors: "Devin Crichton et al.",
    preprint: "2109.13755",
    doi: "10.1117/1.JATIS.8.1.011019",
    journal: "J.Astron.Telesc.Instrum.Syst. 8 (2022), 011019",
    href: "https://arxiv.org/abs/2109.13755",
    inspireHref: "https://inspirehep.net/literature/1932798",
  },
  {
    title: "An estimator for the lensing potential from galaxy number counts",
    authors:
      "Viraj Nistane, Mona Jalilvand, Julien Carron, Ruth Durrer, Martin Kunz",
    preprint: "2201.04129",
    doi: "10.1088/1475-7516/2022/06/024",
    journal: "JCAP 06 (2022) 06, 024",
    href: "https://arxiv.org/abs/2201.04129",
    inspireHref: "https://inspirehep.net/literature/2008956",
  },
  {
    title:
      "CMB sky for an off-center observer in a local void. Part I. Framework for forecasts",
    authors: "Viraj Nistane, Giulia Cusin, Martin Kunz",
    preprint: "1908.05484",
    doi: "10.1088/1475-7516/2019/12/038",
    journal: "JCAP 12 (2019), 038",
    href: "https://arxiv.org/abs/1908.05484",
    inspireHref: "https://inspirehep.net/literature/1749728",
  },
];

const proceedings: Paper[] = [
  {
    title:
      "The Hydrogen Intensity Real-Time Analysis eXperiment: Overview and Status Update",
    authors: "Anthony Walters, Keshav Bechoo et al.",
    doi: "10.23919/EuCAP60739.2024.10501639",
    journal:
      "2024 18th European Conference on Antennas and Propagation (EuCAP)",
    href: "https://ieeexplore.ieee.org/document/10501639",
  },
  {
    title:
      "Design and implementation of a noise temperature measurement system for the Hydrogen Intensity and Real-time Analysis eXperiment (HIRAX)",
    authors:
      "Emily R. Kuhn, Benjamin R.B. Saliwanchik, Maile Harris, Moumita Aich, Kevin Bandura et al.",
    preprint: "2101.06337",
    doi: "10.1117/12.2560270",
    journal:
      "Proc. SPIE 11445, Ground-based and Airborne Telescopes VIII, 114452Z (2021)",
    href: "https://arxiv.org/abs/2101.06337",
  },
  {
    title: "Mechanical and Optical Design of the HIRAX Radio Telescope",
    authors:
      "Benjamin R.B. Saliwanchik, Aaron Ewall-Wice, Devin Crichton, Emily R. Kuhn, Deniz Ölçek et al.",
    preprint: "2101.06338",
    doi: "",
    journal: "arXiv:2101.06338 [astro-ph.IM]",
    href: "https://arxiv.org/abs/2101.06338",
  },
];

function PaperCard({
  paper,
  index,
}: {
  paper: Paper;
  index: number;
}) {
  return (
    <div className="card group">
      <div className="flex items-start gap-4">
        <span className="text-2xl font-bold text-slate-800 shrink-0 select-none leading-none mt-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-slate-100 leading-snug group-hover:text-teal-400 transition-colors mb-1">
            {paper.href ? (
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {paper.title}
              </a>
            ) : (
              paper.title
            )}
          </h3>
          <p className="text-xs text-slate-400 mb-1">{paper.authors}</p>
          <p className="text-xs text-teal-500 italic">{paper.journal}</p>
          {(paper.preprint || paper.doi) && (
            <div className="flex flex-wrap gap-3 mt-2">
              {paper.preprint && (
                <a
                  href={`https://arxiv.org/abs/${paper.preprint}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={11} />
                  arXiv:{paper.preprint}
                </a>
              )}
              {paper.doi && (
                <span className="text-xs text-slate-500">
                  DOI: {paper.doi}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Publications</h2>
        <span className="section-subline" />

        {/* External profile links */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            ["Google Scholar", "https://scholar.google.com/citations?user=rRZ46wUAAAAJ&hl=en&oi=ao"],
            ["ORCiD", "https://orcid.org/0000-0002-2165-1393"],
            ["inSPIRE-HEP", "http://inspirehep.net/search?ln=en&p=f+a+viraj+nistane&of=hb&action_search=Search&sf=earliestdate&so=d"],
            ["arXiv", "https://arxiv.org/search/?query=viraj+nistane&searchtype=all"],
          ].map(([label, url]) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-400 border border-slate-800 hover:border-teal-800 rounded-full px-3 py-1.5 transition-colors"
            >
              <ExternalLink size={11} />
              {label}
            </a>
          ))}
        </div>

        {/* Journal papers */}
        <div className="flex items-center gap-3 mb-4">
          <BookOpen size={16} className="text-teal-400" />
          <h3 className="text-base font-semibold text-slate-200">
            Journal Articles
          </h3>
        </div>
        <div className="space-y-4 mb-12">
          {journalPapers.map((paper, i) => (
            <PaperCard key={i} paper={paper} index={i} />
          ))}
        </div>

        {/* Proceedings */}
        <div className="flex items-center gap-3 mb-4">
          <BookOpen size={16} className="text-teal-400" />
          <h3 className="text-base font-semibold text-slate-200">
            Conference Proceedings
          </h3>
        </div>
        <div className="space-y-4">
          {proceedings.map((paper, i) => (
            <PaperCard key={i} paper={paper} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
