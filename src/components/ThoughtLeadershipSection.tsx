import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, FileText, Video, TrendingUp } from "lucide-react";

const ThoughtLeadershipSection = () => {

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

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Coming soon! Subscribe to my newsletter to get notified when new content is available.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://www.linkedin.com/newsletters/future-proof-career-digest-7302207305826099202" target="_blank" rel="noopener noreferrer">
                  Subscribe to My Newsletter
                </a>
              </Button>
            </div>
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
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="https://www.linkedin.com/newsletters/future-proof-career-digest-7302207305826099202" target="_blank" rel="noopener noreferrer">
                      Subscribe to My Newsletter
                    </a>
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