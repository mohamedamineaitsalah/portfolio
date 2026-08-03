import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-5 gap-10">
        
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Let's talk about your next project.</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Feel free to reach out for collaborations, freelance work, or just to say hi. I am always open to discussing new projects and creative ideas.
          </p>
          
          <div className="space-y-4">
            <a href="mailto:moahmedamineaitsalah02@gmail.com" className="flex items-center p-4 glass-card group hover:border-primary dark:hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Mail className="text-primary dark:text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Email Me</p>
                <p className="font-semibold text-slate-900 dark:text-white">moahmedamineaitsalah02@gmail.com</p>
              </div>
            </a>
            
            <a href="https://wa.me/212697936897" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 glass-card group hover:border-primary dark:hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Phone className="text-primary dark:text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">WhatsApp</p>
                <p className="font-semibold text-slate-900 dark:text-white">+212 697936897</p>
              </div>
            </a>
            
            <div className="flex items-center p-4 glass-card">
              <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <MapPin className="text-primary dark:text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                <p className="font-semibold text-slate-900 dark:text-white">Casablanca, Morocco</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <form className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-slate-800 dark:border-slate-700 dark:focus:border-accent dark:focus:ring-accent/20 outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-slate-800 dark:border-slate-700 dark:focus:border-accent dark:focus:ring-accent/20 outline-none transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-slate-800 dark:border-slate-700 dark:focus:border-accent dark:focus:ring-accent/20 outline-none transition-all dark:text-white"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-slate-800 dark:border-slate-700 dark:focus:border-accent dark:focus:ring-accent/20 outline-none transition-all dark:text-white resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full flex items-center justify-center">
              Send Message <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>
        
      </div>
    </Section>
  );
};

export default Contact;
