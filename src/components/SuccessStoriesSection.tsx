import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, TrendingUp, MapPin, Briefcase } from "lucide-react";

const SuccessStoriesSection = () => {
  const stories = [
    {
      name: "Rahul Sharma",
      role: "Senior Software Engineer",
      company: "Microsoft India",
      location: "Bangalore, India",
      salaryIncrease: "6 LPA → 22 LPA",
      image: "👨‍💻",
      story: "Shweta's AI-powered LinkedIn strategy and interview coaching helped me land my dream role at Microsoft. The salary negotiation techniques alone were worth 10x the investment!",
      achievement: "3.7x Salary Increase"
    },
    {
      name: "Priya Patel",
      role: "AI Product Manager",
      company: "Google Cloud",
      location: "Mumbai, India",
      salaryIncrease: "12 LPA → 45 LPA",
      image: "👩‍💼",
      story: "From struggling with career direction to leading AI products at Google Cloud. Shweta's mentorship and AI Agents masterclass completely transformed my trajectory.",
      achievement: "Global Career Move"
    },
    {
      name: "Amit Kumar",
      role: "Tech Entrepreneur",
      company: "AI Startup Founder",
      location: "Dubai, UAE",
      salaryIncrease: "Built ₹2Cr ARR",
      image: "🚀",
      story: "Started as a confused developer, now running my own AI automation company generating ₹2Cr ARR. Shweta's guidance on AI agents and business strategy was game-changing.",
      achievement: "Successful Entrepreneur"
    },
    {
      name: "Sneha Gupta",
      role: "Data Science Manager",
      company: "Amazon Web Services",
      location: "Seattle, USA",
      salaryIncrease: "8 LPA → 35 LPA",
      image: "👩‍🔬",
      story: "The combination of technical AI skills and personal branding strategies helped me transition from India to leading data science teams at AWS. Incredible transformation!",
      achievement: "Leadership Role"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real transformation stories from IT professionals who leveraged AI, LinkedIn strategies, 
            and career coaching to achieve extraordinary career breakthroughs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardContent className="p-8 space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{story.image}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground">{story.name}</h3>
                    <p className="text-primary font-medium">{story.role}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {story.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {story.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Salary Increase Badge */}
                <div className="flex items-center justify-between bg-gradient-primary/10 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">{story.salaryIncrease}</span>
                  </div>
                  <div className="text-sm font-medium text-primary bg-primary/20 px-3 py-1 rounded-full">
                    {story.achievement}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed italic pl-6">
                    "{story.story}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Professionals Helped</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">300%</div>
            <div className="text-sm text-muted-foreground">Average Salary Increase</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Countries Reached</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl">
            Start Your Transformation Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;