
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Java", "Python", "C++", "JavaScript", "HTML/CSS"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Globe,
      title: "Frameworks",
      skills: ["MERN Stack", "Bootstrap", "React", "Express.js", "Truffle"],
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Database,
      title: "Developer Tools",
      skills: ["Git", "Docker", "Azure", "VS Code", "Visual Studio"],
      color: "from-purple-400 to-violet-400"
    },
    {
      icon: Cloud,
      title: "Others",
      skills: ["Data Structure", "Algorithms", "Operating Systems", "Object-Oriented Programming", "Computer Networks"],
      color: "from-orange-400 to-red-400"
    }
  ];

  const certifications = [
    "Microsoft Certified: Azure Fundamentals",
    "BCA specialized in Artificial Intelligence (AI) - Nov 2021 - June 2025"
  ];

  const achievements = [
    "Received the Rajya Puraskar in 2020",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 15 },
    visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-colors duration-300"
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <category.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.08 }}
                    whileHover={{ x: 6, backgroundColor: "rgba(51, 65, 85, 0.5)" }}
                    className="text-sm text-slate-400 bg-slate-700/30 px-3 py-1 rounded-md transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <motion.div
                className="w-2 h-2 bg-yellow-400 rounded-full mr-3"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="text-slate-400 text-sm leading-relaxed">
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full mr-3"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="text-slate-400 text-sm leading-relaxed">
                  {achievement}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
