import { motion } from 'framer-motion';

export default function Skills() {

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Core Concepts',
      skills: [
        { name: 'Data Structures & Algorithms', level: 75 },
        { name: 'OOPS', level: 85 },
        { name: 'DBMS', level: 82 },
        { name: 'System Design', level: 70 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Next.js', level: 75 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'Postman', level: 80 },
        { name: 'MySQL', level: 78 },
        { name: 'MongoDB Compass', level: 80 }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem-solving', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Collaboration', level: 88 },
        { name: 'Creative Thinking', level: 82 }
      ]
    }
  ];

  return (
    <motion.section 
      className="min-h-screen py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-purple-500/5 to-blue-500/5" />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400/20"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Proficiency 🧠
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3 
                className="text-xl font-bold mb-6 text-white border-b border-cyan-500/30 pb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 + skillIndex * 0.1 + 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}