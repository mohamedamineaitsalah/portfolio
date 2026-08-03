import React from 'react';
import Section from './Section';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Developer',
      company: 'Filat Distribution',
      location: 'Ain Sebaa, Bernoussi',
      period: 'Jul 2026 - Present',
      description: [
        'Developed, designed, and maintained the company\'s websites.',
        'Collaborated with the team to analyze requirements and deliver effective technical solutions.',
        'Built high-performance web applications to meet business needs.',
        'Created modern, responsive, and user-friendly interfaces.',
        'Optimized website performance and enhanced user experience.',
        'Fixed bugs, maintained web applications, and contributed to continuous improvement.'
      ]
    },
    {
      role: 'Tracking & Calculation Agent',
      company: 'Ould Zaoia - Gypsum Quarry',
      location: 'Sidi Ettiji, Morocco',
      period: 'Apr 2020 - Aug 2020',
      description: [
        'Calculated and recorded weighbridge tickets.',
        'Controlled the weight of trucks and gypsum loads.',
        'Tracked the entry and exit of trucks.',
        'Participated in the organization and daily operational controls.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Professional License - Web Development',
      institution: 'SAGIM',
      location: 'Marrakesh, Morocco',
      period: 'Dec 2025 - Present'
    },
    {
      degree: 'Bachelor in Economics Student',
      institution: 'Polydisciplinary Faculty of Safi',
      location: 'Safi, Morocco',
      period: 'Sep 2023 - Present'
    },
    {
      degree: 'IT Technician Diploma',
      institution: 'Fondation Abda de l\'informatique',
      location: 'Safi, Morocco',
      period: 'Oct 2023 - Aug 2025'
    },
    {
      degree: 'Baccalaureate in SVT (Free Candidate)',
      institution: 'Free Candidate',
      location: 'Safi, Morocco',
      period: 'Jun 2025'
    },
    {
      degree: 'Baccalaureate in Physical Sciences',
      institution: 'Lycée Qualifiant Al-Mutanabb',
      location: 'Tlet Sidi Bouguedra, Morocco',
      period: 'Sep 2020 - Jul 2023'
    }
  ];

  return (
    <Section id="experience" title="Experience & Education">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Experience Column */}
        <div>
          <div className="flex items-center mb-8">
            <Briefcase className="text-primary dark:text-accent mr-3" size={28} />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Work Experience</h3>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-primary dark:bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute left-0 md:left-1/2 -ml-5 md:ml-0">
                  <Briefcase size={16} />
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 glass-card p-6">
                  <div className="flex items-center space-x-2 text-sm text-accent font-medium mb-2">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">{exp.role}</h4>
                  <div className="text-primary font-medium mb-4">{exp.company} <span className="text-slate-500 text-sm">| {exp.location}</span></div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div className="flex items-center mb-8">
            <GraduationCap className="text-primary dark:text-accent mr-3" size={28} />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-primary dark:bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute left-0 md:left-1/2 -ml-5 md:ml-0">
                  <GraduationCap size={16} />
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 glass-card p-6">
                  <div className="flex items-center space-x-2 text-sm text-accent font-medium mb-2">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">{edu.degree}</h4>
                  <div className="text-primary font-medium">{edu.institution}</div>
                  <div className="text-slate-500 text-sm">{edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </Section>
  );
};

export default Experience;
