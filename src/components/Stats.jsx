import React from 'react';

const StatCard = ({ icon, value, label, gradient }) => (
  <div className="bg-white  rounded-xl shadow-xl p-8 transform transition duration-300 hover:-translate-y-2">
    <div className={`w-20 h-20 mx-auto ${gradient} rounded-full flex items-center justify-center mb-5 shadow-lg`}>
      <i className={`fas ${icon} text-4xl text-white`}></i>
    </div>
    <h3 className="text-5xl font-bold text-gray-800 mb-2">{value}</h3>
    <p className="text-blue font-medium">{label}</p>
  </div>
);


const Stats = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <StatCard icon="fa-users" value="50K+" label="Active Students" gradient="bg-gradient-to-tr from-blue to-blue" />
        <StatCard icon="fa-book" value="200+" label="Courses Available" gradient="bg-gradient-to-tr from-green-500 to-green-300" />
        <StatCard icon="fa-code" value="1000+" label="Projects Completed" gradient="bg-gradient-to-tr from-purple-500 to-purple-300" />
        <StatCard icon="fa-star" value="4.9" label="Average Rating" gradient="bg-gradient-to-tr from-yellow-500 to-yellow-300" />
      </div>
    </section>
  );
};

export default Stats;