import { motion } from 'framer-motion';

export default function Footer(){
  return (
    <motion.footer 
      className="mt-16 py-8 backdrop-blur-xl bg-black/20 border-t border-white/10 text-center text-sm text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-4">© {new Date().getFullYear()} Yogeshwar. Built with ❤️ using MERN Stack</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Yogeshwarcse" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yogeshwar-r-07b11632b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:yogeshwar2303@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
