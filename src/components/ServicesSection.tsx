import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Briefcase, Zap, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Agent Masterclasses & Bootcamps",
      description: "Hands-on workshops designed for IT professionals and business owners to master AI agents, automation tools, and cutting-edge productivity systems.",
      features: ["Live interactive sessions", "Real-world AI implementations", "Industry-specific use cases", "Community support"]
    },
    {
      icon: Briefcase,
      title: "Career Coaching",
      description: "Comprehensive career transformation programs including resume optimization, LinkedIn branding, interview preparation, and salary negotiation strategies.",
      features: ["Resume & LinkedIn optimization", "Interview coaching", "Salary negotiation tactics", "Personal branding strategy"]
    },
    {
      icon: Zap,
      title: "AI-Powered Productivity Solutions",
      description: "Custom toolkits, templates, and automation strategies to streamline workflows and maximize efficiency using the latest AI technologies.",
      features: ["Custom automation setups", "Productivity templates", "AI tool recommendations", "Workflow optimization"]
    },
    {
      icon: Users,
      title: "Speaking & Keynotes",
      description: "Inspiring presentations on the future of AI, automation in the workplace, and career transformation strategies for organizations and conferences.",
      features: ["Corporate workshops", "Conference keynotes", "Industry panels", "Team training sessions"]
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering professionals and businesses with AI-driven solutions for career growth 
            and organizational transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="cta" size="xl">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;