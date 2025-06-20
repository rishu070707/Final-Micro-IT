import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Tutorials from './Tutorials';
import Projects from './Projects';
import Internship from './Internship';
import Play from './Play';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import image from '../assets/logo.jpg';


const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu visibility


  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
  
    <Router>
     <header className="bg-white dark:bg-zinc shadow-sm sticky top-0 z-30 transition-colors duration-300">

        <nav className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
          
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

            {/* Mobile menu (conditionally rendered) */}
           {/* This block should be outside the flex items-center justify-between to allow it to stack */}
           {/* It also needs to be positioned correctly if you want it to overlay content */}
          
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

          
        

            
            <button
              onClick={() => setIsDark(!isDark)}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <i className={`fas fa-moon text-gray-600 ${isDark ? 'hidden' : 'block'}`}></i>
              <i className={`fas fa-sun text-yellow-500 ${isDark ? 'block' : 'hidden'}`}></i>
            </button>

            {/* Mobile menu toggle button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Added onClick handler
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>

          {/* Mobile menu links - positioned outside the initial flex container for better stacking */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 bg-white dark:bg-zinc-800 rounded-md shadow-lg py-2"> {/* Added background and padding for visibility */}
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 dark:text-white hover:text-blue-600 transition-colors text-base font-medium px-4 py-2" // Adjusted font size for mobile
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/Play" element={<Play />} />
        </Routes>
      </main>

      
      <Footer />
    </Router>
  );
};

export default Navbar;