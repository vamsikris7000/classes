import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Award, Users, Building2 } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bryan",
      age: 16,
      text: "I learned how to effectively collaborate with a team, design for a real client, and revise based on feedback. This workshop gave me experience that no classroom course could provide.",
      rating: 5,
      achievement: "Team Lead"
    },
    {
      name: "Andy",
      age: 16,
      text: "I built a functional AI agent capable of handling emails and answering research-related queries. The hands-on approach made complex concepts click for me.",
      rating: 5,
      achievement: "AI Developer"
    },
    {
      name: "Kevin",
      age: 17,
      text: "This workshop gave me experience that no classroom course could provide — building real projects with AI. I now feel confident tackling any tech challenge.",
      rating: 5,
      achievement: "Project Lead"
    },
    {
      name: "Sarah",
      age: 15,
      text: "Working with a real client from Harvard Medical School was incredible. I learned professional development practices and gained confidence in my technical abilities.",
      rating: 5,
      achievement: "Innovation Award"
    }
  ];

  const clientTestimonials = [
    {
      name: "Dr. Jennifer Chen",
      relation: "Harvard Medical School Faculty",
      text: "The students delivered exceptional work that exceeded our expectations. Their AI agent solution has streamlined our research processes and their professional approach was impressive.",
      rating: 5,
      company: "Harvard Medical School"
    },
    {
      name: "Michael Rodriguez", 
      relation: "Boston Children's Hospital IT Director",
      text: "This workshop produces students who are ready for real-world development. The quality of work and professional standards they demonstrated rivaled our junior developers.",
      rating: 5,
      company: "Boston Children's Hospital"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Student <span className="text-amber-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real students, real achievements, real transformations. See how our workshop is changing lives and careers.
          </p>
        </div>

        {/* Student Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <Quote className="w-6 h-6 text-amber-600 mb-4" />
                <p className="text-gray-700 italic leading-relaxed mb-6">"{testimonial.text}"</p>
                
                {/* Student Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                      {testimonial.achievement}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Age {testimonial.age}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Client Feedback</h3>
            <p className="text-lg text-gray-600">What our industry partners say about our students</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center text-amber-600">
                      <Building2 className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">{testimonial.company}</span>
                    </div>
                  </div>
                  
                  <Quote className="w-8 h-8 text-amber-600 mb-6" />
                  <p className="text-gray-700 text-lg italic leading-relaxed mb-8">"{testimonial.text}"</p>
                  
                  <div className="border-t border-amber-200 pt-6">
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-amber-600 font-medium">{testimonial.relation}</div>
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