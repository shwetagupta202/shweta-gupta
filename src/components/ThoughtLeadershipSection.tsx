import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, FileText, Video, TrendingUp } from "lucide-react";

const ThoughtLeadershipSection = () => {
  const articles = [
    {
      type: "Article",
      icon: FileText,
      title: "The Future of AI Agents in Enterprise Productivity",
      excerpt: "How businesses can leverage intelligent automation to transform workflows and drive unprecedented growth in 2024.",
      readTime: "5 min read",
      trending: true
    },
    {
      type: "Video",
      icon: Video,
      title: "Career Transformation in the AI Era",
      excerpt: "A comprehensive guide to future-proofing your career with AI skills and strategic positioning in the job market.",
      readTime: "12 min watch",
      trending: false
    },
    {
      type: "Article",
      icon: FileText,
      title: "From 6 LPA to 24 LPA: AI-Powered Career Success",
      excerpt: "Real transformation stories of IT professionals who leveraged AI tools and LinkedIn strategies for salary breakthroughs.",
      readTime: "7 min read",
      trending: true
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Thought Leadership
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay ahead of the curve with insights on AI agents, automation, 
                and career transformation strategies that are shaping the future of work.
              </p>
            </div>

            {/* Featured Articles */}
            <div className="space-y-4">
              {articles.map((article, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 cursor-pointer border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <article.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {article.type}
                          </span>
                          {article.trending && (
                            <div className="flex items-center gap-1 text-xs text-orange-600">
                              <TrendingUp className="w-3 h-3" />
                              Trending
                            </div>
                          )}
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              View All Articles & Videos
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-subtle border-primary/20 shadow-soft">
              <div className="text-center space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Weekly AI & Career Insights
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Get exclusive insights on AI agents, automation trends, and career transformation 
                    strategies delivered to your inbox every week.
                  </p>
                </div>

                <div className="space-y-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="text-center border-primary/30 focus:border-primary"
                  />
                  <Button variant="hero" size="lg" className="w-full">
                    Subscribe for Free Insights
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>10,000+ Subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>No spam, unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Article Views</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Published Articles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadershipSection;