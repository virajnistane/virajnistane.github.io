import { BookOpen } from "lucide-react";

const courses = [
  {
    course: "General Relativity",
    instructor: "Prof. Martin Kunz",
    semester: "Autumn 2019–20",
    role: "Teaching Assistant",
  },
  {
    course: "Quantum Mechanics I",
    instructor: "Prof. Martin Kunz",
    semester: "Spring 2019–20",
    role: "Teaching Assistant",
  },
  {
    course: "General Relativity",
    instructor: "Prof. Martin Kunz",
    semester: "Autumn 2020–21",
    role: "Teaching Assistant",
  },
  {
    course: "Quantum Mechanics I",
    instructor: "Prof. Martin Kunz",
    semester: "Spring 2020–21",
    role: "Teaching Assistant",
  },
  {
    course: "Mechanics II",
    instructor: "Prof. Lucas Lombriser / Prof. Ruth Durrer",
    semester: "Autumn 2020–21",
    role: "Teaching Assistant",
  },
];

export default function Teaching() {
  return (
    <section id="teaching" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Teaching</h2>
        <span className="section-subline" />

        <p className="text-slate-400 text-sm mb-8">
          Teaching assistant at the Department of Theoretical Physics, Université
          de Genève.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 uppercase tracking-wider border-b border-slate-800">
                <th className="pb-3 pr-6">Course</th>
                <th className="pb-3 pr-6">Instructor</th>
                <th className="pb-3 pr-6">Semester</th>
                <th className="pb-3">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {courses.map((c, i) => (
                <tr key={i} className="group hover:bg-slate-900/50 transition-colors">
                  <td className="py-4 pr-6 text-slate-200 font-medium flex items-center gap-2">
                    <BookOpen size={14} className="text-teal-500 shrink-0" />
                    {c.course}
                  </td>
                  <td className="py-4 pr-6 text-slate-400">{c.instructor}</td>
                  <td className="py-4 pr-6 text-slate-400">{c.semester}</td>
                  <td className="py-4">
                    <span className="tag">{c.role}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
