import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "nato.viraj@gmail.com",
    href: "mailto:nato.viraj@gmail.com",
    display: "nato.viraj@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/virajnistane",
    display: "github.com/virajnistane",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/virajnistane/",
    display: "linkedin.com/in/viraj-nistane",
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+33759321118",
    display: "+33 (0)7 59 32 11 18",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Contact</h2>
        <span className="section-subline" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-300 leading-relaxed mb-6">
              I&apos;m open to opportunities in data engineering, scientific
              computing, and research software. Whether you have a question or
              just want to say hi, feel free to reach out!
            </p>
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={14} className="text-teal-500" />
              Nice, France (open to remote &amp; relocation)
            </p>
          </div>

          <div className="space-y-3">
            {links.map(({ icon: Icon, label, href, display }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 card group hover:border-teal-700 transition-colors"
              >
                <div className="p-2 bg-teal-950 rounded-lg group-hover:bg-teal-900 transition-colors">
                  <Icon size={16} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="text-sm text-slate-200 group-hover:text-teal-400 transition-colors">
                    {display}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
