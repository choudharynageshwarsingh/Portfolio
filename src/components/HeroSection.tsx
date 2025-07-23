import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'alex.morgan@email.com', href: 'mailto:alex.morgan@email.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/alexmorgan', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/alexmorgan', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/alexmorgan', label: 'Instagram' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center gradient-subtle">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <img
                src={profileImage}
                alt="Alex Morgan"
                className="w-full h-full object-cover rounded-full border-4 border-card professional-shadow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Alex Morgan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Computer Science Student | Web Developer | Tech Enthusiast
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative web solutions and exploring the latest technologies. 
              Currently pursuing Computer Science with a focus on full-stack development and machine learning.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-scale-in">
            {contactInfo.map((info, index) => (
              <Card key={index} className="transition-smooth hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <a
                    href={info.href}
                    className="flex items-center gap-3 text-sm group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <info.icon className="h-5 w-5 text-primary" />
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
          <div className="flex justify-center gap-4 mb-8 animate-fade-in">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="transition-smooth hover:scale-110"
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

          {/* CTA Button */}
          <div className="animate-slide-up">
            <Button
              size="lg"
              className="px-8 py-3 text-lg font-semibold transition-smooth hover:scale-105 professional-shadow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;