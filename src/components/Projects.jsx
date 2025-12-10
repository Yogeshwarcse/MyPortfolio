import ProjectCard from './ProjectCard';
export default function Projects({ projects = [] }) {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-16 px-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(30px, -30px) scale(1.1); } }
        @keyframes float2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-40px, 40px) scale(1.15); } }
        @keyframes float3 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(50px, 30px) scale(1.05); } }
        @keyframes float4 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-30px, -40px) scale(1.2); } }
        @keyframes float5 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(35px, 45px) scale(1.1); } }
        @keyframes float6 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-45px, -25px) scale(1.08); } }
        @keyframes pulse { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.25; } }
        .float1 { animation: float1 8s ease-in-out infinite; }
        .float2 { animation: float2 10s ease-in-out infinite; }
        .float3 { animation: float3 12s ease-in-out infinite; }
        .float4 { animation: float4 9s ease-in-out infinite; }
        .float5 { animation: float5 11s ease-in-out infinite; }
        .float6 { animation: float6 7s ease-in-out infinite; }
        .pulse-anim { animation: pulse 4s ease-in-out infinite; }
      `}} />

      {/* Animated decorative spots */}
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#00285e] opacity-20 blur-2xl float1" style={{ zIndex: 0 }}></div>
      <div className="absolute top-32 right-16 w-56 h-56 rounded-full bg-[#00285e] opacity-15 blur-3xl float2" style={{ zIndex: 0 }}></div>
      <div className="absolute bottom-24 left-24 w-40 h-40 rounded-full bg-[#00285e] opacity-18 blur-xl float3" style={{ zIndex: 0 }}></div>
      <div className="absolute top-1/3 left-1/3 w-44 h-44 rounded-full bg-[#00285e] opacity-12 blur-2xl float4" style={{ zIndex: 0 }}></div>
      <div className="absolute bottom-16 right-1/4 w-52 h-52 rounded-full bg-[#00285e] opacity-14 blur-3xl float5" style={{ zIndex: 0 }}></div>
      <div className="absolute top-2/3 right-12 w-36 h-36 rounded-full bg-[#00285e] opacity-16 blur-xl float6" style={{ zIndex: 0 }}></div>

      {/* Additional pulsing spots */}
      <div className="absolute top-20 left-1/2 w-32 h-32 rounded-full bg-[#00285e] opacity-10 blur-2xl pulse-anim" style={{ zIndex: 0 }}></div>
      <div className="absolute bottom-32 left-16 w-28 h-28 rounded-full bg-[#00285e] opacity-13 blur-lg pulse-anim" style={{ zIndex: 0, animationDelay: '2s' }}></div>

      <h2 className="text-3xl font-bold mb-8 relative z-10">Projects💻 :</h2>
      <div className="flex flex-col gap-8 relative z-10">
        {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
      </div>
    </section>
  )
}
