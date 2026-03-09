import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article 
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h4 
        className="font-bold text-xl text-white mb-3 group-hover:text-cyan-300 transition-colors"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {project.title}
      </motion.h4>
      
      <motion.p 
        className="text-sm text-gray-300 mb-4 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.1 }}
      >
        {project.description}
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {project.tech?.map((tech, i) => (
          <span 
            key={i}
            className="px-2 py-1 text-xs font-medium rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-200"
          >
            {tech}
          </span>
        ))}
      </motion.div>
      
      <motion.div 
        className="flex justify-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-medium rounded-lg hover:from-purple-300 hover:to-cyan-300 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50"
        >
          Visit Project
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </a>
      </motion.div>
    </motion.article>
  )
}
