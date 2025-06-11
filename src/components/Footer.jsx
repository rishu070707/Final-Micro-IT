import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/tutorials" className="hover:text-blue-400 transition-colors">Tutorials</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest tutorials and news</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-800" />
              <button className="bg-blue px-4 py-2 rounded-r-lg hover:bg-blue transition-colors">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-blue transition-colors text-2xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue transition-colors text-2xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue transition-colors text-2xl"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-blue transition-colors text-2xl"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 MITS. All rights reserved.</p>
              <p className="mt-2">
                <a href="#" className="hover:text-blue transition-colors">Privacy Policy</a> |
                <a href="#" className="hover:text-blue transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;