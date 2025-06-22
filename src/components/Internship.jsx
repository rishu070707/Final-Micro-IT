import React, { useState } from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import pdfTemplate from './Rishabh_singh_offer (1).pdf';
import Page from './Page';

const Internship = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    queries: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitToGoogleSheets = async () => {
    const url = "https://script.google.com/macros/s/AKfycbyGdHelLEogEzdl4WC3vfxbSnbRZk24GmuX75D38-JWH1lSXvJ6gxKc0jkD4rj3ZVIAmA/exec";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${formData.name}&Email=${formData.email}&Number=${formData.number}&Queries=${formData.queries}`
      });
      const data = await response.text();
      alert(data);
      return true;
    } catch (error) {
      console.error('Google Sheets submission error:', error);
      alert('Error submitting to Google Sheets. Please try again.');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.number || !formData.queries) {
      alert('Please fill in all required fields');
      return;
    }
    setIsLoading(true);
    setSubmitted(true);
    await submitToGoogleSheets();
    setIsLoading(false);
  };

  const generateCustomOfferLetter = async () => {
    const existingPdfBytes = await fetch(pdfTemplate).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const { name, email, number } = formData;

    firstPage.drawText(`${name}`, {
      x: 50,
      y: 610,
      size: 12,
      font: boldFont,
      color: rgb(0, 0, 0)
    });

    firstPage.drawText(`Email: ${email}`, {
      x: 50,
      y: 590,
      size: 12,
      font,
      color: rgb(0, 0, 0)
    });

    firstPage.drawText(`Contact: ${number}`, {
      x: 50,
      y: 570,
      size: 12,
      font,
      color: rgb(0, 0, 0)
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formData.name}_OfferLetter.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue to-indigo-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">Micro Information Technology Service Team</h1>
            <p className="opacity-90">Internship Application Form</p>
          </div>

          <form className="p-6 space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input type="tel" name="number" value={formData.number} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Queries/Application Details *</label>
              <textarea name="queries" value={formData.queries} onChange={handleInputChange} rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black" />
            </div>

            <button type="submit" disabled={isLoading || submitted} className="w-full py-4 rounded-lg font-semibold bg-blue text-white">
              {isLoading ? 'Submitting...' : submitted ? 'Submitted ✔️' : 'Submit Application'}
            </button>

            <button type="button" onClick={generateCustomOfferLetter} className="w-full py-4 mt-2 rounded-lg font-semibold bg-indigo-600 text-white">
              📎 Download Personalized Offer Letter
            </button>

            <div className="pt-4 grid md:grid-cols-2 gap-4">
              <a
                href="https://wa.me/917777015050"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600 transition"
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href="tel:+917777015050"
                className="w-full text-center py-4 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                📞 Call Support
              </a>
            </div>
          </form>
        </div>
      </div>
      <Page />
    </div>
  );
};

export default Internship;
