import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-semibold uppercase">About Us</span>
          <h1 className="text-5xl font-bold text-gray-800 mt-4 mb-6">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of tech innovators through quality education and hands-on experience.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-4">
              At Micro Information Technology Services (MITS), we believe in the power of practical learning and hands-on experience. Founded in 2020, our mission is to bridge the gap between traditional education and industry requirements by providing comprehensive, project-based learning experiences.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our team consists of industry experts, experienced developers, and passionate educators who are committed to helping students and professionals master the latest technologies and best practices in software development.
            </p>
            <p className="text-lg text-gray-600 font-semibold">We specialize in:</p>
            <ul className="text-gray-700 mt-2 space-y-2">
              <li>✅ Hands-on Project-Based Learning</li>
              <li>✅ Industry-Relevant Curriculum</li>
              <li>✅ One-on-One Mentorship</li>
              <li>✅ Real-World Project Experience</li>
            </ul>

            <div className="mt-6 flex gap-4">
              <button className="bg-blue hover:bg-blue text-white px-6 py-3 rounded-md transition">
                Join Our Community
              </button>
              <button className="border border-blue text-blue px-6 py-3 rounded-md hover:bg-black transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue">5000+</div>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-600">200+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <p className="text-gray-600">Expert Mentors</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-orange-600">95%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
            <p className="text-gray-600 mt-2">The passionate people behind our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue to-purple-600"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                <p className="text-gray-600">Founder & Lead Instructor</p>
                <div className="flex justify-center gap-4 mt-4 text-lg">
                  <a href="#" className="text-gray-800 hover:text-blue"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-800 hover:text-blue"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-800 hover:text-blue"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            {/* Team Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                <p className="text-gray-600">Senior Developer & Mentor</p>
                <div className="flex justify-center gap-4 mt-4 text-lg">
                  <a href="#" className="text-gray-800 hover:text-blue"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-800 hover:text-blue"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-800 hover:text-blue"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            {/* Team Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-red-500"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
                <p className="text-gray-600">Technical Lead & Instructor</p>
                <div className="flex justify-center gap-4 mt-4 text-lg">
                  <a href="#" className="text-gray-800 hover:text-blue"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-800 hover:text-blue"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-800 hover:text-blue"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
