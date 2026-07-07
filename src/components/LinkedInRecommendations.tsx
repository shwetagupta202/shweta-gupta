import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Quote } from "lucide-react";

const LinkedInRecommendations = () => {
  const recommendations = [
    {
      name: "Vijay Yadav",
      title: "Engineering Manager | Project Management | Industrial Automation | AI-Driven Continuous Improvement",
      rating: "10/10 – Highly Recommended!",
      story:
        "The \"AI Agents Dominator\" Program has been an excellent learning experience. Shweta explains even complex AI concepts in a simple, patient and practical manner, making the course suitable for both IT and non-IT background professionals. The LMS with recorded sessions, detailed resources and continuous support makes learning flexible and convenient. What I appreciated most was the strong focus on hands-on implementation rather than just theory. I would highly recommend this program to anyone looking to build practical AI skills."
    },
    {
      name: "Shirish Bhambure",
      title: "Enterprise AI Architect | AI Transformation Leader | AI Strategy | Agentic AI | Solution Architecture | PMP",
      story:
        "I highly recommend Shweta Gupta's AI Agents Domination Program to anyone looking to build practical, future-ready skills in AI and automation. What sets this program apart is that it goes far beyond theory — hands-on learning across AI Agents, Prompt Engineering, Context Engineering, RAG, MCP, Vibe Coding, Voice Agents, LinkedIn content creation, and AI-powered automation workflows. Shweta's teaching style is simple, structured, and mentorship-driven. Being part of this program has significantly enhanced my understanding of Agentic AI and given me the confidence to build real-world AI solutions. If you're serious about learning AI Agents, this program is an excellent investment in your future."
    },
    {
      name: "Pankaj Prasad",
      title: "Finance Systems | Operational Excellence | AI Agents & Workflow Automation | Process Transformation | Incident2Insight",
      story:
        "Joining the AI Agents Domination Program has been one of the most valuable learning investments I've made in my AI journey. Coming from a non-technical background, I initially thought building AI agents required deep coding expertise — this program completely changed that perspective. Today, I've built AI-powered workflows, automated business processes, launched my Incident2Insight thought leadership series, and gained the confidence to turn ideas into working solutions. The biggest value isn't just the tools you learn — it's the mindset, structured guidance, and confidence to build. Thank you, Shweta, for empowering professionals from every background to embrace AI with confidence."
    },
    {
      name: "Samyuktha Goud",
      title: "Helping Students & Freelancers Learn AI Automation | n8n • No-Code • Workshops",
      story:
        "I had the opportunity to learn under Shweta Gupta through the AI Agents Domination Program, and it has been a valuable learning experience. The program gave me practical exposure to AI automation, AI agents, and real-world workflow building. What stands out about Shweta is her ability to simplify complex concepts and make them actionable. Her teaching approach is structured, practical, and focused on execution rather than just theory. I would definitely recommend this program to anyone who wants to build strong AI automation skills and apply them for business growth or career advancement."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Linkedin className="w-4 h-4" />
            LinkedIn Recommendations
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What Learners Have to Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic recommendations from professionals who transformed their careers through the AI Agents Domination Program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <Card
              key={index}
              className="hover:shadow-medium transition-all duration-300 border-primary/10 hover:border-primary/30"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                    {rec.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-foreground">{rec.name}</h3>
                      <Linkedin className="w-4 h-4 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                      {rec.title}
                    </p>
                  </div>
                </div>

                {rec.rating && (
                  <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {rec.rating}
                  </div>
                )}

                <div className="relative">
                  <Quote className="w-7 h-7 text-primary/15 absolute -top-1 -left-1" />
                  <p className="text-muted-foreground text-sm leading-relaxed pl-6 italic">
                    {rec.story}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInRecommendations;
