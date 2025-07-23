import { ExternalLink, Calendar, User, MessageCircle, Heart, Scale, BookOpen, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogSection = () => {
  const legalArticles = [
    {
      title: 'Understanding Corporate Compliance in 2024: New Regulations',
      excerpt: 'A comprehensive guide to the latest corporate compliance requirements and how businesses can ensure they meet all regulatory standards.',
      date: '2024-03-15',
      author: 'John Doe',
      readTime: '8 min read',
      tags: ['Corporate Law', 'Compliance', 'Business Law'],
      likes: 42,
      comments: 8,
      link: '#',
      featured: true,
    },
    {
      title: 'Employee Rights in the Digital Age: Remote Work Legal Framework',
      excerpt: 'Exploring the evolving legal landscape of remote work, employee rights, and employer obligations in the post-pandemic era.',
      date: '2024-02-28',
      author: 'John Doe',
      readTime: '12 min read',
      tags: ['Employment Law', 'Remote Work', 'Digital Rights'],
      likes: 67,
      comments: 15,
      link: '#',
      featured: false,
    },
    {
      title: 'Contract Law Updates: Key Changes Every Business Should Know',
      excerpt: 'Recent developments in contract law and their implications for businesses, including digital signatures and electronic contracts.',
      date: '2024-02-10',
      author: 'John Doe',
      readTime: '6 min read',
      tags: ['Contract Law', 'Business', 'Legal Updates'],
      likes: 89,
      comments: 23,
      link: '#',
      featured: false,
    },
    {
      title: 'Intellectual Property Protection for Small Businesses',
      excerpt: 'Essential strategies for protecting your intellectual property, trademarks, and copyrights in an increasingly competitive market.',
      date: '2024-01-22',
      author: 'John Doe',
      readTime: '10 min read',
      tags: ['IP Law', 'Small Business', 'Protection'],
      likes: 34,
      comments: 7,
      link: '#',
      featured: false,
    },
  ];

  const professionalUpdates = [
    {
      type: 'Legal Victory',
      title: 'Successful $25M Class Action Settlement',
      content: 'Proud to announce a significant victory for our clients in the recent class action lawsuit. This settlement will provide much-needed compensation to affected parties.',
      date: '2024-03-20',
      engagement: { likes: 156, comments: 24 },
    },
    {
      type: 'Industry Insight',
      title: 'New Employment Law Changes',
      content: 'Important updates to employment law effective this quarter. All employers should review their policies to ensure compliance with the new regulations. �',
      date: '2024-03-10',
      engagement: { likes: 203, comments: 31 },
    },
    {
      type: 'Client Education',
      title: 'Understanding Your Rights as a Consumer',
      content: 'Knowledge is power. Understanding your consumer rights can protect you from unfair practices and help you make informed decisions. What questions do you have about consumer protection?',
      date: '2024-02-25',
      engagement: { likes: 89, comments: 42 },
    },
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Legal Insights & Publications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert legal commentary, industry updates, and client education resources
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Scale className="h-6 w-6 text-primary" />
            <span>Featured Legal Articles</span>
            <Badge variant="secondary">Law Review & Publications</Badge>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {legalArticles.map((post, index) => (
              <Card 
                key={index} 
                className={`transition-smooth hover:card-shadow cursor-pointer animate-fade-in ${
                  post.featured ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {post.featured && (
                  <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-b-lg w-fit">
                    Featured
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg leading-tight hover:text-primary transition-smooth">
                      {post.title}
                    </CardTitle>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* LinkedIn Posts */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-accent" />
            <span>Recent Professional Updates</span>
            <Badge variant="secondary">LinkedIn & Industry News</Badge>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalUpdates.map((post, index) => (
              <Card 
                key={index} 
                className="transition-smooth hover:card-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {post.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-base">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {post.engagement.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      {post.engagement.comments}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Resources Section */}
        <div className="mb-16 mt-16 animate-slide-up">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-secondary" />
            <span>Client Resources</span>
            <Badge variant="secondary">Legal Guides & FAQs</Badge>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-smooth hover:card-shadow hover:scale-105">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Legal FAQ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Common legal questions answered by our team of experts.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View FAQ
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-smooth hover:card-shadow hover:scale-105">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  Legal Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive guides to help you understand your legal rights.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Download Guides
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-smooth hover:card-shadow hover:scale-105">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-secondary" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Important legal contacts and emergency legal assistance.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Get Help Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="transition-smooth hover:scale-105">
            View All Legal Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;