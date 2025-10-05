import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Award, Users, Building2 } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bryan",
      age: 16,
      text: "I learned how to effectively collaborate with a team, design for a real client, and revise based on feedback. This workshop gave me experience that no classroom course could provide.",
      rating: 5
    },
    {
      name: "Andy",
      age: 16,
      text: "I built a functional AI agent capable of handling emails and answering research-related queries. The hands-on approach made complex concepts click for me.",
      rating: 5
    },
    {
      name: "Kevin",
      age: 17,
      text: "This workshop gave me experience that no classroom course could provide — building real projects with AI. I now feel confident tackling any tech challenge.",
      rating: 5
    },
    {
      name: "Stella",
      age: 16,
      text: "Working with a real client from Harvard Medical School was incredible. I learned professional development practices and gained confidence in my technical abilities.",
      rating: 5
    }
  ];

  const clientTestimonials = [
    {
      name: "Dr. Rubul Mout",
      relation: "Harvard Medical School",
      text: "The students delivered a site that far surpassed my expectations. The design was very professional done, and I'm impressed that I was able to communicate and give feedback directly to the high school students, and they were able to incorporate the changes in a timely manner. I'm glad to have this opportunity to talk to high school students about my research and have a real collaboration project with them",
      rating: 5,
      company: "Harvard Medical School"
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
                  <div className="font-bold text-gray-900 mb-2">{testimonial.name}</div>
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
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              {clientTestimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="flex items-center text-amber-600">
                        <Building2 className="w-6 h-6 mr-2" />
                        <span className="text-lg font-medium">{testimonial.company}</span>
                      </div>
                    </div>
                    
                    <Quote className="w-12 h-12 text-amber-600 mb-8" />
                    <p className="text-gray-700 text-xl italic leading-relaxed mb-12">"{testimonial.text}"</p>
                    
                    <div className="border-t border-amber-200 pt-8">
                      <div className="font-bold text-gray-900 text-xl">{testimonial.name}</div>
                      <div className="text-amber-600 font-medium text-lg">{testimonial.relation}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;