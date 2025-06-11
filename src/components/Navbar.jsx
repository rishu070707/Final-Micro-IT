import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Tutorials from './Tutorials';
import Projects from './Projects';
import Internship from './Internship';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import image from '../assets/logo.jpg';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  // Toggle dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    // Note: It's better to move <Router> to wrap your entire App, e.g., in index.js or App.js
    <Router>
      <header className="bg-white dark:bg-zinc shadow-sm sticky top-0 z-30 transition-colors duration-300">
        <nav className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 overflow-hidden rounded-lg">
                <img src={image} alt="MITS Logo" className="w-full h-full object-cover" loading="eager" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800 dark:text-white">Micro</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Information Technology Services
                </p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-9">
              {[
                { to: '/', label: 'Home' },
                { to: '/tutorials', label: 'Tutorials' },
                { to: '/projects', label: 'Projects' },
                { to: '/internship', label: 'Internship' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-gray-700 dark:text-white hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Search */}
            <div className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <i className={`fas fa-moon text-gray-600 ${isDark ? 'hidden' : 'block'}`}></i>
              <i className={`fas fa-sun text-yellow-500 ${isDark ? 'block' : 'hidden'}`}></i>
            </button>

            {/* Mobile Hamburger */}
            <button className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default Navbar;