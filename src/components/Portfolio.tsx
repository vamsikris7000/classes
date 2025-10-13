import { ExternalLink, Github, Users, Presentation, BookOpen, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import patholifeImage from "@/assets/patholife.png";
import xpectrumImage from "@/assets/logo.png";
import rubulImage from "@/assets/Rubul.png";

const Portfolio = () => {
  const { t } = useTranslation();
  
  const websites = [
    {
      title: t('portfolio.projects.patholife.title'),
      description: t('portfolio.projects.patholife.description'),
      image: patholifeImage,
      url: "https://patholife.in/",
      technologies: t('portfolio.projects.patholife.technologies', { returnObjects: true }),
      features: t('portfolio.projects.patholife.features', { returnObjects: true }),
      student: "Rubul & Team",
      achievement: t('portfolio.projects.patholife.achievement')
    },
    {
      title: t('portfolio.projects.xpectrum.title'),
      description: t('portfolio.projects.xpectrum.description'),
      image: xpectrumImage,
      url: "https://xpectrum-ai.com/",
      technologies: t('portfolio.projects.xpectrum.technologies', { returnObjects: true }),
      features: t('portfolio.projects.xpectrum.features', { returnObjects: true }),
      student: "Advanced AI Team",
      achievement: t('portfolio.projects.xpectrum.achievement')
    },
    {
      title: t('portfolio.projects.rubul.title'),
      description: t('portfolio.projects.rubul.description'),
      image: rubulImage,
      url: "https://rubul-mout.com/",
      technologies: t('portfolio.projects.rubul.technologies', { returnObjects: true }),
      features: t('portfolio.projects.rubul.features', { returnObjects: true }),
      student: "Rubul Mout",
      achievement: t('portfolio.projects.rubul.achievement')
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              {t('portfolio.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('portfolio.title')} <span className="text-amber-600">{t('portfolio.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('portfolio.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Website Showcases */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('portfolio.sectionTitle')}
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {websites.map((website, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative">
                  <img 
                    src={website.image} 
                    alt={website.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button 
                      size="sm" 
                      className="bg-white/90 hover:bg-white text-gray-900"
                      onClick={() => window.open(website.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{website.title}</h4>
                    <p className="text-amber-600 font-medium">{website.achievement}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{website.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Features:</h5>
                    <div className="flex flex-wrap gap-2">
                      {website.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {website.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button 
                      className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
                      onClick={() => window.open(website.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('portfolio.buttons.visitSite')}
                    </Button>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {t('portfolio.buttons.studentProject')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
