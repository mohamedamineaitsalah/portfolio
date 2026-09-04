import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import photo from '../assets/photo.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent font-semibold mb-2 tracking-wide uppercase">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Mohamed Amine <br/>
              <span className="text-primary dark:text-primary-light">Ait Salah</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Professional Web Development graduate and MERN Stack Developer, passionate about building modern, responsive, and high-performance web applications.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
          >
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary flex items-center w-full sm:w-auto justify-center">
                Let's Talk <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </Link>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={`${import.meta.env.BASE_URL}cv.pdf`} download="Mohamed_Amine_Ait_Salah_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center w-full sm:w-auto justify-center">
              Download CV <Download size={18} className="ml-2" />
            </motion.a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center md:justify-start space-x-5"
          >
            <motion.a whileHover={{ y: -5 }} href="https://github.com/mohamedamineaitsalah" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors">
              <FaGithub size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/mohamed-amine-ait-salah-b6574338b" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors">
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="mailto:mohamedamineaitsalah02@gmail.com" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent transition-colors">
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 border-4 border-white/50 dark:border-white/10 rounded-full z-20"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative z-10 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
              <img src={photo} alt="Mohamed Amine Ait Salah" className="w-full h-full object-cover absolute inset-0" />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-lg font-bold text-primary dark:text-white shadow-lg z-30"
            >
              MERN Stack
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-8 glass px-4 py-2 rounded-lg font-bold text-accent dark:text-white shadow-lg z-30 flex items-center"
            >
              <span className="text-xl mr-1">⭐</span> Full Stack
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
