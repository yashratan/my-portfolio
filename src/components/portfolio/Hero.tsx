import { ArrowDown, Download, Github, Linkedin, Mail, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { useState, useRef } from 'react';
import heroImage from '@/assets/hero-background.jpg';

const Hero = () => {
  const [profileImage, setProfileImage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfileImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 42, 69, 0.8), rgba(34, 42, 69, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Upload */}
          <div className="relative w-32 h-32 mx-auto mb-8 group cursor-pointer" onClick={triggerFileUpload}>
            <Avatar className="w-32 h-32 border-4 border-primary/20 hover:border-primary/40 transition-all">
              <AvatarImage src={profileImage} alt="Profile picture" />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-4xl font-bold">
                YR
              </AvatarFallback>
            </Avatar>
            
            {/* Upload overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="h-8 w-8 text-white" />
            </div>
            
            {/* Hidden file input */}
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              aria-label="Upload profile picture"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="gradient-text">Yash Ratan</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Product Manager & Tech Enthusiast
          </p>

          {/* Description */}
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in">
            I create beautiful, functional, and user-friendly web applications 
            using modern technologies. Passionate about clean code, innovative solutions, 
            and continuous learning.
          </p> */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in">
            I solve problems using technology, making customer experience smoother and better!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg"
            >
              <a href="/Resume_YashRatan.pdf" download aria-label="Download CV (PDF)">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;