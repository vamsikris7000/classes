import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Clock } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-accent rounded-full animate-float blur-lg"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-fun-pink rounded-full animate-float blur-lg" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-secondary rounded-full animate-float blur-lg" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 sm:mb-8 leading-tight">
            Ready to Start Your 
            <span className="bg-gradient-fun bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]"> AI Adventure?</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/85 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our next cohort and transform into an AI creator! Limited spots available for personalized attention and incredible learning outcomes.
          </p>

          {/* Enhanced program highlights */}
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 text-center group hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-glow animate-scale-in-bounce" style={{ animationDelay: "0.2s" }}>
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-primary-foreground font-bold text-lg sm:text-xl mb-1">8-Week Program</div>
              <div className="text-primary-foreground/70 text-sm sm:text-base">Comprehensive curriculum</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 text-center group hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-glow animate-scale-in-bounce" style={{ animationDelay: "0.4s" }}>
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-primary-foreground font-bold text-lg sm:text-xl mb-1">Small Classes</div>
              <div className="text-primary-foreground/70 text-sm sm:text-base">Max 12 students per cohort</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 text-center group hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-glow animate-scale-in-bounce" style={{ animationDelay: "0.6s" }}>
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-fun-pink mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-primary-foreground font-bold text-lg sm:text-xl mb-1">Live Sessions</div>
              <div className="text-primary-foreground/70 text-sm sm:text-base">Interactive & engaging</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-8 text-xl sm:text-2xl rounded-3xl shadow-premium transition-all duration-500 hover:scale-110 hover:shadow-glow group relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center">
                Enroll Now - $297
                <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
            <Button variant="outline" size="lg" className="border-3 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/70 font-bold px-10 py-8 text-lg sm:text-xl rounded-3xl backdrop-blur-xl transition-all duration-500 hover:scale-105 group">
              Book Free Consultation
              <Calendar className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          <div className="mt-8 sm:mt-10 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 max-w-2xl mx-auto">
            <p className="text-primary-foreground/80 text-base sm:text-lg mb-2">
              ✅ 30-day money-back guarantee
            </p>
            <p className="text-primary-foreground/80 text-base sm:text-lg">
              🚀 Next cohort starts March 15th • Only 8 spots remaining!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;