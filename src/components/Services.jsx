import React from 'react';
import Section from './Section';
import { Monitor, Code, Database, Globe, Server, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    { title: 'Full Stack Web Development', icon: <Globe size={32} />, description: 'End-to-end web application development using the MERN stack.' },
    { title: 'Frontend Development', icon: <Monitor size={32} />, description: 'Building responsive, interactive, and modern user interfaces.' },
    { title: 'Backend Development', icon: <Server size={32} />, description: 'Creating robust and scalable server-side logic and APIs.' },
    { title: 'REST API Development', icon: <Code size={32} />, description: 'Designing and implementing secure RESTful web services.' },
    { title: 'Database Design', icon: <Database size={32} />, description: 'Structuring and optimizing MongoDB and MySQL databases.' },
    { title: 'Responsive Website Design', icon: <Smartphone size={32} />, description: 'Ensuring seamless experiences across desktop, tablet, and mobile.' },
  ];

  return (
    <Section id="services" title="Services I Offer" className="bg-white/50 dark:bg-slate-900/20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
