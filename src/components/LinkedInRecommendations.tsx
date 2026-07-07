import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import vijayAsset from "@/assets/recommendations/vijay.asset.json";
import shirishAsset from "@/assets/recommendations/shirish.asset.json";
import pankajAsset from "@/assets/recommendations/pankaj.asset.json";
import samyukthaAsset from "@/assets/recommendations/samyuktha.asset.json";

const LinkedInRecommendations = () => {
  const recommendations = [
    { name: "Vijay Yadav", image: vijayAsset.url },
    { name: "Shirish Bhambure", image: shirishAsset.url },
    { name: "Pankaj Prasad", image: pankajAsset.url },
    { name: "Samyuktha Goud", image: samyukthaAsset.url },
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
              className="overflow-hidden hover:shadow-medium transition-all duration-300 border-primary/10 hover:border-primary/30"
            >
              <CardContent className="p-2 sm:p-4">
                <img
                  src={rec.image}
                  alt={`LinkedIn recommendation from ${rec.name} for Shweta Gupta's AI Agents Domination Program`}
                  loading="lazy"
                  className="w-full h-auto rounded-md"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInRecommendations;
