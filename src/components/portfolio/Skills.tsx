import { Code, Database, Globe, Smartphone, Cloud, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      description: "Creating responsive and interactive user interfaces"
    },
    {
      icon: Database,
      title: "Backend Development", 
      skills: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB"],
      description: "Building robust server-side applications and APIs"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["REST APIs", "GraphQL", "WebSockets", "JWT", "OAuth", "WebRTC"],
      description: "Modern web protocols and communication standards"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"],
      description: "Scalable deployment and infrastructure management"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "PWA", "Responsive Design"],
      description: "Cross-platform mobile application development"
    },
    {
      icon: Zap,
      title: "Tools & Frameworks",
      skills: ["Vite", "Webpack", "Jest", "Cypress", "Figma", "VS Code"],
      description: "Development tools and productivity frameworks"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Experience & Stats */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Happy Clients", value: "30+" },
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