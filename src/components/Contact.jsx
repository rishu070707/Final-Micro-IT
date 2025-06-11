import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="page-section bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue  text-black" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue  text-black" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue h-32  text-black" placeholder="Your message"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg mb-4"></div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-map-marker-alt text-blue-600 mt-1"></i>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94025</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-phone text-blue-600 mt-1"></i>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-envelope text-blue-600 mt-1"></i>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">contact@mits.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue text-2xl"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-600 hover:text-blue text-2xl"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-600 hover:text-blue text-2xl"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-600 hover:text-blue text-2xl"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Contact;