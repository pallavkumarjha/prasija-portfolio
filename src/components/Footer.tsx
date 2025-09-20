import React from 'react';
import { Heart, Mail, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-6">Prasija Menon</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dynamic Operations Manager driving efficiency and excellence in healthcare & technology operations.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:prasijamenon11@gmail.com" 
                   className="text-gray-300 hover:text-blue-400 transition-colors">
                  prasijamenon11@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-300">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <button onClick={() => scrollToSection('home')} 
                      className="block text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('experience')} 
                      className="block text-gray-300 hover:text-blue-400 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} 
                      className="block text-gray-300 hover:text-blue-400 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} 
                      className="block text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Professional Links */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h4 className="text-xl font-bold mb-6">Connect With Me</h4>
            <div className="space-y-4">
              <a href="https://www.linkedin.com/in/prasijamenon11" target="_blank" rel="noopener noreferrer"
                 className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <Linkedin size={20} className="group-hover:text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a href="mailto:prasijamenon11@gmail.com"
                 className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <Mail size={20} className="group-hover:text-blue-400" />
                <span>Send Email</span>
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-blue-900/30 rounded-lg">
              <p className="text-sm text-gray-300">
                Open to discussing new opportunities in operations management, healthcare administration, and process optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Prasija Menon. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>in React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;