import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Yash Ratan | Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
