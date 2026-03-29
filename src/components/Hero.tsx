
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, Phone, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "console.log('Hello, I'm Abhal Benny');";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { href: "https://github.com/Achuabhal", icon: Github, color: "hover:border-blue-500/50", textColor: "hover:text-blue-400" },
    { href: "mailto:abhalbenny3@gmail.com", icon: Mail, color: "hover:border-green-500/50", textColor: "hover:text-green-400" },
    { href: "tel:+919961845429", icon: Phone, color: "hover:border-purple-500/50", textColor: "hover:text-purple-400" },
    { href: "https://drive.google.com/file/d/1sSSF7frSie7IKcyx4cTHY6Ex4kZIiM-4/view?usp=sharing", icon: Download, color: "hover:border-purple-500/50", textColor: "hover:text-purple-400", external: true },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 mb-8 font-mono text-left">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-slate-400 text-sm">terminal.js</span>
            </div>
            <div className="text-green-400 text-lg">
              {text}<span className="animate-pulse">|</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent"
        >
          ABHAL BENNY
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-300 mb-6 font-light"
        >
          <span className="text-teal-400">Software Engineer</span> &
          <span className="text-blue-400"> Full-Stack Developer</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate web developer who loves innovation and exploring new technologies.
          Creating products that people around the world can use and enjoy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-700/50 transition-all duration-300 hover:scale-110 ${link.color}`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
            >
              <link.icon className={`w-6 h-6 text-slate-300 ${link.textColor}`} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
