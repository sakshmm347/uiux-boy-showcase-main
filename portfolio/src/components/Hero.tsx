import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import profileImage from '@/assets/img-1.jpg'; // Replace with your image
import DarkVeil from './DarkVeli';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image Container */}
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0">
          <DarkVeil />
        </div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="flex flex-col md:flex-row relative items-stretch  justify-between md:gap-52">
              {/* Image Section */}
              <div className="flex-1 animate-slide-up " style={{ animationDelay: '0.5s' }}>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-full shadow-lg w-full full h-96  max-w-sm mx-auto object-cover"
                />
              </div>
              {/* Text Section */}
              <div className="text-center  flex-1 animate-fade-in ">
                <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    SAKSHAM
                  </span>
                </h1>
                <h2
                  className="text-2xl md:text-4xl text-white mb-6 animate-slide-up"
                  style={{ animationDelay: '0.2s' }}
                >
                  UI/UX Designer & Developer
                </h2>
                <p
                  className="text-lg text-white mb-8 max-w-xl animate-slide-up leading-relaxed"
                  style={{ animationDelay: '0.4s' }}
                >
                  I craft meaningful digital experiences through innovative design solutions.
                  Passionate about creating user-centered designs that not only look beautiful
                  but also solve real-world problems.
                </p>

                {/* CTA Buttons */}
                <div
                  className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
                  style={{ animationDelay: '0.6s' }}
                >
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
                <div className="animate-float mt-16 hidden md:block">
                  <a
                    href="#about"
                    className="inline-block text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowDown className="h-6 w-6" />
                  </a>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
