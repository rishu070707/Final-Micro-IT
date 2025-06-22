import React, { useState } from 'react';
import Page from './Page';
const Internship = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    queries: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [generatedPdf, setGeneratedPdf] = useState(null);
  const [pdfFileName, setPdfFileName] = useState('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Document template
  const documentTemplate = `
APPLICATION FOR QUERIES TO MICRO INFORMATION TECHNOLOGY SERVICE TEAM

Date: ${new Date().toLocaleDateString()}

To,
The Micro Information Technology Service Team

Subject: Query Application Submission

Dear Sir/Madam,

I am <<NAME>>, writing to submit my queries to the Micro Information Technology Service Team. Please find my details below:

Personal Information:
- Name: <<NAME>>
- Email: <<EMAIL>>
- Contact Number: <<NUMBER>>

Query Details:
<<QUERIES>>

I would appreciate your prompt response and assistance regarding my queries. Please feel free to contact me at the provided email address or phone number for any clarifications.

Thank you for your time and consideration.

Yours sincerely,
<<NAME>>
Contact: <<NUMBER>>
Email: <<EMAIL>>

---
This application was generated automatically by the Micro Information Technology Service Team portal.
`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const replaceTemplateTags = (template, data) => {
    return template
      .replace(/<<NAME>>/g, data.name)
      .replace(/<<EMAIL>>/g, data.email)
      .replace(/<<NUMBER>>/g, data.number)
      .replace(/<<QUERIES>>/g, data.queries);
  };

  const generatePDF = async (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    return { url, filename };
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

    try {
      // Submit to Google Sheets
      await submitToGoogleSheets();
    } catch (error) {
      alert('Error submitting application. Please try again.');
      console.error('Error:', error);
      setSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGeneratePdf = async () => {
    if (!formData.name || !formData.email || !formData.number || !formData.queries) {
      alert('Please fill in all required fields before generating PDF');
      return;
    }

    setIsGeneratingPdf(true);

    try {
      // Generate PDF document
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const processedDocument = replaceTemplateTags(documentTemplate, formData);
      const filename = `${formData.name}-${formData.number}.txt`;
      setPdfFileName(filename);
      
      const pdfData = await generatePDF(processedDocument, filename);
      setGeneratedPdf(pdfData);
    } catch (error) {
      alert('Error generating document. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const downloadPdf = () => {
    if (generatedPdf) {
      const link = document.createElement('a');
      link.href = generatedPdf.url;
      link.download = generatedPdf.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const resetForm = () => {
    setGeneratedPdf(null);
    setFormData({ name: '', email: '', number: '', queries: '' });
    setUploadedFiles([]);
    setSubmitted(false);
    setIsGeneratingPdf(false);
  };

  const socialMediaLinks = [
    {
      name: 'WhatsApp Support',
      url: 'https://wa.me/7777015050',
      color: 'bg-green-500 hover:bg-green-600'
    },
  
    {
      name: 'Call Support',
      url: 'tel:+77265256',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  // PDF download modal
  if (generatedPdf) {
    return (
      <div className="fixed inset-0 bg-zinc   flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md w-full">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 text-green-600">📄</div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Document Generated!</h2>
            <p className="text-gray-600">Your application document is ready for download.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">File Name:</p>
            <p className="font-mono text-lg font-semibold text-gray-800">{pdfFileName}</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={downloadPdf}
              className="bg-blue hover:bg-blue text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center mx-auto transition-colors"
            >
              <span className="mr-2">⬇️</span>
              Download Document
            </button>

            <button
              onClick={() => setGeneratedPdf(null)}
              className="text-gray-500 hover:text-gray-700 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue to-indigo-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">Micro Information Technology Service Team</h1>
            <p className="opacity-90">Internship Application Form</p>
          </div>

          {/* Form */}
          <div className="p-6 space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent text-black"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent text-black"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent text-black"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Queries Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Queries/Application Details *
              </label>
              <textarea
                name="queries"
                value={formData.queries}
                onChange={handleInputChange}
                rows={6}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent resize-vertical text-black"
                placeholder="Describe your internship application details, queries, or motivation (up to 500 characters)"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.queries.length}/500 characters
              </p>
            </div>

            {/* File Upload */}
            

         
                
        

            {/* Social Media Links */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Quick Contact Options
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {socialMediaLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center transition-colors`}
                  >
                    <span className="mr-2">
                      {link.name.includes('WhatsApp') ? '💬' : 
                       link.name.includes('Email') ? '📧' : '📞'}
                    </span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="pt-4 space-y-4">
              {/* Submit to Google Sheets Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading || submitted}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center ${
                  submitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-blue to-indigo-600 text-white hover:from-blue hover:to-indigo-700'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isLoading ? (
                  <>
                    <span className="mr-2 animate-spin">⏳</span>
                    Submitting Application...
                  </>
                ) : submitted ? (
                  <>
                    <span className="mr-2">✅</span>
                    Application Submitted
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>

              {/* Generate PDF Button */}
              <button
                type="button"
                onClick={handleGeneratePdf}
                disabled={isGeneratingPdf}
                className="w-full bg-blue hover:bg-blue text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGeneratingPdf ? (
                  <>
                    <span className="mr-2 animate-spin">⏳</span>
                    Generating Document...
                  </>
                ) : (
                  <>
                    <span className="mr-2">📄</span>
                    Generate & Download PDF
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Page/>
    </div>
  );
};

export default Internship;