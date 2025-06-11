import React from 'react';

const FloatingButton = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfq4xyD4zJfSPG2RTPzSeKaLovFT3jxKPu8nayf7ZspjtfbGA/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6  bg-zinc left-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-blue transition-all duration-300 z-50 flex items-center transform hover:scale-110"
    >
      Internship
    </a>
  );
};

export default FloatingButton;