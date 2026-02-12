import { BrainCircuit, Database, BarChart3, Code2 } from "lucide-react"

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Python Developer",
    description: "Proficient in Python for data analysis, scripting, and building ML pipelines.",
  },
  {
    icon: Database,
    title: "SQL Expert",
    description: "Skilled in writing complex queries, database design, and data extraction.",
  },
  {
    icon: BrainCircuit,
    title: "ML & DL Practitioner",
    description: "Hands-on experience building models with scikit-learn, TensorFlow, and Keras.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Builder",
    description: "Creating insightful dashboards with Power BI, Tableau, and Matplotlib.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {"// about me"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            Passionate about turning data into decisions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              I am a 3rd-year Computer Science and Engineering student at the Government College of Engineering with a deep passion for Data Science and Artificial Intelligence.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My journey started with curiosity about how companies like Google and Netflix use data to make intelligent decisions. That curiosity led me to master Python and SQL, and dive deep into Machine Learning and Deep Learning.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I have built predictive models, trained neural networks, and designed interactive dashboards that translate complex data into clear visual stories. I am actively seeking entry-level Data Scientist roles where I can apply my skills to solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
