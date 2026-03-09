import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroImage from '@/assets/images/1000054663.jpg';

const roles = ["Full Stack Developer", "MERN Developer", "React Enthusiast", "Node.js Expert"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
        if (displayText === role) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={controls}
        style={{
          background: 'linear-gradient(-45deg, #020617, #0f172a, #1e293b, #334155)',
          backgroundSize: '400% 400%',
        }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10" />

      {/* Enhanced Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10 py-20">

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 mb-6 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-cyan-200">Available for freelance work ✨</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Hello 👋, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Yogeshwar R
            </span>
            <span className="inline-block ml-2">🦸‍♂️</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-semibold mb-4 h-12 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-gray-300">I'm a </span>
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent ml-2">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-300 mb-6 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A dedicated Full-Stack Web Developer who loves building meaningful digital experiences 
            that are intuitive, reliable, and scalable. My curiosity transformed into a deep passion 
            for designing end-to-end web applications that create real impact.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I specialize in the MERN and Next.js tech stacks, with hands-on experience in JavaScript, 
            Java, SQL, and modern web frameworks. Strong fundamentals in DSA, OOP, DBMS, and System Design.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript"].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/8 border border-cyan-400/30 text-cyan-200 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.1, borderColor: '#06b6d4' }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link to="/projects">
              <motion.span
                className="inline-block px-7 py-3.5 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px -10px rgba(6, 182, 212, 0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                See Projects →
              </motion.span>
            </Link>
            <Link to="/contact">
              <motion.span
                className="inline-block px-7 py-3.5 bg-white/8 text-white font-semibold rounded-lg border border-white/15 cursor-pointer backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 opacity-15 blur-2xl"></div>
            
            {/* Rotating border */}
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-[#020617]"></div>
            </motion.div>

            <div className="relative">
              <img
                src={HeroImage}
                alt="Yogeshwar R"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-500/30 shadow-2xl object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 px-4 py-2 bg-black/40 border border-cyan-400/30 rounded-xl shadow-lg backdrop-blur-sm"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-sm font-semibold text-cyan-200">FullStack Developer</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
