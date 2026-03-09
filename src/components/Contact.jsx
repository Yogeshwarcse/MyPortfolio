import { motion } from 'framer-motion';

export default function Contact() {
  const contactMethods = [
    {
      title: 'LinkedIn',
      description: 'Connect with me professionally. I share updates about my latest projects and career milestones.',
      username: 'YOGESHWAR R',
      link: 'https://www.linkedin.com/in/yogeshwar-r-07b11632b/',
      action: 'Connect on LinkedIn →'
    },
    {
      title: 'GitHub',
      description: 'Check out my repositories, open-source contributions, and coding experiments.',
      username: 'Yogeshwarcse',
      link: 'https://github.com/Yogeshwarcse',
      action: 'View GitHub Profile →'
    },
    {
      title: 'Email',
      description: 'Feel free to reach out for interesting collaborations or freelance opportunities.',
      username: 'yogeshwar2303@gmail.com',
      link: 'mailto:yogeshwar2303@gmail.com',
      action: 'Send Email →'
    },
    {
      title: 'Instagram',
      description: 'Follow my personal journey and behind-the-scenes of my developer life.',
      username: '_.hyper.xz._',
      link: 'https://www.instagram.com/_.hyper.xz._/?next=%2F',
      action: 'Follow on Instagram →'
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
          className="absolute w-2 h-2 rounded-full bg-purple-400/20"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }}
          animate={{
            y: [0, -70, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
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
          Get In Touch ☎
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-cyan-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-2 text-white">{method.title}</h3>
              <p className="text-gray-300 mb-4">{method.description}</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-sm font-medium bg-cyan-400/15 border border-cyan-400/30 text-cyan-200 rounded-lg">
                  @{method.username}
                </span>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-medium rounded-lg hover:from-purple-300 hover:to-cyan-300 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50"
                >
                  {method.action}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}