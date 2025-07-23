import { useState } from 'react';
import { Send, MapPin, Mail, Phone, Linkedin, Instagram, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create FormData for Netlify Forms
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'contact');
      netlifyFormData.append('full-name', formData.fullName);
      netlifyFormData.append('email', formData.email);
      netlifyFormData.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const stateKey = name === 'full-name' ? 'fullName' : name;
    setFormData(prev => ({
      ...prev,
      [stateKey]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'lawyer@lawfirm.com',
      href: 'mailto:lawyer@lawfirm.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New York, NY',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/lawyer', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Award, href: 'https://www.avvo.com/attorneys/lawyer', label: 'Legal Directory', color: 'hover:text-yellow-600' },
    { icon: Instagram, href: 'https://instagram.com/lawyer', label: 'Instagram', color: 'hover:text-pink-600' },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30 pb-0">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your legal needs and how I can assist you with professional legal services
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Form - Full Width */}
          <div className="animate-fade-in mb-12">
            <Card className="professional-shadow border-primary-soft hover:glow-shadow transition-smooth">
              <CardHeader className="bg-gradient-subtle">
                <CardTitle className="text-2xl text-center text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="bg-card">
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6 max-w-2xl mx-auto"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  {/* Hidden input for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Honeypot field for spam protection */}
                  <div style={{ display: 'none' }}>
                    <input name="bot-field" />
                  </div>
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      name="full-name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="mt-1 border-primary-soft focus:border-primary focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 border-primary-soft focus:border-primary focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-1 resize-none border-primary-soft focus:border-primary focus:ring-primary"
                      placeholder="Tell me about your legal matter or consultation needs..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full transition-smooth hover:scale-[1.02]"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Width Map Section */}
        <div className="mt-12">
          <Card className="professional-shadow mx-auto max-w-6xl border-accent-soft hover:glow-shadow transition-smooth">
            <CardContent className="p-0">
              <div className="h-80 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-30"></div>
                <div className="text-center z-10">
                  <div className="p-4 rounded-full bg-gradient-cool mb-4 mx-auto w-fit glow-shadow">
                    <MapPin className="h-16 w-16 text-white" />
                  </div>
                  <p className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">New York, NY</p>
                  <p className="text-muted-foreground text-lg">Available for consultations</p>
                  <p className="text-sm text-muted-foreground mt-2 bg-accent-soft px-3 py-1 rounded-full inline-block">Manhattan Legal District</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-9 pt-6 pb-3 border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Left Side - Copyright */}
            <div className="text-center md:text-left">
              <p className="text-xs text-muted-foreground">
                © 2025 John Doe. All rights reserved. | Attorney at Law - Licensed to practice in New York
              </p>
            </div>

            {/* Right Side - Developer Credits and Social Links */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-4 text-xs text-muted-foreground">
                <span>
                  Developed by{" "}
                  <span className="font-medium text-foreground">Sahil Phogat</span>
                </span>
                
                {/* LinkedIn Link */}
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 transition-smooth"
                >
                  <Linkedin className="h-3 w-3" />
                  <span>LinkedIn</span>
                </a>
                
                {/* Email Link */}
                <a
                  href="mailto:developer@email.com"
                  className="flex items-center gap-1 hover:text-primary transition-smooth"
                >
                  <Mail className="h-3 w-3" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;