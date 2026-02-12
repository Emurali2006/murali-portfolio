import { Mail, MapPin, Github, Linkedin, FileText } from "lucide-react"

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "murali@email.com",
    href: "mailto:murali@email.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/murali",
    href: "https://github.com/murali",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/murali",
    href: "https://linkedin.com/in/murali",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {"// contact"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            {"Let's Connect"}
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            {"I'm actively looking for entry-level Data Scientist opportunities. Feel free to reach out if you'd like to discuss data, projects, or potential collaborations."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {LINKS.map((link) => (
            <div
              key={link.label}
              className="bg-card border border-border rounded-lg p-5 flex items-start gap-4 hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {link.label}
                </span>
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-foreground font-medium hover:text-primary transition-colors mt-0.5"
                  >
                    {link.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground font-medium mt-0.5">
                    {link.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
