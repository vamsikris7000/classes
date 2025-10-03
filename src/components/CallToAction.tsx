import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Clock, Award, CheckCircle, Star, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const CallToAction = () => {
  const { t } = useTranslation();
  
  return (
    <section id="apply" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              {t('callToAction.badge')}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-loose">
              {t('callToAction.title')}
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent pb-2">
                {t('callToAction.titleHighlight')}
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('callToAction.subtitle')}
            </p>
          </div>

          {/* Program Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center group hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{t('callToAction.highlights.intensive.title')}</h3>
              <p className="text-white/80">{t('callToAction.highlights.intensive.description')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center group hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{t('callToAction.highlights.mentors.title')}</h3>
              <p className="text-white/80">{t('callToAction.highlights.mentors.description')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center group hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{t('callToAction.highlights.clients.title')}</h3>
              <p className="text-white/80">{t('callToAction.highlights.clients.description')}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl group">
                    <Award className="mr-3 w-6 h-6" />
                    {t('callToAction.buttons.apply')}
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-white text-white bg-white/10 hover:bg-white/20 hover:border-white font-bold px-10 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 group">
                    <Calendar className="mr-3 w-5 h-5" />
                    {t('callToAction.buttons.schedule')}
                  </Button>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {t('callToAction.benefits', { returnObjects: true }).map((benefit, index) => (
                <div key={index} className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-amber-400 mr-2" />
              <span className="text-white font-semibold text-lg">{t('callToAction.bottomInfo.title')}</span>
            </div>
            <p className="text-white/80 text-lg">
              {t('callToAction.bottomInfo.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;