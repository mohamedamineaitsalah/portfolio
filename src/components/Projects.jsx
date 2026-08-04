import React from 'react';
import Section from './Section';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'MOHAMED AM - Project 1',
      description: 'A professional website to showcase projects, skills, and resume to potential clients and recruiters.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://mohamedamineaitsalah.github.io/MOHAMED_AM/',
      githubLink: 'https://github.com/mohamedamineaitsalah/MOHAMED_AM'
    },
    {
      title: 'Personal Portfolio Prototype',
      description: 'An early version of a professional website to showcase projects, skills, and resume to potential clients and recruiters.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://mohamedamineaitsalah.github.io/mohamedam_SITEWEB/',
      githubLink: 'https://github.com/mohamedamineaitsalah/mohamedam_SITEWEB'
    },
    {
      title: 'Laarif Plaster & Gypsum',
      description: 'A modern, responsive website for a Moroccan plaster and gypsum services company, featuring an interactive gallery, service details, and a dark mode toggle.',
      image: '/laarif-plaster.png',
      technologies: ['React', 'Vite', 'Bootstrap'],
      liveLink: 'https://mohamedamineaitsalah.github.io/plaster-gypsm/',
      githubLink: 'https://github.com/mohamedamineaitsalah/plaster-gypsm'
    }
  ];

  return (
    <Section id="projects" title="Featured Projects" className="bg-slate-50 dark:bg-slate-950">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-primary dark:text-accent text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                {project.liveLink !== '#' && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm font-bold text-primary dark:text-accent hover:underline"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                )}
                {project.githubLink !== '#' && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-colors"
                  >
                    <FaGithub size={16} className="mr-1" /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
