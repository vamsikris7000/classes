import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-fun-pink rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2 animate-slide-up">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-fun bg-clip-text text-transparent">
              AI Kids Bootcamp
            </h3>
            <p className="text-background/80 mb-6 sm:mb-8 max-w-lg text-base sm:text-lg leading-relaxed">
              Empowering the next generation with cutting-edge AI knowledge and practical skills to build amazing projects, solve real problems, and confidently shape the future of technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center group hover:text-accent transition-colors duration-300">
                <Mail className="w-5 h-5 mr-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="text-background/80 group-hover:text-background text-base sm:text-lg">hello@aikidsbootcamp.com</span>
              </div>
              <div className="flex items-center group hover:text-accent transition-colors duration-300">
                <Phone className="w-5 h-5 mr-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="text-background/80 group-hover:text-background text-base sm:text-lg">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center group hover:text-accent transition-colors duration-300">
                <MapPin className="w-5 h-5 mr-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="text-background/80 group-hover:text-background text-base sm:text-lg">Online & San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold mb-4 sm:mb-6 text-background text-xl">Quick Links</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block text-base sm:text-lg">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block text-base sm:text-lg">Curriculum</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block text-base sm:text-lg">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block text-base sm:text-lg">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block text-base sm:text-lg">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <h4 className="font-bold mb-4 sm:mb-6 text-background text-xl">Support</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block text-base sm:text-lg">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block text-base sm:text-lg">Parent Resources</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block text-base sm:text-lg">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block text-base sm:text-lg">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block text-base sm:text-lg">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 sm:mt-16 pt-8 sm:pt-12 text-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-fun bg-clip-text text-transparent font-semibold text-lg sm:text-xl mb-4">
            Inspiring young minds to create with AI ✨
          </div>
          <p className="text-background/60 text-base sm:text-lg">
            © 2024 AI Kids Bootcamp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;