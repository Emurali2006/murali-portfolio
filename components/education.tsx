import { GraduationCap, Award } from "lucide-react"

const CERTIFICATIONS = [
  "Python for Data Science - Coursera",
  "Machine Learning Specialization - Andrew Ng",
  "SQL for Data Analysis - Udemy",
  "Deep Learning Specialization - DeepLearning.AI",
  "Data Visualization with Power BI - LinkedIn Learning",
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {"// education"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            Education & Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>

            <div className="border-l-2 border-primary/30 pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary" />
                <span className="font-mono text-xs text-primary">2023 - 2027 (Expected)</span>
                <h4 className="text-base font-semibold text-foreground mt-1">
                  B.E. in Computer Science & Engineering
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Government College of Engineering
                </p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Relevant coursework: Data Structures, Algorithms, Database Management Systems, Probability & Statistics, Artificial Intelligence, Data Mining.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary/50" />
                <span className="font-mono text-xs text-muted-foreground">2021 - 2023</span>
                <h4 className="text-base font-semibold text-foreground mt-1">
                  Higher Secondary Education
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Mathematics, Physics, Chemistry
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
            </div>

            <ul className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-3 bg-background border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span className="text-sm text-foreground leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
