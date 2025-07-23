import { Mail, Phone, MapPin, Linkedin, Instagram, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'lawyer@lawfirm.com', href: 'mailto:lawyer@lawfirm.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'New York, NY', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/lawyer', label: 'LinkedIn' },
    { icon: Award, href: 'https://www.avvo.com/attorneys/lawyer', label: 'Legal Directory' },
    { icon: Instagram, href: 'https://instagram.com/lawyer', label: 'Instagram' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center gradient-subtle pt-20">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Profile and Bio */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-48 h-48 relative animate-fade-in">
                  <img
                    src={profileImage}
                    alt="John Doe - Attorney at Law"
                    className="w-full h-full object-cover rounded-full border-4 border-card professional-shadow"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent"></div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center lg:text-left animate-slide-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  John Doe
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
                  Attorney at Law | Legal Consultant | Civil Rights Advocate
                </p>
              </div>

              {/* Short Bio */}
              <div className="text-center lg:text-left animate-fade-in">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Professional Bio</h2>
                <div className="p-4 bg-primary-soft rounded-lg border border-primary-soft">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Experienced attorney with over 10 years of practice in corporate law, civil litigation, and legal consulting. 
                    Dedicated to providing exceptional legal services and protecting clients' rights with integrity and professionalism.
                  </p>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 gap-3 animate-scale-in">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="transition-smooth hover:scale-105 cursor-pointer border-primary-soft hover:glow-shadow">
                    <CardContent className="p-4">
                      <a
                        href={info.href}
                        className="flex items-center gap-3 text-sm group"
                      >
                        <div className="p-2 rounded-lg bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-smooth shadow-md">
                          <info.icon className="h-4 w-4" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-foreground">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 animate-fade-in">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="transition-smooth hover:scale-110 border-accent-soft hover:bg-accent hover:text-white hover:glow-shadow"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Right Side - About Me */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center lg:text-left">
                  About Me
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    With over a decade of legal experience, I have dedicated my career to protecting clients' rights and interests across various areas of law. 
                    My practice focuses on delivering comprehensive legal solutions with unwavering commitment to justice and client advocacy. 
                    I believe in building strong attorney-client relationships based on trust, transparency, and effective communication.
                  </p>
                  <p>
                    My approach to law combines thorough legal research, strategic thinking, and personalized attention to each case. 
                    I understand that legal matters can be overwhelming, which is why I strive to guide my clients through complex legal processes 
                    with clarity and confidence. Every case receives my full attention and expertise.
                  </p>
                  <p>
                    Beyond individual client representation, I am actively involved in community legal education and pro bono work. 
                    I regularly conduct legal workshops, participate in bar association activities, and mentor young attorneys. 
                    My commitment extends beyond the courtroom to serving the broader community and advancing the legal profession.
                  </p>
                </div>
              </div>

              {/* What I'm Doing */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">What I'm Currently Doing</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border border-primary-soft hover:bg-primary-soft transition-smooth hover:glow-shadow">
                    <h4 className="font-semibold text-primary mb-2">Corporate Legal Advisory</h4>
                    <p className="text-muted-foreground">
                      Providing comprehensive legal counsel to businesses on compliance, contracts, and corporate governance matters.
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-accent-soft hover:bg-accent-soft transition-smooth hover:glow-shadow">
                    <h4 className="font-semibold text-accent mb-2">Civil Litigation</h4>
                    <p className="text-muted-foreground">
                      Representing clients in civil disputes, personal injury cases, and property law matters with dedicated advocacy.
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-secondary/30 hover:bg-secondary/10 transition-smooth hover:glow-shadow">
                    <h4 className="font-semibold text-secondary mb-2">Legal Education</h4>
                    <p className="text-muted-foreground">
                      Conducting legal workshops and seminars to educate the community about their rights and legal processes.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center lg:text-left mb-3">
                <Button
                  size="lg"
                  className="btn-primary px-8 py-3 text-lg font-semibold transition-smooth hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;