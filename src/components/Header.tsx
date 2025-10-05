import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Users, Calendar, Award, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navigation = [
    { name: t('header.nav.home'), href: "/" },
    { name: t('header.nav.portfolio'), href: "/portfolio" },
    { name: t('header.nav.curriculum'), href: "/curriculum" },
    { name: t('header.nav.founders'), href: "/founders" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="AI Agent Workshop Logo" className="w-16 h-16" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">{t('header.title')}</h1>
              <p className="text-xs text-gray-600 -mt-1">{t('header.subtitle')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeLanguage('en')}
                className={`border-amber-200 text-amber-700 hover:bg-amber-50 ${i18n.language === 'en' ? 'bg-amber-100' : ''}`}
              >
                EN
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeLanguage('zh')}
                className={`border-amber-200 text-amber-700 hover:bg-amber-50 ${i18n.language === 'zh' ? 'bg-amber-100' : ''}`}
              >
                中文
              </Button>
            </div>
            <Button 
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg"
              onClick={() => window.open('https://forms.gle/gwD8ynhuGvvJudDZ9', '_blank')}
            >
              <Award className="w-4 h-4 mr-2" />
              {t('header.buttons.apply')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                {/* Mobile Language Switcher */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => changeLanguage('en')}
                    className={`flex-1 border-amber-200 text-amber-700 hover:bg-amber-50 ${i18n.language === 'en' ? 'bg-amber-100' : ''}`}
                  >
                    EN
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => changeLanguage('zh')}
                    className={`flex-1 border-amber-200 text-amber-700 hover:bg-amber-50 ${i18n.language === 'zh' ? 'bg-amber-100' : ''}`}
                  >
                    中文
                  </Button>
                </div>
                
                <Button variant="outline" className="w-full border-amber-200 text-amber-700 hover:bg-amber-50">
                  <Users className="w-4 h-4 mr-2" />
                  {t('header.buttons.schedule')}
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
                  onClick={() => window.open('https://forms.gle/gwD8ynhuGvvJudDZ9', '_blank')}
                >
                  <Award className="w-4 h-4 mr-2" />
                  {t('header.buttons.apply')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
