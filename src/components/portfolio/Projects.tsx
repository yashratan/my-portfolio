import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Prompt Engineering",
      description: "End-to-end AI solution to drive conversational AI analytics. Asseses agents in Customer Support on the basis of pre-defined KPIs, with an interactive dashboard in Power BI.",
      technologies: ["Generative AI", "Python", "FastAPI", "Power BI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      featured: true,
      date: "2025"
    },
    {
      title: "Real-Time Agent Assist",
      description: "Enabled real-time assisting solutions for agent in customer support, using live transcriptions of the call, reducing their workload for mundane in-call and post-call activities.",
      technologies: ["GPT-4o", "Python", "Azure Suite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      featured: true,
      date: "2023"
    },
    {
      title: "Conversational AI - Cloud Deployment",
      description: "Led the implementation of microservices, built on springboot, on Google Cloud. Enabled monitoring functionalities to drive automated health checks on the systems.",
      technologies: ["Docker", "Kubernetes", "AWS", "Prometheus", "Grafana"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop&crop=center",
      featured: true,
      date: "2023"
    },
    {
      title: "AWS Deployment",
      description: "Deployed multiple microservices on AWS, using Docker and Kubernetes.",
      technologies: ["Docker", "Kubernetes", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
      featured: false,
      date: "2021"
    },
    {
      title: "Software Engineering - Pricing Model",
      description: "Designed & developed a pricing model to enable customers to quickly estimate product pricing, based on efforts.",
      technologies: ["Python", "Django", "PostgreSQL", "GCP"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      featured: false,
      date: "2022"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern design and smooth animations.",
      technologies: ["Vibe Coding", "React", "Typescript", "Vite", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      featured: false,
      date: "2025"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Projects<span className="gradient-text"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.date}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/20 rounded-md"
                        color="hsl(217deg 100% 90.56%);"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {/* <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card p-6 rounded-xl group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Date and Links */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.date}
                  </div>
                  {/* <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div> */}
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted/30 text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-muted/30 text-muted-foreground rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
