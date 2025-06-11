import React from 'react';

const Internship = () => {
  return (
    <section id="internship" className="page-section bg-gray-50 py-16">
      <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">Internship Program</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">Explore Internship Opportunities</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Gain hands-on experience, grow with mentors, and build your career with MITS.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="domain-card rounded-xl p-6 text-white" style={{background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)'}}>
              <div className="text-3xl mb-4"><i className="fas fa-code"></i></div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-sm opacity-90">Frontend, Backend, Full Stack</p>
              <div className="mt-4 text-sm">
                <p>Duration: 4-12 weeks</p>
                <p>Eligibility: BTech/MCA</p>
              </div>
            </div>

            <div className="domain-card rounded-xl p-6 text-white" style={{background: 'linear-gradient(135deg, #34d399 0%, #059669 100%)'}}>
              <div className="text-3xl mb-4"><i className="fas fa-brain"></i></div>
              <h3 className="text-xl font-semibold mb-2">AI & ML</h3>
              <p className="text-sm opacity-90">Machine Learning, Deep Learning</p>
              <div className="mt-4 text-sm">
                <p>Duration: 8-12 weeks</p>
                <p>Eligibility: BTech/MTech</p>
              </div>
            </div>

            <div className="domain-card rounded-xl p-6 text-white" style={{background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)'}}>
              <div className="text-3xl mb-4"><i className="fas fa-database"></i></div>
              <h3 className="text-xl font-semibold mb-2">Data Science</h3>
              <p className="text-sm opacity-90">Analytics, Visualization</p>
              <div className="mt-4 text-sm">
                <p>Duration: 6-12 weeks</p>
                <p>Eligibility: Any Degree</p>
              </div>
            </div>

            <div className="domain-card rounded-xl p-6 text-white" style={{background: 'linear-gradient(135deg, #f472b6 0%, #db2777 100%)'}}>
              <div className="text-3xl mb-4"><i className="fas fa-cloud"></i></div>
              <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
              <p className="text-sm opacity-90">AWS, Azure, DevOps</p>
              <div className="mt-4 text-sm">
                <p>Duration: 6-12 weeks</p>
                <p>Eligibility: BTech/MCA</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply for Internship</h2>
            <form className="space-y-6" id="internshipForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input type="text" className="form-input w-full border border-gray-300 rounded-lg px-4 py-2 text-black" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" className="form-input w-full border border-gray-300 rounded-lg px-4 py-2  text-black" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">College/University</label>
                  <input type="text" className="form-input w-full border border-gray-300 rounded-lg px-4 py-2  text-black"   required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Domain of Interest</label>
                  <select className="form-input w-full border border-gray-300 rounded-lg px-4 py-2  text-black" required>
                    <option value="">Select Domain</option>
                    <option value="web">Web Development</option>
                    <option value="ai">AI & ML</option>
                    <option value="data">Data Science</option>
                    <option value="cloud">Cloud Computing</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Resume</label>
                <div className="file-upload-area rounded-lg p-4 text-center cursor-pointer">
                  <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                  <p className="text-gray-600">Drag & drop your resume or click to browse</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" required />
                </div>
              </div>
              <button type="submit" className="w-full bg-blue hover:bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Submit Application
              </button>
            </form>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Certificate</h2>
            <p className="text-gray-600 mb-6">Check the authenticity of your MITS internship certificate.</p>
            <form className="flex gap-4">
              <input type="text" placeholder="Enter Certificate ID" className="form-input flex-1 border border-gray-300 rounded-lg px-4 py-2" />
              <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                Verify
              </button>
            </form>
            <div className="certificate-status hidden mt-4 p-4 rounded-lg"></div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose MITS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="why-choose-card bg-white rounded-xl p-6 text-center">
                <div className="text-3xl text-blue mb-4"><i className="fas fa-project-diagram"></i></div>
                <h3 className="text-lg font-semibold mb-2">Real Projects</h3>
                <p className="text-gray-600">Work on real-world projects with industry experts</p>
              </div>
              <div className="why-choose-card bg-white rounded-xl p-6 text-center">
                <div className="text-3xl text-green-600 mb-4"><i className="fas fa-laptop-house"></i></div>
                <h3 className="text-lg font-semibold mb-2">Remote Friendly</h3>
                <p className="text-gray-600">Flexible work environment with remote options</p>
              </div>
              <div className="why-choose-card bg-white rounded-xl p-6 text-center">
                <div className="text-3xl text-purple-600 mb-4"><i className="fas fa-user-graduate"></i></div>
                <h3 className="text-lg font-semibold mb-2">Mentorship</h3>
                <p className="text-gray-600">One-on-one guidance from industry experts</p>
              </div>
              <div className="why-choose-card bg-white rounded-xl p-6 text-center">
                <div className="text-3xl text-pink-600 mb-4"><i className="fas fa-certificate"></i></div>
                <h3 className="text-lg font-semibold mb-2">Certification</h3>
                <p className="text-gray-600">Industry-recognized certificates upon completion</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue to-purple-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg opacity-90 mb-6">Turn your internship into a full-time opportunity with MITS</p>
            <a href="https://forms.gle/bxeaipVNM1xSsLzv5" target="_blank" className="inline-block bg-white text-blue  px-8 py-3 rounded-lg font-semibold hover:bg-black transition-colors">
              Apply Now
            </a>
          </div>
        </div>
    </section>
  );
}

export default Internship;