import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-[#020617] text-white selection:bg-cyan-500 selection:text-black">
      {/* Main content */}
      <div className={`relative z-10 transition-opacity duration-1000 flex flex-col min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />

        <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              {/* <Route path="/blogs" element={<BlogPage />} /> */}
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}