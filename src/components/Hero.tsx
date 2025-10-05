import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Calendar, Award, CheckCircle, Star, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/image.png";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Full background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center py-8">
          {/* Top Banner */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 font-medium mb-8 shadow-lg">
            <Clock className="w-4 h-4 mr-2 text-amber-600" />
            <span>{t('hero.banner')}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-loose">
            {t('hero.title')}
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent pb-2">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* Primary CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold px-12 py-4 text-lg rounded-xl shadow-2xl transition-all duration-300 hover:shadow-3xl group"
              onClick={() => window.open('https://forms.gle/gwD8ynhuGvvJudDZ9', '_blank')}
            >
              {t('hero.buttons.primary')}
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Secondary CTA Link */}
          <div className="mb-12">
            <a 
              href="/curriculum" 
              className="text-white/80 hover:text-white underline text-lg font-medium transition-colors duration-300"
            >
              {t('hero.buttons.secondary')}
            </a>
          </div>

          {/* Key Benefits - Redesigned as smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center text-white/90 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-amber-400 mr-2" />
              <span className="font-medium text-sm">3-Week Intensive</span>
            </div>
            <div className="flex items-center justify-center text-white/90 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-amber-400 mr-2" />
              <span className="font-medium text-sm">Real Client Projects</span>
            </div>
            <div className="flex items-center justify-center text-white/90 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-amber-400 mr-2" />
              <span className="font-medium text-sm">Industry Mentors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;