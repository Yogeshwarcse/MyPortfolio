import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 px-6 py-3 flex items-center justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.005]">

        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
          Yogeshwar Portfolio !!
        </Link>

        

        <div className="flex items-center gap-3 ml-auto">
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-4 py-2 text-gray-700 dark:text-gray-200 font-medium group overflow-hidden rounded-full hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-gray-100 dark:bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-0 ease-out"></span>
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden transition-all duration-300 origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}>
        <div className="p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-all font-medium"
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
