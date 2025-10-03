import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Rocket, Users, Zap, Award, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Features = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Brain,
      title: t('features.items.clientRequirements.title'),
      description: t('features.items.clientRequirements.description'),
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: t('features.items.aiTools.title'),
      description: t('features.items.aiTools.description'),
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Rocket,
      title: t('features.items.fullScale.title'),
      description: t('features.items.fullScale.description'),
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    },
    {
      icon: Users,
      title: t('features.items.teamwork.title'),
      description: t('features.items.teamwork.description'),
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: t('features.items.aiAgents.title'),
      description: t('features.items.aiAgents.description'),
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      icon: Award,
      title: t('features.items.mentorship.title'),
      description: t('features.items.mentorship.description'),
      color: "bg-gradient-to-br from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            {t('features.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('features.title')} <span className="text-amber-600">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-white relative overflow-hidden rounded-3xl shadow-lg hover:shadow-amber-500/10"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-orange-50/0 group-hover:from-amber-50/50 group-hover:to-orange-50/50 transition-all duration-500"></div>
                
                
                <CardContent className="p-8 relative z-10">
                  {/* Enhanced Icon with Glow Effect */}
                  <div className={`w-20 h-20 ${feature.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 shadow-md`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Enhanced Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-amber-700 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-base">{feature.description}</p>
                  
                  {/* Enhanced Learn More Link */}
                  <div 
                    className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-all duration-300 cursor-pointer"
                    onClick={() => navigate('/curriculum')}
                  >
                    <span className="text-base">{t('features.cta.buttons.syllabus')}</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  </div>
                </CardContent>
                
                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-transparent rounded-br-3xl"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('features.cta.title')}</h3>
            <p className="text-gray-600 mb-6">{t('features.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
                {t('features.cta.buttons.apply')}
              </button>
                  <button 
                    className="border-2 border-amber-200 text-amber-700 hover:bg-amber-50 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                    onClick={() => navigate('/curriculum')}
                  >
                    {t('features.cta.buttons.program')}
                  </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;