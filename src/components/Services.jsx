import React from 'react';
import Section from './Section';
import { Monitor, Code, Database, Globe, Server } from 'lucide-react';

const Services = () => {
  const services = [
    { title: 'Full Stack Web Development', icon: <Globe size={32} />, description: 'Building modern full-stack web applications using the MERN stack.' },
    { title: 'Frontend Development', icon: <Monitor size={32} />, description: 'Creating responsive and interactive user interfaces with modern web technologies.' },
    { title: 'Backend & API Development', icon: <Server size={32} />, description: 'Developing server-side logic and RESTful APIs with Node.js and Express.' },
    { title: 'Database Development', icon: <Database size={32} />, description: 'Working with MongoDB and MySQL to manage and structure application data.' },
  ];

  return (
    <Section id="services" title="Services I Offer" className="bg-white/50 dark:bg-slate-900/20">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="glass p-8 rounded-2xl group hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 dark:hover:bg-primary-dark">
            <div className="text-primary dark:text-accent group-hover:text-white mb-6 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-3 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 group-hover:text-primary-100 transition-colors duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
