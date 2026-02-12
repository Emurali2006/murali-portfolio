"use client"

const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "R", level: 55 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "Keras", level: 78 },
      { name: "PyTorch", level: 60 },
    ],
  },
  {
    category: "Data Visualization",
    skills: [
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 80 },
      { name: "Power BI", level: 75 },
      { name: "Tableau", level: 70 },
    ],
  },
  {
    category: "Tools & Libraries",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Git & GitHub", level: 70 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {"// skills"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            My technical toolkit
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-xl leading-relaxed">
            A collection of technologies and tools I use to extract insights, build models, and create impactful data visualizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-mono text-xs tracking-widest text-primary uppercase mb-6 border-b border-border pb-3">
                {cat.category}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
