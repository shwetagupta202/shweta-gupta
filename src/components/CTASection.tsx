import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Video, ArrowRight } from "lucide-react";

const CTASection = () => {
  const offers = [
    {
      icon: Video,
      title: "Free AI Agents Webinar",
      subtitle: "Master the Future of Work",
      description: "Join my exclusive 90-minute masterclass where I'll reveal the exact AI agent strategies that helped 1000+ professionals future-proof their careers.",
      benefits: [
        "Live AI agent implementations",
        "Q&A with industry experts", 
        "Exclusive templates and tools",
        "Community access bonus"
      ],
      cta: "Reserve Your Free Spot",
      ctaLink: "https://ai.coachshwetagupta.com/workshop/",
      variant: "hero" as const,
      badge: "Most Popular"
    },
    {
      icon: Download,
      title: "AI Career Toolkit",
      subtitle: "Your Complete Career Transformation Guide",
      description: "Get instant access to my comprehensive toolkit with templates, checklists, and strategies used by 10,000+ professionals.",
      benefits: [
        "LinkedIn optimization templates",
        "AI tools comparison guide",
        "Salary negotiation scripts",
        "Interview preparation checklist"
      ],
      cta: "Download Free Toolkit",
      ctaLink: "#",
      variant: "heroOutline" as const
    },
    {
      icon: Calendar,
      title: "Strategy Coaching Call",
      subtitle: "Personalized Career Roadmap",
      description: "Book a 1-on-1 strategy session to create your personalized AI-powered career transformation plan with guaranteed results.",
      benefits: [
        "Personalized career assessment",
        "Custom AI implementation plan",
        "Salary increase strategy",
        "90-day action roadmap"
      ],
      cta: "Book Your Call",
      ctaLink: "https://topmate.io/shweta_gupta",
      variant: "cta" as const,
      badge: "Limited Spots"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Ready to Future-Proof Your Career?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your path to career transformation with AI agents, automation, 
            and strategic career planning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <Card key={index} className={`relative group hover:shadow-strong transition-all duration-300 ${
              offer.badge ? 'border-primary/30 shadow-medium' : 'border-primary/10'
            }`}>
              {offer.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full shadow-soft">
                    {offer.badge}
                  </div>
                </div>
              )}
              
              <CardContent className="p-8 space-y-6">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <offer.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{offer.title}</h3>
                    <p className="text-primary font-medium">{offer.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-center leading-relaxed">
                  {offer.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {offer.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant={offer.variant} 
                  size="lg" 
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a href={offer.ctaLink} target="_blank" rel="noopener noreferrer">
                    {offer.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 bg-card p-12 rounded-2xl border border-primary/20 shadow-soft">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Join 100,000+ Professionals
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Who have already started their journey to becoming future-proof with AI agents, 
              automation, and strategic career planning.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="shadow-medium" asChild>
              <a href="https://go.coachshwetagupta.com/" target="_blank" rel="noopener noreferrer">
                Start Your Transformation Today
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="https://topmate.io/shweta_gupta" target="_blank" rel="noopener noreferrer">
                Schedule a Free Consultation
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Results guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;