import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Ph.D. in Physics",
    institution: "Université de Genève",
    location: "Geneva, Switzerland",
    period: "Aug 2019 - Jun 2023",
    note: "Department of Theoretical Physics. Focus on cosmological perturbation theory, CMB, galaxy surveys, and 21-cm radio experiments.",
  },
  {
    degree: "M.Sc. in Physics",
    institution: "Ludwig-Maximilians-Universität München",
    location: "Munich, Germany",
    period: "Sep 2016 - Apr 2019",
    note: "Specialisation in theoretical and mathematical physics.",
  },
  {
    degree: "B.Tech. in Engineering Physics",
    institution: "Indian Institute of Technology Delhi",
    location: "New Delhi, India",
    period: "Jul 2012 - May 2016",
    note: "Foundation in applied physics, mathematics, and engineering fundamentals.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Education</h2>
        <span className="section-subline" />

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <div key={i} className="card group flex flex-col gap-3">
              <div className="p-2 w-fit bg-teal-950 rounded-lg">
                <GraduationCap size={18} className="text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 group-hover:text-teal-400 transition-colors leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-teal-400 text-sm mt-1">{edu.institution}</p>
                <p className="text-slate-500 text-xs">{edu.location}</p>
              </div>
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full w-fit">
                {edu.period}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">{edu.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
