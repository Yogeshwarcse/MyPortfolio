import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="bg-black/20 backdrop-blur-lg rounded-full shadow-2xl border border-white/10 px-6 py-3 flex items-center justify-between transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/30">

        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-cyan-300 transition-all duration-300">
          Yogeshwar Portfolio
        </Link>

        

        <div className="flex items-center gap-3 ml-auto">
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 font-medium group overflow-hidden rounded-full transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {location.pathname !== link.path && (
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 to-purple-400/15 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full mt-2 bg-black/30 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-300 origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}>
        <div className="p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-3 rounded-xl text-gray-300 transition-all font-medium hover:text-white ${
                location.pathname === link.path
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white'
                  : 'hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
