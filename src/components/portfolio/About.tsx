import { User, Target, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the projects and discover what drives my passion for technology and innovation.
          </p> */}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Section */}
            <div>
              <div className="w-48 h-48 mx-auto md:mx-0 mb-8 rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold gradient-text">
                  YR
                </div>
              </div>
            </div>

            {/* About Content */}
            <div>
              {/* <h3 className="text-2xl font-bold mb-6">Hello, I'm Yash Ratan</h3> */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I am passionate about building products, with a deep love for creating innovative solutions that bridge the gap between technology
                and user experience. With over 6+ years of experience in business and technology consulting, I specialize in transforming complex problems
                into experiences using cutting-edge technologies.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My journey began with a curiosity about how technology can improve people's lives. Today, I combine 
                strategic thinking with technical expertise to deliver products that not only meet business objectives 
                but also create meaningful experiences for users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside work, I am passionate about reading, travelling, and sports, particularly cricket and badminton.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 glass-card hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">User-Centric</h4>
              <p className="text-muted-foreground text-sm">
                Every decision I make is guided by understanding and improving the user experience.
              </p>
            </div>

            <div className="text-center p-6 glass-card hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Goal-Oriented</h4>
              <p className="text-muted-foreground text-sm">
                I focus on delivering measurable results that align with business objectives and user needs.
              </p>
            </div>

            <div className="text-center p-6 glass-card hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Innovative</h4>
              <p className="text-muted-foreground text-sm">
                I constantly seek creative solutions and embrace new technologies to solve complex challenges.
              </p>
            </div>

            <div className="text-center p-6 glass-card hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Passionate</h4>
              <p className="text-muted-foreground text-sm">
                My enthusiasm for technology and continuous learning drives everything I do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;