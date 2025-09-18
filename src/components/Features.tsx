import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Rocket, Users, Gamepad2, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Fundamentals Made Simple",
      description: "Discover how AI really works through interactive lessons, visual examples, and hands-on experiments that make complex concepts crystal clear.",
      color: "bg-fun-pink",
      delay: "0.1s"
    },
    {
      icon: Code,
      title: "Master AI Prompting",
      description: "Learn the secret language of AI! Master prompt engineering to unlock the full potential of ChatGPT, Claude, and cutting-edge AI tools.",
      color: "bg-primary",
      delay: "0.2s"
    },
    {
      icon: Rocket,
      title: "Build Real Projects",
      description: "Create stunning websites, mobile apps, and backend systems using AI as your coding partner. Build an impressive portfolio that wows everyone!",
      color: "bg-secondary",
      delay: "0.3s"
    },
    {
      icon: Users,
      title: "Collaborative Learning Hub",
      description: "Join a vibrant community of young innovators. Share projects, get feedback, and collaborate on exciting challenges with peers worldwide.",
      color: "bg-accent",
      delay: "0.4s"
    },
    {
      icon: Gamepad2,
      title: "Gamified Adventures",
      description: "Level up through achievements, unlock special badges, and compete in coding challenges that make learning as addictive as gaming!",
      color: "bg-fun-blue",
      delay: "0.5s"
    },
    {
      icon: Trophy,
      title: "Real-World Recognition",
      description: "Graduate with industry-recognized certificates, showcase projects to family, and gain the confidence to tackle any tech challenge.",
      color: "bg-fun-orange",
      delay: "0.6s"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-mesh relative">
      <div className="absolute inset-0 bg-gradient-subtle opacity-90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            What You'll <span className="bg-gradient-fun bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">Learn & Create</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our comprehensive curriculum transforms curious kids into confident AI creators through hands-on projects and expert guidance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-0 bg-gradient-card backdrop-blur-xl animate-slide-up relative overflow-hidden"
                style={{ animationDelay: feature.delay }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-fun opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 sm:p-8 text-center relative z-10">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 ${feature.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft`}>
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
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