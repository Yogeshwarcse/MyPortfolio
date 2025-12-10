import Image2 from '../assets/images/image2.jpg';

export default function About(){
  return (
    <section
      className="py-16 px-4 transition-colors"
      style={{ backgroundColor: 'rgba(0,77,152,0.08)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Me😊 :</h2> 

          <p className="text-black leading-relaxed mb-4">
            I'm a full-stack web developer passionate about crafting intuitive, reliable, and scalable digital products. My technical foundation includes JavaScript, Java, SQL, and modern frameworks such as React, Next.js, Node.js, and Express, supported by strong knowledge in DSA, OOP, DBMS, and system design fundamentals.
          </p>

          <p className="text-black leading-relaxed mb-4">
            I'm driven by continuous learning and hands-on building. Whether it's developing REST APIs, designing modular architectures, integrating databases, or deploying full-stack apps, I enjoy translating concepts into high-impact solutions. My project experience and internships have strengthened my ability to work in teams, communicate effectively, and manage the complete development lifecycle.
          </p>

          <p className="text-black leading-relaxed">
            Outside of tech, I'm deeply passionate about football. I've been a huge Messi fan since the age of 13, and playing football regularly helps me stay energized, focused, and creatively inspired.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <img
              src={Image2}
              alt="About image"
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover transform transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
