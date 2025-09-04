import { Button } from "@/components/ui/button";
const professionalPhoto = "/lovable-uploads/9a467611-1566-4b3e-a88c-3959b4116a60.png";

const HeroSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Shweta Gupta
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                Helping IT Professionals & Business Owners Leverage{" "}
                <span className="text-primary font-semibold">AI Agents</span> to 
                Future-Proof Their Careers & Businesses
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="shadow-medium">
                Join My AI Agents Masterclass
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://topmate.io/shweta_gupta" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                </a>
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>14+ Years IT Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>1000+ Professionals helped</span>
              </div>
            </div>
          </div>
          
          {/* Professional Photo */}
          <div className="relative animate-fade-in-up">
            <div className="relative z-10">
              <img
                src={professionalPhoto}
                alt="Shweta Gupta - AI Agents & Career Transformation Expert"
                className="w-full max-w-md mx-auto rounded-2xl shadow-strong animate-float"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 scale-105 -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;