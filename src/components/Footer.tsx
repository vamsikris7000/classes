import { Mail, Phone, MapPin, Code, Award, Users, ArrowRight } from "lucide-react";
import logo from "@/assets/xpectrumai.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex flex-col items-start">
                <img src={logo} alt="Xpectrum AI Logo" className="h-12" />
                <p className="text-white/80 text-sm font-medium mt-2">AI Agent Workshop</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
              Empowering students with real-world AI development experience. Learn from industry professionals, 
              work with Harvard Medical School clients, and build portfolio-ready projects that prepare you for tech careers.
            </p>
            
            {/* Contact Info */}
                   <div className="space-y-4">
                     <div className="flex items-center group hover:text-amber-400 transition-colors duration-300">
                       <Mail className="w-5 h-5 mr-4 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                       <span className="text-gray-300 group-hover:text-white">Jiayun@xpectrum-ai.com</span>
                     </div>
                     <div className="flex items-center group hover:text-amber-400 transition-colors duration-300">
                       <Phone className="w-5 h-5 mr-4 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                       <span className="text-gray-300 group-hover:text-white">+1 (425) 502-5552</span>
                     </div>
                     <div className="flex items-center group hover:text-amber-400 transition-colors duration-300">
                       <MapPin className="w-5 h-5 mr-4 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                       <span className="text-gray-300 group-hover:text-white">Seattle, USA</span>
                     </div>
                   </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#workshop" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">About Workshop</a></li>
              <li><a href="#curriculum" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Curriculum</a></li>
              <li><a href="#stories" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Success Stories</a></li>
              <li><a href="#apply" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Apply Now</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Student Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Mentorship Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Career Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <Award className="w-5 h-5 text-amber-500 mr-2" />
                <span className="text-amber-400 font-semibold">Preparing students for real-world AI development</span>
              </div>
              <p className="text-gray-400">© 2024 AI Agent Workshop. All rights reserved.</p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <Users className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <Award className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;