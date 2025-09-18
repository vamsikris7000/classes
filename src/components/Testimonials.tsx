import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      age: 12,
      text: "I built my first website using AI prompts! Now I can create anything I imagine. My friends think I'm a coding genius!",
      rating: 5,
      project: "Personal Portfolio Website"
    },
    {
      name: "Alex K.",
      age: 14,
      text: "Learning AI has been the coolest thing ever. I created a chatbot for my school project and got an A+. My teacher was amazed!",
      rating: 5,
      project: "School Helper Chatbot"
    },
    {
      name: "Maya P.",
      age: 11,
      text: "I used to think AI was scary, but now I know how to use it to solve problems. I even helped my dad with his business website!",
      rating: 5,
      project: "Business Landing Page"
    },
    {
      name: "Jake L.",
      age: 13,
      text: "The instructors made everything so fun and easy to understand. I went from knowing nothing about AI to building my own apps!",
      rating: 5,
      project: "Mobile Game Prototype"
    }
  ];

  const parentTestimonials = [
    {
      name: "Jennifer Chen",
      relation: "Parent of Emma (10)",
      text: "Emma has gained so much confidence in technology. She's constantly showing us new projects and explaining how AI works. Worth every penny!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      relation: "Parent of Carlos (13)",
      text: "This bootcamp prepared my son for the future. He's now helping his classmates with their projects and talking about becoming an AI engineer.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Success <span className="bg-gradient-fun bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it! Here's what our amazing students and their parents have to say about their AI learning journey.
          </p>
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">What Our Students Say</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-fun transition-all duration-300 hover:-translate-y-1 bg-card border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <Quote className="w-6 h-6 text-muted-foreground mb-3" />
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">Age {testimonial.age}</div>
                    <div className="text-xs text-primary font-medium mt-1">Built: {testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Parent Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">What Parents Say</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {parentTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-gradient-fun text-white border-0 shadow-fun animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white text-white" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-white/80 mb-4" />
                  <p className="text-white/95 mb-6 text-lg italic">"{testimonial.text}"</p>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/80">{testimonial.relation}</div>
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