
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "JavaScript Developer",
      company: "Pokak Technologies Pvt Ltd",
      location: "Remote",
      period: "Nov 2025 - Present",
      description: "Leading the frontend migration and feature development for a large-scale ERP application using React.js, directly impacting daily enterprise workflows.",
      highlights: [
        "Engineering WebSocket modules to enable real-time data synchronization, reducing server load from polling and ensuring sub-second updates for users",
        "Diagnosed and resolved 20+ critical bugs related to complex state management and rendering cycles, resulting in a 30% reduction in reported crash rates",
        "Refactoring legacy codebases into modular, reusable components, significantly decreasing technical debt and accelerating sprint delivery times"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Datzon Eloqix Technologies",
      location: "Remote/Hybrid",
      period: "Feb 2025 - Oct 2025",
      description: "Architecting scalable data flows for enterprise-level applications, utilizing Next.js for optimized server-side rendering.",
      highlights: [
        "Integrated Zustand for global state management, reducing boilerplate code by 40% compared to Redux and improving runtime performance",
        "Establishing strict design patterns and code quality standards, ensuring long-term maintainability for a growing team of developers"
      ]
    },
    {
      title: "Front-End Development Intern",
      company: "Duzo Kriton Pvt Ltd",
      location: "Remote",
      period: "Nov 2024 - Jan 2025",
      description: "Translated high-fidelity Figma designs into pixel-perfect, responsive TypeScript/React interfaces ensuring 100% cross-browser compatibility.",
      highlights: [
        "Optimized Critical Rendering Path (CRP) metrics, improving First Contentful Paint (FCP) scores across mobile and desktop devices"
      ]
    }
  ];

  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:border-blue-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-2">
                    <div className="flex items-center text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-slate-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400 text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
