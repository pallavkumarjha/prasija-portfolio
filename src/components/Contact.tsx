import React from 'react';
import { Mail, Linkedin, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to drive operational excellence together? Let's discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities where I can leverage my operations management expertise 
                to drive efficiency, enhance team performance, and create meaningful impact.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:prasijamenon11@gmail.com" 
                       className="text-blue-600 hover:text-blue-700 transition-colors">
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/prasijamenon11" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:text-blue-700 transition-colors">
                      {portfolioData.personal.linkedin}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">{portfolioData.personal.location}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                <a href="mailto:prasijamenon11@gmail.com"
                   className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold text-center">
                  Send Email
                </a>
                <a href="https://www.linkedin.com/in/prasijamenon11" target="_blank" rel="noopener noreferrer"
                   className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-semibold text-center">
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Why Connect */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Connect With Me?</h3>
              
              <div className="space-y-4">
                {portfolioData.whyConnect.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <p className="text-blue-50">{reason}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-500/30 rounded-xl">
                <h4 className="font-bold mb-3">Current Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-400/30 rounded-full text-sm">Operations Strategy</span>
                  <span className="px-3 py-1 bg-blue-400/30 rounded-full text-sm">Process Optimization</span>
                  <span className="px-3 py-1 bg-blue-400/30 rounded-full text-sm">Team Leadership</span>
                  <span className="px-3 py-1 bg-blue-400/30 rounded-full text-sm">Customer Success</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-500/20 rounded-lg">
                <p className="text-blue-100 text-sm">
                  Available for full-time opportunities and consulting engagements in operations management, 
                  healthcare administration, and process improvement initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;