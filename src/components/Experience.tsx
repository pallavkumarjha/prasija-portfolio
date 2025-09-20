import React, { useState } from 'react';
import { Building, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(portfolioData.experience[0]);

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through healthcare and technology operations, driving efficiency and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Timeline Navigation */}
          <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Timeline</h3>
            {portfolioData.experience.map((exp, index) => (
              <div
                key={exp.id}
                onClick={() => setSelectedExperience(exp)}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 border-2 ${
                  selectedExperience.id === exp.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedExperience.id === exp.id ? 'bg-blue-600' : 'bg-gray-300'
                  }`}>
                    <Building size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-lg">{exp.company}</h4>
                    <p className="text-blue-600 font-semibold">{exp.role}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${
                      exp.type === 'Tech Startup' ? 'bg-green-100 text-green-800' :
                      exp.type === 'Healthcare' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Detailed Experience View */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedExperience.company}
                </h3>
                <h4 className="text-xl text-blue-600 font-semibold mb-4">
                  {selectedExperience.role}
                </h4>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar size={18} className="text-blue-500" />
                    <span className="font-medium">{selectedExperience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-blue-500" />
                    <span className="font-medium">{selectedExperience.location}</span>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedExperience.type === 'Tech Startup' ? 'bg-green-100 text-green-800' :
                    selectedExperience.type === 'Healthcare' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {selectedExperience.type}
                  </span>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-bold text-gray-900 mb-4">Key Achievements</h5>
                <div className="space-y-3">
                  {selectedExperience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 animate-fadeInUp" 
                         style={{animationDelay: `${0.1 * index}s`}}>
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;