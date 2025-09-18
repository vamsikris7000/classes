import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-kids-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-fun-pink rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-secondary rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <Sparkles className="w-8 h-8 text-accent mr-3 animate-float" />
            <span className="text-primary-foreground/90 text-lg font-semibold">AI Bootcamp for Kids</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Learn AI, Build the 
            <span className="bg-gradient-fun bg-clip-text text-transparent"> Future</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl">
            Join thousands of kids aged 9-15 who are mastering AI, prompting, and creating amazing projects with GPT, Claude, and more!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-2xl shadow-fun transition-all duration-300 hover:scale-105">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-4 rounded-2xl">
              Watch Demo
              <Zap className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative rounded-3xl overflow-hidden shadow-glow transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src={heroImage} 
              alt="Kids learning AI and coding together"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl font-semibold animate-float shadow-fun">
            Age 9-15
          </div>
          <div className="absolute -bottom-4 -right-4 bg-fun-pink text-white px-4 py-2 rounded-2xl font-semibold animate-float shadow-fun" style={{ animationDelay: "1.5s" }}>
            AI Powered!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;