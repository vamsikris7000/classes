import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Users, Building2, Mail, Phone, Award, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";

const Location = () => {
  const { t } = useTranslation();
  
  const locations = [
    {
      title: t('location.locations.seattle.title'),
      description: t('location.locations.seattle.description'),
      features: t('location.locations.seattle.features', { returnObjects: true }),
      contact: t('location.locations.seattle.contact'),
      icon: Building2,
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: t('location.locations.dubai.title'),
      description: t('location.locations.dubai.description'),
      features: t('location.locations.dubai.features', { returnObjects: true }),
      contact: t('location.locations.dubai.contact'),
      icon: Globe,
      color: "bg-gradient-to-br from-amber-500 to-amber-600"
    },
    {
      title: t('location.locations.bayArea.title'),
      description: t('location.locations.bayArea.description'),
      features: t('location.locations.bayArea.features', { returnObjects: true }),
      contact: t('location.locations.bayArea.contact'),
      icon: MapPin,
      color: "bg-gradient-to-br from-green-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              {t('location.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('location.title')} <span className="text-amber-600">{t('location.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('location.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {locations.map((location, index) => {
              const IconComponent = location.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-white relative overflow-hidden rounded-3xl shadow-lg hover:shadow-amber-500/10"
                >
                  <CardContent className="p-8 relative z-10">
                    {/* Icon */}
                    <div className={`w-20 h-20 ${location.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 shadow-md`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-amber-700 transition-colors duration-300">
                      {location.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-base">
                      {location.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="space-y-2">
                        {location.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Contact */}
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors duration-300">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="text-sm">{location.contact}</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-transparent rounded-br-3xl"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Online Learning Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Global Access
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('location.online.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('location.online.description')}
            </p>
            
            {/* Online Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {t('location.online.features', { returnObjects: true }).map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('location.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('location.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://forms.gle/gwD8ynhuGvvJudDZ9', '_blank')}
              >
                <Award className="w-5 h-5 mr-2" />
                {t('location.cta.buttons.apply')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-amber-200 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg"
                onClick={() => window.open('mailto:Jiayun@xpectrum-ai.com')}
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('location.cta.buttons.contact')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;
