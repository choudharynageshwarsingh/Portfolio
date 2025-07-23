import { ExternalLink, Calendar, User, MessageCircle, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications with Modern Architecture',
      excerpt: 'Explore the latest patterns and best practices for creating maintainable React applications that can grow with your team and user base.',
      date: '2024-03-15',
      author: 'Alex Morgan',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'JavaScript'],
      likes: 42,
      comments: 8,
      link: '#',
      featured: true,
    },
    {
      title: 'Machine Learning in Web Development: A Practical Guide',
      excerpt: 'How to integrate machine learning models into web applications using TensorFlow.js and create intelligent user experiences.',
      date: '2024-02-28',
      author: 'Alex Morgan',
      readTime: '12 min read',
      tags: ['Machine Learning', 'TensorFlow', 'AI'],
      likes: 67,
      comments: 15,
      link: '#',
      featured: false,
    },
    {
      title: 'The Future of TypeScript: What\'s Coming in 2024',
      excerpt: 'A deep dive into the upcoming TypeScript features and how they will revolutionize the way we write type-safe JavaScript.',
      date: '2024-02-10',
      author: 'Alex Morgan',
      readTime: '6 min read',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      likes: 89,
      comments: 23,
      link: '#',
      featured: false,
    },
    {
      title: 'Optimizing Database Performance for Modern Web Apps',
      excerpt: 'Learn advanced techniques for database optimization, indexing strategies, and query performance tuning in PostgreSQL and MongoDB.',
      date: '2024-01-22',
      author: 'Alex Morgan',
      readTime: '10 min read',
      tags: ['Database', 'Performance', 'PostgreSQL'],
      likes: 34,
      comments: 7,
      link: '#',
      featured: false,
    },
  ];

  const linkedInPosts = [
    {
      type: 'Achievement',
      title: 'Completed Advanced React Course',
      content: 'Just finished the Advanced React Patterns course by Kent C. Dodds! Learned so much about compound components, render props, and advanced hooks patterns.',
      date: '2024-03-20',
      engagement: { likes: 156, comments: 24 },
    },
    {
      type: 'Project Share',
      title: 'Open Source Contribution',
      content: 'Excited to share that my PR to improve accessibility in the React Router library has been merged! Small contributions can make a big impact. 🚀',
      date: '2024-03-10',
      engagement: { likes: 203, comments: 31 },
    },
    {
      type: 'Thought Leadership',
      title: 'The Importance of Code Reviews',
      content: 'Code reviews aren\'t just about catching bugs—they\'re about knowledge sharing, mentorship, and building better software together. What\'s your favorite code review tip?',
      date: '2024-02-25',
      engagement: { likes: 89, comments: 42 },
    },
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on technology, development practices, and industry trends
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <span>Featured Articles</span>
            <Badge variant="secondary">Medium & Dev.to</Badge>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
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
            <span>Recent LinkedIn Activity</span>
            <Badge variant="secondary">Professional Updates</Badge>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkedInPosts.map((post, index) => (
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="transition-smooth hover:scale-105">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;