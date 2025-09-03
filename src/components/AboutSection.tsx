import { Card } from "@/components/ui/card";
import { BookOpen, Briefcase, Heart, Users } from "lucide-react";
import bookImage from "@/assets/i-can-coach-book.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With 14+ years of IT experience across global companies like Cisco, Huawei, 
                Technia AB, and Tata Technologies, I've witnessed firsthand the rapid evolution 
                of technology and its impact on careers.
              </p>
            </div>

            {/* Professional Journey */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Career Coach & Founder</h3>
                  <p className="text-muted-foreground">
                    Founder of Salary Spike Hub, helping IT professionals achieve 2x salary hikes 
                    and global career breakthroughs through strategic LinkedIn branding and AI-powered tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Published Author</h3>
                  <p className="text-muted-foreground">
                    Author of bestseller "LinkedIn Mastery for Professionals" and Co-Author of 
                    "I Can Coach Vol. 3" by Siddharth Rajsekar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mission-Driven Leader</h3>
                  <p className="text-muted-foreground">
                    Passionate about AI Agents, automation, and redefining recruitment & productivity 
                    systems to help 100,000 professionals become future-proof.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Touch */}
            <Card className="p-6 bg-accent/50 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Beyond Professional</h3>
                  <p className="text-muted-foreground">
                    When I'm not coaching or building AI solutions, you'll find me singing, 
                    exploring new destinations, or nurturing vibrant professional communities. 
                    I believe in making career transformation both powerful and joyful.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Book Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={bookImage}
                alt="I Can Coach Vol. 3 book by Siddharth Rajsekar featuring Shweta Gupta"
                className="w-full max-w-sm mx-auto rounded-xl shadow-medium"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-secondary rounded-xl transform -rotate-2 scale-105 -z-10 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;