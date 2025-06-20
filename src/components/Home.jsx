import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero'
import Highlights from './Highlights'
import High from './High'
import UniversityLogos from './UniversityLogos';
import FloatingButton from './FloatingButton';
import Stats from './Stats'
const Home = () => {
  return (
    <>
    <Hero />
      <div className="bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 text-center py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Everyone have rights to contribute
          </h1>
          <p className="text-lg md:text-xl text-blue max-w-3xl mx-auto mb-8  font-extrabold">
            Join thousands of students in mastering programming, web development, and cutting-edge technologies with our comprehensive courses and hands-on projects.
          </p>
          <div className="flex justify-center space-x-6 pt-16">
  <Link
    to="/tutorials"
    className="group relative px-12 py-4 text-lg font-light tracking-[0.2em] text-white border border-white/30 rounded-full overflow-hidden transition-all duration-700 ease-in-out bg-black drop-shadow-xl"
  >
    <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black  ">
      ▶ START LEARNING
    </span>
    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-center"></div>
  </Link>

  <Link
    to="/projects"
    className="group relative px-12 py-4 text-lg font-light tracking-[0.2em] text-white border border-white/30 rounded-full overflow-hidden transition-all duration-700 ease-in-out bg-black shadow-xl"
  >
    <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black drop-shadow-2xl">
      &lt;/&gt; BROWSE PROJECTS
    </span>
    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-center"></div>
  </Link>
</div>


        </div>
      </div>

      <Highlights />
      <High/>
  
    
    
      <div className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Featured Courses
        </h2>
        <div className="slider overflow-x-auto">
          <div className="flex space-x-6 pb-4">
            
          <div className="min-w-80 bg-white rounded-xl shadow-lg p-6 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
  

  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
    <img 
      src="https://www.infoworld.com/wp-content/uploads/2024/06/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-orig.jpg?resize=1536%2C1024&quality=50&strip=all" 
      alt="A laptop screen displaying lines of Java code" 
      className="w-full h-full object-cover"
    />
  </div>
  

  <h3 className="text-xl font-semibold mb-2 text-black">
    Complete Java Bootcamp
  </h3>
  <p className="text-black mb-4">
    Master Java from basics to advanced concepts
  </p>
  <div className="flex justify-between items-center">
    <span className="text-blue font-semibold text-xs">4.8 ⭐ (2.1k students)</span>
      <a
                      href="/Play"
                      className="w-full bg-blue text-white py-3 rounded-lg font-semibold hover:bg-blue transition-colors inline-block text-center"
                    >
                      Start Tutorial
                    </a>
  </div>
</div>
            
            <div className="min-w-80 bg-white rounded-xl shadow-lg p-6 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
              
  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
    <img 
      src="data:image/png;base64,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" 
      alt="A laptop screen displaying lines of Java code" 
      className="w-full h-full object-cover"
    />
  </div>
              <h3 className="text-xl text-black font-semibold mb-2">Python for Beginners</h3>
              <p className="text-black mb-4">
                Start your programming journey with Python's simple syntax.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue font-semibold text-xs">4.9 ⭐ (3.2k students)</span>
                 <a
                      href="/Play"
                      className="w-full bg-blue text-white py-3 rounded-lg font-semibold hover:bg-blue transition-colors inline-block text-center"
                    >
                      Start Tutorial
                    </a>
              </div>
            </div>

           
             <div className="min-w-80 bg-white rounded-xl shadow-lg p-6 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqimf1qXmdxgRmKAyOE-vwx-5l6_TTvRclw&s" 
      alt="A laptop screen displaying lines of React code" 
      className="w-full h-full object-cover"
    />
  </div>
              <h3 className="text-xl text-black font-semibold mb-2">React Development</h3>
              <p className="text-black mb-4">
                Build modern web applications with React and its ecosystem.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue font-semibold text-xs">4.7 ⭐ (1.8k students)</span>
                
                  <a
                      href="/Play"
                      className="w-full bg-blue text-white py-3 rounded-lg font-semibold hover:bg-blue transition-colors inline-block text-center"
                    >
                      Start Tutorial
                    </a>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      
      <UniversityLogos/>
            <div className="bg-white text-center py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-blue leading-relaxed">
            At MITS, we believe in empowering students with practical, industry-relevant skills that prepare them for successful careers in technology. 
            Our comprehensive programs combine theoretical knowledge with hands-on experience, mentorship, and real-world projects to bridge the gap between education and industry demands.
          </p>
        </div>
      </div>
<div className="bg-gradient-to-br from-pink-100 via-pink-50 to-purple-10 ">
  <Stats/>
      <FloatingButton/>
      </div>
      
    </>
  );
};

export default Home;