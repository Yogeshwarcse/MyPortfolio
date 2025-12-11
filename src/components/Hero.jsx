import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/1000054663.jpg';
import BackgroundHero from '../assets/images/background-Hero.jpg';

export default function Hero() {
  return (
    <section 
      className="py-20 transition-colors relative"
      style={{
        backgroundImage: `url(${BackgroundHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left relative z-10">
          <h4 className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-black">
            Hello 👋, I'm <span style={{ color: '#ffd23eff', padding: '0 6px', borderRadius: '6px', display: 'inline-block' }}>Yogeshwar R 🦸‍♂️</span>
          </h4>
          <p className="text-lg text-black dark:text-black-300 mb-6 leading-relaxed">
            I’m Yogeshwar, a dedicated and ambitious Full-Stack Web Developer who loves building meaningful digital experiences that are intuitive, reliable, and scalable. My journey in technology began with a curiosity to understand how things work behind the screen, and over time, that curiosity transformed into a deep passion for designing and developing end-to-end web applications that create real impact.
          </p>
          <p className="text-lg text-black dark:text-black-300 mb-6 leading-relaxed hidden md:block">
            I specialize in working with the MERN and Next.js tech stacks, with hands-on experience in JavaScript, Java, SQL, and modern web frameworks like React, Next.js, Node.js, and Express. My academic foundation in computer science, combined with strong fundamentals in Data Structures and Algorithms, OOP, DBMS, and System Design, allows me to approach problems with both creativity and logic.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">
              See Projects
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={HeroImage}
              alt="Yogeshwar R"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover transform transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
