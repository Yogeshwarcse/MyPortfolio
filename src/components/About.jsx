import { motion } from 'framer-motion';
import Image2 from '../assets/images/image2.jpg';

export default function About(){
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
          className="absolute w-1 h-1 rounded-full bg-cyan-400/20"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">

            <motion.div 
              className="md:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                About Me 😊
              </motion.h2> 

              <motion.p 
                className="text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I'm a full-stack web developer passionate about crafting intuitive, reliable, and scalable digital products. My technical foundation includes JavaScript, Java, SQL, and modern frameworks such as React, Next.js, Node.js, and Express, supported by strong knowledge in DSA, OOP, DBMS, and system design fundamentals.
              </motion.p>

              <motion.p 
                className="text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                I'm driven by continuous learning and hands-on building. Whether it's developing REST APIs, designing modular architectures, integrating databases, or deploying full-stack apps, I enjoy translating concepts into high-impact solutions. My project experience and internships have strengthened my ability to work in teams, communicate effectively, and manage the complete development lifecycle.
              </motion.p>

              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Outside of tech, I'm deeply passionate about football. I've been a huge Messi fan since the age of 13, and playing football regularly helps me stay energized, focused, and creatively inspired.
              </motion.p>
            </motion.div>

            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-15 group-hover:opacity-25 transition duration-700"></div>
                <motion.img
                  src={Image2}
                  alt="About image"
                  className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-cyan-500/30 shadow-2xl object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
