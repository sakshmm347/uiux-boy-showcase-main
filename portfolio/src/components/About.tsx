import { User, Award, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Coffee, label: 'Projects Completed', value: '150+' },
    { icon: Heart, label: 'Happy Clients', value: '80+' },
    { icon: User, label: 'Team Collaborations', value: '25+' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate designer with a focus on creating exceptional user experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Creating Digital Solutions That Matter
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate UI/UX designer with over 5 years of experience in creating 
                  digital experiences that not only look stunning but also provide intuitive 
                  and meaningful interactions for users.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My design philosophy centers around understanding user needs, business goals, 
                  and technical constraints to create solutions that are both beautiful and functional. 
                  I believe great design is invisible – it just works.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not designing, you can find me exploring the latest design trends, 
                  learning new tools, or collaborating with amazing teams to bring ideas to life.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
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