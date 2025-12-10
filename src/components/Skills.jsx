export default function Skills() {

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL']
    },
    {
      title: 'Core Concepts',
      skills: ['Data Structures & Algorithms', 'OOPS', 'DBMS', 'System Design']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Canva', 'Git', 'Visual Studio', 'Figma', 'MySQL', 'Postman', 'MongoDB Compass']
    },
    {
      title: 'Soft Skills',
      skills: ['Collaboration', 'Problem-solving', 'Creative Thinking', 'Communication']
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 relative overflow-hidden bg-blue-100">
      {/* decorative navy spots (behind content) */}
      <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full bg-[#00285e] opacity-20 blur-md -z-10"></div>
      <div className="absolute top-24 right-8 w-48 h-48 rounded-full bg-[#00285e] opacity-15 blur-xl -z-10"></div>
      <div className="absolute -bottom-8 left-20 w-28 h-28 rounded-full bg-[#00285e] opacity-18 blur-lg -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-[#00285e] opacity-10 blur-2xl -z-10"></div>
      <div className="absolute bottom-12 right-1/3 w-40 h-40 rounded-full bg-[#00285e] opacity-12 blur-xl -z-10"></div>
      <div className="absolute top-32 left-1/2 w-44 h-44 rounded-full bg-[#00285e] opacity-14 blur-2xl -z-10"></div>
      <div className="absolute bottom-24 left-12 w-36 h-36 rounded-full bg-[#00285e] opacity-16 blur-xl -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-52 h-52 rounded-full bg-[#00285e] opacity-11 blur-2xl -z-10"></div>
      <div className="absolute bottom-1/4 right-12 w-38 h-38 rounded-full bg-[#00285e] opacity-13 blur-lg -z-10"></div>
      <div className="absolute top-16 left-1/3 w-30 h-30 rounded-full bg-[#00285e] opacity-17 blur-md -z-10"></div>

      <h2 className="text-3xl font-bold mb-8">Technical Proficiency🧠 :</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-3">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}