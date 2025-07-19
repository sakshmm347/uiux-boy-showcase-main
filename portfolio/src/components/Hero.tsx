import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import DarkVeil from './DarkVeli';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <DarkVeil

  />
  
</div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
          </div>

          {/* Title */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-4xl text-foreground mb-6">
              UI/UX Designer & Creative Problem Solver
            </h2>
          </div>

          {/* Description */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I craft meaningful digital experiences through innovative design solutions. 
              Passionate about creating user-centered designs that not only look beautiful 
              but also solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="px-8 py-6 text-lg group shadow-medium">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg group">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float mt-16">
            <a href="#about" className="inline-block text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;