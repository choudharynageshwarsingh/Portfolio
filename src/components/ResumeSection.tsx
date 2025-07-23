import { GraduationCap, Briefcase, Scale, Award, Calendar, BookOpen, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ResumeSection = () => {
  const education = [
    {
      institution: 'Harvard Law School',
      degree: 'Juris Doctor (J.D.)',
      period: '2015 - 2018',
      gpa: 'Magna Cum Laude',
      achievements: ['Harvard Law Review - Senior Editor', 'Moot Court Championship Winner', 'Dean\'s List - All Semesters'],
    },
    {
      institution: 'Yale University',
      degree: 'Bachelor of Arts in Political Science',
      period: '2011 - 2015',
      gpa: 'Summa Cum Laude',
      achievements: ['Phi Beta Kappa Honor Society', 'Outstanding Senior Thesis Award', 'Student Government President'],
    },
  ];

  const experience = [
    {
      company: 'Morrison & Associates Law Firm',
      position: 'Senior Associate Attorney',
      period: '2020 - Present',
      description: 'Lead counsel for complex corporate litigation and contract disputes. Manage high-value cases exceeding $50M. Mentor junior attorneys and oversee legal research teams.',
      achievements: ['98% case success rate', 'Secured $15M settlement in landmark case', 'Recognized as Rising Star by Super Lawyers'],
    },
    {
      company: 'Federal District Court',
      position: 'Judicial Clerk',
      period: '2018 - 2020',
      description: 'Assisted federal judge with case analysis, legal research, and opinion drafting. Gained extensive experience in federal litigation procedures and constitutional law.',
      achievements: ['Drafted 50+ judicial opinions', 'Recognized for exceptional legal analysis', 'Recommended for federal clerkship program'],
    },
  ];

  const practiceAreas = [
    { name: 'Corporate Law', experience: '5+ Years' },
    { name: 'Contract Litigation', experience: '4+ Years' },
    { name: 'Mergers & Acquisitions', experience: '3+ Years' },
    { name: 'Employment Law', experience: '4+ Years' },
    { name: 'Intellectual Property', experience: '2+ Years' },
    { name: 'Real Estate Law', experience: '3+ Years' },
  ];

  const certifications = [
    'Licensed to Practice - New York State Bar',
    'Licensed to Practice - Federal Courts',
    'Certified Mediator - Alternative Dispute Resolution',
    'Corporate Governance Certification',
    'Data Privacy Law Specialist',
    'International Business Law Certificate',
  ];

  const notableCases = [
    {
      title: 'Tech Corp vs. Innovation Ltd.',
      type: 'Corporate Litigation',
      outcome: '$15M Settlement',
      description: 'Successfully represented plaintiff in complex intellectual property dispute.',
    },
    {
      title: 'State Employment Commission Case',
      type: 'Employment Law',
      outcome: 'Policy Change',
      description: 'Landmark case that established new precedent for workplace discrimination claims.',
    },
    {
      title: 'Global Merger & Acquisition',
      type: 'M&A Transaction',
      outcome: '$500M Deal',
      description: 'Led legal team for multinational acquisition involving complex regulatory compliance.',
    },
  ];

  return (
    <section id="resume" className="section-padding-reduced bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Background</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My legal education, professional experience, and areas of expertise
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
                    <p className="text-sm mb-3">Honors: {edu.gpa}</p>
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

        {/* Notable Cases Section */}
        <div className="animate-fade-in mb-12">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Users className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Notable Cases</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notableCases.map((case_, index) => (
              <Card key={index} className="transition-smooth hover:card-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{case_.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{case_.type}</Badge>
                    <span className="text-sm font-semibold text-primary">{case_.outcome}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{case_.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice Areas Section */}
        <div className="animate-slide-up">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Scale className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Practice Areas & Expertise</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Practice Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Areas of Practice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {practiceAreas.map((area, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">{area.name}</span>
                    <Badge variant="secondary">{area.experience}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Licenses & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Award className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
                    </div>
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