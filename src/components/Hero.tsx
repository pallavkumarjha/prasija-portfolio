import React from 'react';
import { MapPin, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300/20 rounded-full animate-float"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-fadeInUp">
            {/* Location Badge */}
            <div className="flex items-center space-x-2 text-gray-600 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <MapPin size={18} className="text-blue-600" />
              <span className="text-sm font-medium">{portfolioData.personal.location}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  {portfolioData.personal.name.split(' ')[0]}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-700">
                {portfolioData.personal.title}
              </h2>
              <p className="text-xl text-blue-600 font-semibold">
                {portfolioData.personal.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              {portfolioData.personal.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <button onClick={() => scrollToSection('contact')}
                      className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Let's Connect</span>
                <ArrowRight size={20} />
              </button>
              <div className="flex items-center space-x-4">
                <a href="mailto:prasijamenon11@gmail.com" 
                   className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/prasijamenon11" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
            {/* Impact Metrics Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-popIn" style={{animationDelay: '0.6s'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                {portfolioData.achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {achievement.metric}{achievement.metric.includes('%') ? '' : '+'}
                    </div>
                    <div className="text-sm text-gray-600 leading-tight">
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Highlight Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg p-8 animate-popIn" style={{animationDelay: '0.7s'}}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Experience</h3>
                  <p className="text-blue-100">Operations Excellence</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold">4+</div>
                  <div className="text-blue-100">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;