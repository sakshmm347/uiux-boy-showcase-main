import { Palette, Monitor, Smartphone, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: 'Design Tools',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 90 },
        { name: 'Sketch', level: 85 },
        { name: 'Photoshop', level: 88 },
      ]
    },
    {
      icon: Monitor,
      title: 'Web Design',
      skills: [
        { name: 'Responsive Design', level: 93 },
        { name: 'User Research', level: 87 },
        { name: 'Wireframing', level: 92 },
        { name: 'Prototyping', level: 89 },
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Design',
      skills: [
        { name: 'iOS Design', level: 90 },
        { name: 'Android Design', level: 88 },
        { name: 'App Prototyping', level: 85 },
        { name: 'User Testing', level: 83 },
      ]
    },
    {
      icon: Code,
      title: 'Development',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'React', level: 70 },
        { name: 'Tailwind CSS', level: 88 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 md:h-screen">
      <div className="container mx-auto px-6 relative top-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="group hover:shadow-soft transition-all duration-300 animate-slide-up border-border/50" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    <category.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-foreground font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;