import { GraduationCap, Briefcase, Code, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const ResumeSection = () => {
  const education = [
    {
      institution: 'Stanford University',
      degree: 'Bachelor of Science in Computer Science',
      period: '2022 - 2026',
      gpa: '3.8/4.0',
      achievements: ['Dean\'s List', 'CS Department Scholarship'],
    },
    {
      institution: 'Lincoln High School',
      degree: 'High School Diploma',
      period: '2018 - 2022',
      gpa: '4.0/4.0',
      achievements: ['Valedictorian', 'National Merit Scholar'],
    },
  ];

  const experience = [
    {
      company: 'TechStart Inc.',
      position: 'Frontend Developer Intern',
      period: 'Jun 2024 - Aug 2024',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.',
      achievements: ['Improved page load speed by 40%', 'Built 15+ reusable components'],
    },
    {
      company: 'University Research Lab',
      position: 'Research Assistant',
      period: 'Sep 2023 - Present',
      description: 'Working on machine learning projects focusing on natural language processing. Contributing to research papers and implementing ML algorithms.',
      achievements: ['Published 2 research papers', 'Developed novel NLP model'],
    },
  ];

  const skills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React & Next.js', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'Node.js', level: 80 },
    { name: 'Database Design', level: 75 },
    { name: 'Machine Learning', level: 70 },
  ];

  const technologies = [
    'React', 'TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'MongoDB',
    'Docker', 'AWS', 'Git', 'Figma', 'TensorFlow', 'PyTorch',
  ];

  return (
    <section id="resume" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational background, professional experience, and technical skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="transition-smooth hover:card-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.institution}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <p className="text-muted-foreground">{edu.degree}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">GPA: {edu.gpa}</p>
                    <div className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="transition-smooth hover:card-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.position}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <p className="text-muted-foreground">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4 leading-relaxed">{exp.description}</p>
                    <div className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="animate-slide-up">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Code className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skill Levels */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Proficiency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;