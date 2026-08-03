import React from 'react';
import Section from './Section';
import { User, MapPin, Mail, Phone, Calendar } from 'lucide-react';

const About = () => {
  const details = [
    { icon: <User className="text-primary dark:text-accent" size={20} />, label: 'Name', value: 'Mohamed Amine Ait Salah' },
    { icon: <MapPin className="text-primary dark:text-accent" size={20} />, label: 'Location', value: 'Casablanca, Morocco' },
    { icon: <Mail className="text-primary dark:text-accent" size={20} />, label: 'Email', value: 'mohamedamineaitsalah02@gmail.com' },
    { icon: <Phone className="text-primary dark:text-accent" size={20} />, label: 'WhatsApp', value: '+212 697936897' },
  ];

  return (
    <Section id="about" title="About Me" className="bg-white/50 dark:bg-slate-900/20">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 relative">
          <div className="absolute inset-0 bg-primary/10 dark:bg-accent/10 transform -skew-x-6 rounded-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Workspace" 
            className="rounded-2xl shadow-xl relative z-10 w-full h-auto object-cover border-4 border-white dark:border-slate-800"
          />
          <div className="glass-card absolute -bottom-6 -right-6 p-4 z-20 hidden md:block">
            <p className="text-3xl font-bold text-primary dark:text-accent text-center">100%</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Commitment</p>
          </div>
        </div>
        
        <div className="md:col-span-7">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Passionate Full Stack Web Developer
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            I am a passionate Full Stack Web Developer specializing in the MERN Stack (MongoDB, Express.js, React.js, and Node.js). I enjoy building modern, scalable, and high-performance web applications with clean architecture and responsive user interfaces.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            I am always eager to learn new technologies, solve real-world problems, and deliver high-quality digital solutions. My goal is to create innovative web experiences while continuously improving my technical skills and contributing to impactful projects.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 glass rounded-lg">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{detail.label}</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate w-40 sm:w-auto" title={detail.value}>{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
