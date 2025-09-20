import React from 'react';
import { GraduationCap, Award, Languages } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const CircularProgress = ({ percentage, size = 120, strokeWidth = 8 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#3b82f6"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Qualifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Core competencies and educational background that drive operational excellence
          </p>
        </div>

        {/* Core Skills */}
        <div className="mb-16 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {portfolioData.skills.map((skillCategory, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <CircularProgress percentage={skillCategory.level} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{skillCategory.category}</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skillCategory.items.map((item, itemIndex) => (
                      <span key={itemIndex} 
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education, Certifications, Languages */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 text-gray-800 rounded-2xl shadow-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <GraduationCap size={32} className="mr-4 text-blue-600" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <p className="text-blue-600 mb-2">{edu.field}</p>
                    <p className="font-semibold">{edu.institution}</p>
                    <p className="text-blue-500 text-sm">{edu.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 text-gray-800 rounded-2xl shadow-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <Award size={32} className="mr-4 text-emerald-600" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {portfolioData.certifications.map((cert, index) => (
                  <div key={index} className="bg-emerald-200/50 rounded-lg p-4">
                    <h4 className="font-semibold">{cert}</h4>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-emerald-200/30 rounded-lg">
                <p className="text-emerald-700 text-sm">
                  Continuously learning and staying updated with industry best practices
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-br from-violet-100 to-violet-200 text-gray-800 rounded-2xl shadow-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <Languages size={32} className="mr-4 text-violet-600" />
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              <div className="space-y-4">
                {portfolioData.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-violet-200/50 rounded-lg">
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-violet-600 text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-violet-200/30 rounded-lg">
                <p className="text-violet-700 text-sm">
                  Multilingual communication enabling diverse stakeholder engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;