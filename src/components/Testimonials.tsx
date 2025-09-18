import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      age: 12,
      text: "I built my first website using AI prompts in just 2 weeks! Now my friends call me the 'AI Wizard' and I'm helping them with their projects too. Best decision ever!",
      rating: 5,
      project: "Personal Portfolio Website",
      badge: "🏆 Top Creator"
    },
    {
      name: "Alex K.",
      age: 14,
      text: "Learning AI changed everything for me. I created a smart chatbot for our school library that helps students find books. My teacher was so impressed she featured it in the newsletter!",
      rating: 5,
      project: "Smart Library Assistant",
      badge: "🤖 AI Expert"
    },
    {
      name: "Maya P.",
      age: 11,
      text: "I used to think coding was super hard, but with AI as my assistant, I built my own game! My little brother plays it every day and all his friends want to learn how I made it.",
      rating: 5,
      project: "Adventure Quest Game",
      badge: "🎮 Game Master"
    },
    {
      name: "Jake L.",
      age: 13,
      text: "The instructors are amazing! They made everything click for me. I went from zero coding knowledge to building a weather app that my whole family uses daily. Mind = blown!",
      rating: 5,
      project: "Smart Weather Dashboard",
      badge: "⚡ Fast Learner"
    }
  ];

  const parentTestimonials = [
    {
      name: "Jennifer Chen",
      relation: "Parent of Emma (10)",
      text: "Emma has gained incredible confidence in technology. She's constantly creating new projects and teaching us about AI! The transformation has been amazing to watch. Worth every single penny!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Rodriguez", 
      relation: "Parent of Carlos (13)",
      text: "This bootcamp didn't just teach coding - it prepared Carlos for the future. He now mentors other kids and talks about becoming an AI engineer. His problem-solving skills have skyrocketed!",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-fun-pink/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Success <span className="bg-gradient-fun bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">Stories</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Real students, real achievements, real transformations. See how our AI bootcamp is changing young lives every day.
          </p>
        </div>

        {/* Student Testimonials */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">What Our Students Say</h3>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-gradient-card border-0 animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-fun opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded-full">{testimonial.badge}</span>
                  </div>
                  
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  
                  <div className="border-t border-muted pt-4">
                    <div className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Age {testimonial.age}</div>
                    <div className="text-xs text-primary font-semibold mt-1 bg-primary/10 px-2 py-1 rounded-lg inline-block">Built: {testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Parent Testimonials */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">What Parents Say</h3>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {parentTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-gradient-fun text-white border-0 shadow-premium hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-slide-up relative overflow-hidden group"
                style={{ animationDelay: `${(index + 4) * 0.15}s` }}
              >
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-500"></div>
                
                <CardContent className="p-8 sm:p-10 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white" />
                      ))}
                    </div>
                    <span className="text-4xl sm:text-5xl">{testimonial.avatar}</span>
                  </div>
                  
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white/80 mb-6" />
                  <p className="text-white/95 mb-8 text-base sm:text-lg lg:text-xl italic leading-relaxed">"{testimonial.text}"</p>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="font-bold text-white text-lg sm:text-xl">{testimonial.name}</div>
                    <div className="text-sm sm:text-base text-white/80">{testimonial.relation}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;