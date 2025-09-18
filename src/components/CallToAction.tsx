import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Clock } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-fun-pink rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Start Your 
            <span className="bg-gradient-fun bg-clip-text text-transparent"> AI Adventure?</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our next cohort and become an AI creator! Limited spots available for personalized attention and amazing learning outcomes.
          </p>

          {/* Program highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-primary-foreground font-semibold">8-Week Program</div>
              <div className="text-primary-foreground/70 text-sm">Comprehensive curriculum</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-primary-foreground font-semibold">Small Classes</div>
              <div className="text-primary-foreground/70 text-sm">Max 12 students per cohort</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Clock className="w-8 h-8 text-fun-pink mx-auto mb-3" />
              <div className="text-primary-foreground font-semibold">Live Sessions</div>
              <div className="text-primary-foreground/70 text-sm">Interactive & engaging</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-6 text-lg rounded-2xl shadow-fun transition-all duration-300 hover:scale-105">
              Enroll Now - $297
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg rounded-2xl">
              Book Free Consultation
            </Button>
          </div>

          <p className="text-primary-foreground/60 text-sm mt-6">
            30-day money-back guarantee • Next cohort starts March 15th
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;