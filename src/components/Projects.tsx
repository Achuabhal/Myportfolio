
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Timetable Scheduling Web App for College",
      tech: ["React", "Firebase"],
      description: "Developed an intelligent algorithm that randomly assigns teachers to time slots without conflicts, streamlining college timetable management and increasing scheduling efficiency by 40%.",
      features: ["Intelligent scheduling algorithm", "Conflict-free time slot assignment", "Real-time updates", "40% efficiency improvement"],
      githubUrl: "https://github.com/Achuabhal/it-fest-pic.git",
      liveUrl: "https://chipper-dusk-8b959c.netlify.app/"
    },
    {
      title: "React-Based Quiz App for College Tech Fest",
      tech: ["React", "Framer Motion", "Particles.js", "Material-UI"],
      description: "Created an interactive quiz app with dynamic sounds and a countdown timer with engaging animations and user-friendly interface.",
      features: ["Real-time messaging", "Dynamic animations with Framer Motion", "Interactive particle effects", "Material-UI components"],
      githubUrl: "https://github.com/Achuabhal/it-fest-pic.git",
      liveUrl: "https://caias-itfeat-5th-rounds.netlify.app/"
    },
    {
      title: "E-commerce Application with Blockchain",
      tech: ["React", "Express.js", "Node.js", "MongoDB", "Truffle", "Solidity", "Ganache"],
      description: "Built a secure e-commerce platform with blockchain integration for transparent and secure transactions using smart contracts.",
      features: ["Blockchain-powered transactions", "Smart contract integration", "Secure payment processing", "Full-stack implementation"],
      githubUrl: "https://github.com/Achuabhal/ecoemrseblockchain.git",
      liveUrl: "https://github.com/Achuabhal/ecoemrseblockchain.git"
    },
    {
      title: "Gym Management Website",
      tech: ["React", "Framer Motion", "Google Calendar", "MongoDB"],
      description: "Developed a gym management web app with chatbot and time slot booking functionality for streamlined gym operations.",
      features: ["Integrated chatbot assistance", "Google Calendar integration", "Time slot booking system", "Member management"],
      githubUrl: "https://github.com/itcodehery/appwrite-project.git",
      liveUrl: "https://github.com/itcodehery/appwrite-project.git"
    },
    {
      title: "Voice-to-Text Transcription Web App",
      tech: ["React", "Vite", "AssemblyAI", "Google Generative AI", "Web Speech API", "Axios"],
      description: "Built a modern web app that converts speech to text using uploaded audio or live voice, integrating AssemblyAI and Google Gemini for accurate transcription and enhanced processing.",
      features: ["Audio file upload and transcription", "Live voice-to-text using browser's Speech API", "AI-enhanced transcript processing with Google Gemini", "Markdown rendering for formatted text output", "Responsive UI with smooth UX"],
      githubUrl: "https://github.com/Achuabhal/voice.git",
      liveUrl: "https://lucent-melomakarona-1c14a8.netlify.app/"
    },
    {
      title: "Emotion-Based Music Recommendation System",
      tech: ["React", "JavaScript", "face-api.js", "Tiny Face Detector Model"],
      description: "Created an AI-powered web app that detects user emotions through facial expressions and recommends music playlists accordingly.",
      features: ["Real-time facial emotion detection using webcam", "Emotion classification (e.g., happy, sad, angry, surprised)", "Dynamic music recommendations based on detected mood", "Interactive UI for better user engagement"],
      githubUrl: "https://github.com/Achuabhal/edison.git",
      liveUrl: "https://idyllic-sorbet-500bd8.netlify.app/"
    },
    {
      title: "Interactive Digital Flipbook",
      tech: ["React", "JavaScript", "CSS3", "HTML5"],
      description: "Developed a responsive and feature-rich digital flipbook as a freelancing project to offer an engaging and intuitive document viewing experience.",
      features: ["Realistic page-turning animations with synchronized audio", "Dynamic user controls including zoom, fullscreen mode, and page navigation", "Fully responsive layout compatible with all devices", "Smooth performance and accessible design"],
      githubUrl: "https://github.com/Achuabhal/JACOBITE-SYRIAN-ORTHODOX-CHURCH.git",
      liveUrl: "https://jacobite-syrian-orthodox-church.vercel.app/"
    },
    {
      title: "Real-Time Social Messaging App",
      tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      description: "Built a full-stack social messaging application that enables real-time chat with features like friend requests, group messaging, and admin moderation.",
      features: ["User authentication using JWT for secure login and signup", "Send, accept, and reject friend requests", "One-to-one and group chat with real-time messaging", "Admin panel to manage users, monitor content, and handle reports"],
      githubUrl: "https://github.com/Achuabhal/ECSFINAL-main.git",
      liveUrl: "https://github.com/Achuabhal/ECSFINAL-main.git"
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-colors duration-300 hover:border-purple-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 text-slate-400 hover:text-white" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white" />
                    </motion.a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium border border-slate-600/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-500">
                      <motion.div
                        className="w-1 h-1 bg-purple-400 rounded-full mr-2"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
