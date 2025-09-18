import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-kids-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-fun-pink rounded-full animate-float blur-sm"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent rounded-full animate-float blur-sm" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-secondary rounded-full animate-float blur-sm" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-fun-blue rounded-full animate-float blur-sm" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/3 right-1/2 w-12 h-12 bg-fun-orange rounded-full animate-float blur-sm" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 py-8 lg:py-0">
        {/* Content */}
        <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1">
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <Sparkles className="w-8 h-8 text-accent mr-3 animate-float" />
            <span className="text-primary-foreground/90 text-lg font-semibold">AI Bootcamp for Kids</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Learn AI, Build the 
            <span className="bg-gradient-fun bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]"> Future</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/85 mb-8 max-w-2xl leading-relaxed">
            Join thousands of kids aged 9-15 who are mastering AI, prompting, and creating amazing projects with GPT, Claude, and more!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-6 text-lg rounded-3xl shadow-premium transition-all duration-500 hover:scale-105 hover:shadow-glow group">
              Start Your Journey
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/15 hover:border-primary-foreground/60 font-semibold px-8 py-6 text-lg rounded-3xl backdrop-blur-sm transition-all duration-300 group">
              Watch Demo
              <Zap className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-scale-in-bounce order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-premium transform hover:scale-105 transition-all duration-700 hover:shadow-glow">
            <img 
              src={heroImage} 
              alt="Kids learning AI and coding together"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/10"></div>
          </div>
          
          {/* Enhanced floating badges */}
          <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-secondary text-secondary-foreground px-4 py-3 sm:px-6 sm:py-4 rounded-2xl sm:rounded-3xl font-bold text-sm sm:text-base animate-float shadow-premium backdrop-blur-sm border border-white/20">
            Age 9-15
          </div>
          <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-gradient-fun text-white px-4 py-3 sm:px-6 sm:py-4 rounded-2xl sm:rounded-3xl font-bold text-sm sm:text-base animate-float shadow-premium backdrop-blur-sm" style={{ animationDelay: "1.5s" }}>
            ✨ AI Powered!
          </div>
          <div className="absolute top-1/2 -right-4 sm:-right-8 bg-accent text-accent-foreground px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm animate-float shadow-soft" style={{ animationDelay: "0.8s" }}>
            Live Classes
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;