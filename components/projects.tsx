import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const PROJECTS = [
  {
    title: "Customer Churn Prediction",
    description:
      "Built a classification model using Random Forest and XGBoost to predict customer churn for a telecom company. Achieved 92% accuracy with feature engineering and hyperparameter tuning.",
    tags: ["Python", "Scikit-Learn", "Pandas", "XGBoost"],
    type: "Machine Learning",
    github: "#",
  },
  {
    title: "Sentiment Analysis on Product Reviews",
    description:
      "Developed an NLP pipeline using LSTM networks to classify product reviews as positive, negative, or neutral. Preprocessed 50K+ reviews with tokenization and word embeddings.",
    tags: ["Python", "TensorFlow", "NLP", "Keras"],
    type: "Deep Learning",
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Designed an interactive dashboard to track sales KPIs, regional performance, and product trends. Connected to live SQL databases for real-time updates.",
    tags: ["Power BI", "SQL", "DAX", "Data Modeling"],
    type: "Dashboard",
  },
  {
    title: "House Price Prediction",
    description:
      "Implemented a regression model to predict house prices using features like location, area, and amenities. Used data cleaning, EDA, and ensemble methods.",
    tags: ["Python", "Scikit-Learn", "Matplotlib", "Seaborn"],
    type: "Machine Learning",
    github: "#",
  },
  {
    title: "Image Classification with CNN",
    description:
      "Trained a Convolutional Neural Network to classify images from the CIFAR-10 dataset with 88% test accuracy. Applied data augmentation and batch normalization.",
    tags: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    type: "Deep Learning",
    github: "#",
  },
  {
    title: "COVID-19 Data Tracker Dashboard",
    description:
      "Built a real-time COVID-19 tracker dashboard visualizing cases, recoveries, and vaccinations across Indian states using public APIs.",
    tags: ["Tableau", "Python", "REST API", "Pandas"],
    type: "Dashboard",
  },
]

function getTypeColor(type: string) {
  switch (type) {
    case "Machine Learning":
      return "bg-primary/15 text-primary border-primary/30"
    case "Deep Learning":
      return "bg-chart-2/15 text-chart-2 border-chart-2/30"
    case "Dashboard":
      return "bg-chart-4/15 text-chart-4 border-chart-4/30"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {"// projects"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            What I have built
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-xl leading-relaxed">
            A selection of projects spanning machine learning, deep learning, and data visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 flex flex-col hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-mono px-2.5 py-1 rounded-full border ${getTypeColor(project.type)}`}
                >
                  {project.type}
                </span>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`GitHub repo for ${project.title}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`External link for ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-mono bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
