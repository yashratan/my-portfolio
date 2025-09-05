import { Code, Database, Globe, Cloud, Zap, BrainCircuit, BrainCog, Brain, Warehouse } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Warehouse,
      title: "Market Analysis",
      skills: ["A/B Testing", "GTM Strategy", "Market Research", "Data Analysis", "KPI analysis", "Pricing Strategy"],
      description: "Collaborated with multiple stakeholders for product ideation and extensive market research"
    },
    {
      icon: BrainCircuit,
      title: "Artifical Intelligence",
      skills: ["OpenAI API", "Large Language Models (LLMs)", "Vector DBs", "Prompt Engineering"],
      description: "Integrating AI features and models into applications to enhance customer experience"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["GCP", "Docker", "Kubernetes (GKE)", "CI/CD", "Git", "Linux", "Terraform"],
      description: "Scalable deployment and automation using cloud infrastructure management tools"
    },
    // {
    //   icon: Globe,
    //   title: "Web Technologies",
    //   skills: ["REST APIs", "Python", "WebSockets", "PostgreSQL", "FastAPI", "ReactJS", "Typescript"],
    //   description: "Modern web protocols and communication standards"
    // }
    // {
    //   icon: BrainCog,
    //   title: "Mobile Development",
    //   skills: ["React Native", "Flutter", "PWA", "Responsive Design"],
    //   description: "Cross-platform mobile application development"
    // },
    // {
    //   icon: Database,
    //   title: "Backend Development", 
    //   skills: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB"],
    //   description: "Building robust server-side applications and APIs"
    // },
    // {
    //   icon: Zap,
    //   title: "Tools & Frameworks",
    //   skills: ["Vite", "Webpack", "Jest", "Cypress", "Figma", "VS Code"],
    //   description: "Development tools and productivity frameworks"
    // },
    // {
    //   icon: Code,
    //   title: "Frontend Development",
    //   skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    //   description: "Creating responsive and interactive user interfaces"
    // }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Skills<span className="gradient-text"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Experience & Stats */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Years Experience", value: "6+" },
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies", value: "20+" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <category.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-muted/30 border border-white/10 rounded-full text-foreground hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;