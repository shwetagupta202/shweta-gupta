import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Trophy, Calendar, Zap } from "lucide-react";

const CommunitySection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Live Challenges",
      description: "Monthly AI implementation challenges with real-world projects"
    },
    {
      icon: Trophy,
      title: "Hackathons",
      description: "Quarterly competitions to build innovative AI solutions"
    },
    {
      icon: MessageCircle,
      title: "Expert Discussions",
      description: "Direct access to industry leaders and AI specialists"
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with like-minded professionals worldwide"
    },
    {
      icon: Zap,
      title: "Accountability Groups",
      description: "Small peer groups for consistent growth and support"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Join a Thriving Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Connect with IT Professionals & Business Owners who are actively future-proofing 
            their careers with AI Agents, automation, and strategic career planning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Community Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-primary/20">
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-primary/20">
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-primary">₹50 Lakh+</div>
                  <div className="text-sm text-muted-foreground">Salary Increases</div>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Career Spike Hub Community</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  An exclusive ecosystem where ambitious IT professionals share strategies, 
                  celebrate wins, and accelerate their career growth through peer learning 
                  and AI-powered tools.
                </p>
              </div>
            </Card>
          </div>

          {/* Community Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Transform Your Career?
            </h3>
            <p className="text-muted-foreground">
              Join thousands of professionals who are already future-proofing their careers with AI.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Join My Community
            </Button>
            <Button variant="outline" size="xl">
              View Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;