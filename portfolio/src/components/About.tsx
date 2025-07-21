import { Card, CardContent } from '@/components/ui/card';
import experienceImage from '@/assets/img1.jpg';
import projectsImage from '@/assets/img2.jpg';
import clientsImage from '@/assets/img3.jpg';
import teamImage from '@/assets/img4.jpg';

const About = () => {
  const stats = [
    { image: experienceImage},
    { image: projectsImage },
    { image: clientsImage},
    { image: teamImage}, ]
  return (
    <section id="about" className="py-20 bg-black  md:h-screen">
      <div className="container mx-auto px-6 relative top-10 ">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Passionate designer with a focus on creating exceptional user experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Creating Digital Solutions That Matter
              </h3>
              <p className="text-white leading-relaxed mb-4">
                I'm a passionate UI/UX designer with over 5 years of experience in creating 
                digital experiences that not only look stunning but also provide intuitive 
                and meaningful interactions for users.
              </p>
              <p className="text-white leading-relaxed mb-4">
                My design philosophy centers around understanding user needs, business goals, 
                and technical constraints to create solutions that are both beautiful and functional. 
                I believe great design is invisible – it just works.
              </p>
              <p className="text-white leading-relaxed">
                When I'm not designing, you can find me exploring the latest design trends, 
                learning new tools, or collaborating with amazing teams to bring ideas to life.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-medium transition-all duration-300  animate-slide-up border-border/50 "
                  
                >
                  <CardContent className="p-0 text-center">
                    <img
                      src={stat.image}
                     
                      className="h-52  w-full mx-auto  object-contain grayscale group-hover:grayscale-0 group-hover:scale-105  duration-200"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
