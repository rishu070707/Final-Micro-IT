import React from 'react';

const UniversityLogo = ({ name }) => (
  <div className="text-center transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
    <div className="w-16 h-16 bg-zinc rounded-full mx-auto mb-3 flex items-center justify-center shadow-sm">
      <i className="fas fa-university text-2xl text-white"></i>
    </div>
    <p className="text-sm font-medium text-gray-700">{name}</p>
  </div>
);

const UniversityLogos = () => {
  const universities = [
    "MIT", "Stanford", "Harvard", "Berkeley", "CMU",
    "Oxford", "Cambridge", "Caltech", "Yale", "Princeton"
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Trusted by 10+ Universities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center">
          {universities.map((uni, index) => (
            <div key={uni} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in">
              <UniversityLogo name={uni} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityLogos;
