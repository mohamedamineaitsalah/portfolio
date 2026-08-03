import React from 'react';
import Section from './Section';
import { Code2, Database, Layout, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="text-primary dark:text-accent" size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-primary dark:text-accent" size={24} />,
      skills: ['Node.js', 'Express.js', 'PHP', 'Laravel']
    },
    {
      title: 'Database Management',
      icon: <Database className="text-primary dark:text-accent" size={24} />,
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="text-primary dark:text-accent" size={24} />,
      skills: ['REST APIs', 'Git & GitHub', 'Responsive Web Design', 'Authentication (JWT)', 'CRUD Applications']
    }
  ];

  return (
    <Section id="skills" title="My Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-slate-600 dark:text-slate-300">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
