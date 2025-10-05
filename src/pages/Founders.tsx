import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin, Mail, MapPin, GraduationCap, Briefcase, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import jiayunImage from "@/assets/jiayun.png";
import owenImage from "@/assets/owen.png";
import Footer from "@/components/Footer";

const Founders = () => {
  const { t } = useTranslation();
  
  const founders = [
    {
      name: t('founders.profiles.jiayun.name'),
      title: t('founders.profiles.jiayun.title'),
      image: jiayunImage,
      passion: t('founders.profiles.jiayun.passion'),
      education: t('founders.profiles.jiayun.education'),
      experience: t('founders.profiles.jiayun.experience'),
      previousRole: t('founders.profiles.jiayun.previousRole'),
      founding: t('founders.profiles.jiayun.founding'),
      location: t('founders.profiles.jiayun.location'),
      email: t('founders.profiles.jiayun.email')
    },
    {
      name: t('founders.profiles.owen.name'),
      title: t('founders.profiles.owen.title'), 
      image: owenImage,
      passion: t('founders.profiles.owen.passion'),
      education: t('founders.profiles.owen.education', { returnObjects: true }),
      experience: t('founders.profiles.owen.experience'),
      founding: t('founders.profiles.owen.founding'),
      location: t('founders.profiles.owen.location'),
      email: t('founders.profiles.owen.email')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              {t('founders.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('founders.title')} <span className="text-amber-600">{t('founders.titleHighlight')}</span> {t('founders.titleSuffix')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('founders.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white">
                <div className="relative">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-xl text-amber-300 font-medium">{founder.title}</p>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  {/* Passion Statement */}
                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                      <p className="text-gray-700 leading-relaxed italic">
                        "{founder.passion}"
                      </p>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="w-5 h-5 text-amber-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900">{t('founders.sections.education')}</h4>
                    </div>
                    {Array.isArray(founder.education) ? (
                      <ul className="space-y-2">
                        {founder.education.map((edu, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">{founder.education}</p>
                    )}
                  </div>

                  {/* Experience */}
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-5 h-5 text-amber-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900">{t('founders.sections.experience')}</h4>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{founder.experience}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{founder.previousRole}</p>
                    <p className="text-gray-600 leading-relaxed">{founder.founding}</p>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {founder.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="w-4 h-4 mr-1" />
                        {founder.email}
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('founders.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('founders.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://forms.gle/gwD8ynhuGvvJudDZ9', '_blank')}
              >
                <Award className="w-5 h-5 mr-2" />
                {t('founders.cta.buttons.join')}
              </Button>
              <Button 
                variant="outline" 
                className="border-amber-200 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg"
                onClick={() => window.open('mailto:Jiayun@xpectrum-ai.com')}
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('founders.cta.buttons.contact')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Founders;
