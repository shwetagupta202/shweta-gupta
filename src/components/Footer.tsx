import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Instagram, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "AI Agents Masterclass", href: "#" },
    { name: "Career Coaching", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "Blog & Resources", href: "#" },
    { name: "Speaking Engagements", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const resources = [
    { name: "LinkedIn Mastery Book", href: "#" },
    { name: "I Can Coach Vol. 3", href: "#" },
    { name: "AI Career Toolkit", href: "#" },
    { name: "Free Webinars", href: "#" },
    { name: "Salary Spike Hub", href: "#" },
    { name: "Community Guidelines", href: "#" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary-foreground">
                Shweta Gupta
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed max-w-md">
                Helping IT professionals and business owners leverage AI agents to 
                future-proof their careers and businesses. Join 100,000+ professionals 
                in the journey to career transformation.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <a href="https://www.linkedin.com/in/shwetagupta2021/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <a href="https://instagram.com/careergrowthwithshweta" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <a href="https://www.youtube.com/@coachshwetagupta" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <a href="mailto:connect@coachshwetagupta.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Newsletter */}
            <div className="bg-secondary-foreground/5 p-6 rounded-lg">
              <h4 className="font-semibold text-secondary-foreground mb-2">
                Weekly AI & Career Insights
              </h4>
              <p className="text-sm text-secondary-foreground/80 mb-4">
                Get exclusive strategies and insights delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-background text-foreground rounded-md text-sm"
                />
                <Button variant="default" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-secondary-foreground">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="font-semibold text-secondary-foreground">Resources</h4>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="block text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {resource.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-secondary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-secondary-foreground/80">
            <span>© 2024 Shweta Gupta. All rights reserved.</span>
            <a href="#" className="hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary-foreground transition-colors">
              Terms of Service
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-secondary-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for career transformation</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="pb-8">
          <div className="bg-secondary-foreground/5 p-6 rounded-lg text-center">
            <h4 className="font-semibold text-secondary-foreground mb-2">
              Ready to Transform Your Career?
            </h4>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Professional inquiries and partnership opportunities
            </p>
            <a
              href="mailto:connect@coachshwetagupta.com"
              className="text-primary font-medium hover:underline"
            >
              connect@coachshwetagupta.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;