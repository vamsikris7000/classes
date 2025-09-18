import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Rocket, Users, Gamepad2, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Fundamentals",
      description: "Learn how AI works, machine learning basics, and the technology that powers the future in fun, easy-to-understand lessons.",
      color: "bg-fun-pink"
    },
    {
      icon: Code,
      title: "Master Prompting",
      description: "Discover the art of communicating with AI. Learn prompt engineering to get amazing results from ChatGPT, Claude, and other AI tools.",
      color: "bg-primary"
    },
    {
      icon: Rocket,
      title: "Build Real Projects",
      description: "Create websites, apps, and backend systems using AI as your coding assistant. Build a portfolio that showcases your skills!",
      color: "bg-secondary"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Work with peers, share projects, and learn together in a supportive community of young AI enthusiasts and creators.",
      color: "bg-accent"
    },
    {
      icon: Gamepad2,
      title: "Gamified Experience",
      description: "Earn badges, level up your skills, and complete challenges that make learning AI as fun as playing your favorite games.",
      color: "bg-fun-blue"
    },
    {
      icon: Trophy,
      title: "Real Achievements",
      description: "Graduate with certificates, showcase your projects to family and friends, and gain confidence in technology and problem-solving.",
      color: "bg-fun-orange"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What You'll <span className="bg-gradient-fun bg-clip-text text-transparent">Learn & Create</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum is designed specifically for young minds, combining theory with hands-on practice to make AI accessible and exciting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;