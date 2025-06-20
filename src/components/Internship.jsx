import React, { useRef } from 'react';

const Internship = () => {
  const fileInputRef = useRef();

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section id="internship" className="page-section bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <span className="text-blue text-sm font-semibold tracking-wide uppercase">Internship Program</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">Explore Internship Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Gain hands-on experience, grow with mentors, and build your career with MITS.</p>
        </div>

        {/* Internship Cards Omitted for Brevity */}

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply for Internship</h2>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfq4xyD4zJfSPG2RTPzSeKaLovFT3jxKPu8nayf7ZspjtfbGA/viewform?embedded=true" 
            width="100%" 
            height="900" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            title="Internship Form"
          >
            Loading…
          </iframe>
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

        {/* Why Choose MITS Section Omitted for Brevity */}

        <div className="bg-gradient-to-r from-blue to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg opacity-90 mb-6">Turn your internship into a full-time opportunity with MITS</p>
          <a href="https://forms.gle/bxeaipVNM1xSsLzv5" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue px-8 py-3 rounded-lg font-semibold hover:bg-black transition-colors">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Internship;
