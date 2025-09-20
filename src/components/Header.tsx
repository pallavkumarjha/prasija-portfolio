import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              Prasija<span className="text-blue-600">.</span>
            </h1>
            <p className="text-xs text-gray-600 hidden lg:block">Operations Manager</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} 
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('experience')} 
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Experience
            </button>
            <button onClick={() => scrollToSection('skills')} 
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} 
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </button>
          </nav>

          {/* CTA Button & Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:prasijamenon11@gmail.com" 
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/prasijamenon11" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <button onClick={() => scrollToSection('contact')}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} 
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('experience')} 
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} 
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} 
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                Contact
              </button>
              <div className="flex items-center justify-center space-x-4 pt-4 pb-2 border-t border-gray-100 mt-4">
                <a href="mailto:prasijamenon11@gmail.com" 
                   className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/prasijamenon11" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;