import React, { useState } from 'react';


// Data for the tutorials with direct web links for images.
const tutorialsData = [
  {
    id: 1,
    title: 'Java Programming Fundamentals',
    description: 'Learn the basics of Java programming including variables, loops, and object-oriented concepts.',
    level: 'Beginner',
    topic: 'Java',
    rating: 4.8,
    students: '2.1k',
    imageSrc: 'https://www.svgrepo.com/show/75601/java-logo.svg',
    lessons: null,
  },
  {
    id: 2,
    title: 'Python for Beginners',
    description: "Start your programming journey with Python's simple syntax and powerful libraries.",
    level: 'Beginner',
    topic: 'Python',
    rating: 4.9,
    students: '3.2k',
    imageSrc: 'https://www.svgrepo.com/show/354238/python.svg',
    lessons: null,
  },
  {
    id: 3,
    title: 'JavaScript Essentials',
    description: 'Master JavaScript to create dynamic and interactive web applications.',
    level: 'Intermediate',
    topic: 'JavaScript',
    rating: 4.3,
    students: '5.1k',
    imageSrc: 'https://www.svgrepo.com/show/349419/javascript.svg',
    lessons: 15,
  },
  {
    id: 4,
    title: 'React Development',
    description: 'Build modern, responsive web applications using React and its ecosystem.',
    level: 'Advanced',
    topic: 'React',
    rating: 4.7,
    students: '2.7k',
    imageSrc: 'https://www.svgrepo.com/show/452092/react.svg',
    lessons: 20,
  },
  {
    id: 5,
    title: 'Node.js Backend Development',
    description: 'Create powerful server-side applications with Node.js and Express.',
    level: 'Intermediate',
    topic: 'Node.js',
    rating: 4.5,
    students: '2.9k',
    imageSrc: 'https://www.svgrepo.com/show/452075/node-js.svg',
    lessons: 18,
  },
  {
    id: 6,
    title: 'Database Management',
    description: 'Learn SQL and database design principles for efficient data management.',
    level: 'Intermediate',
    topic: 'Databases',
    rating: 4.4,
    students: '3.7k',
    imageSrc: 'https://www.svgrepo.com/show/362059/database.svg',
    lessons: 14,
  },
];


const Tutorials = () => {
  // State to manage the selected filters
  const [topicFilter, setTopicFilter] = useState('All Topics');
  const [levelFilter, setLevelFilter] = useState('All Levels');

  // Filter logic for tutorials
  const filteredTutorials = tutorialsData.filter(tutorial => {
    const topicMatch = topicFilter === 'All Topics' || tutorial.topic === topicFilter;
    const levelMatch = levelFilter === 'All Levels' || tutorial.level === levelFilter;
    return topicMatch && levelMatch;
  });

  return (
    <section id="tutorials" className="page-section bg-zinc">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-50 mb-4">Tutorials</h1>
          <p className="text-xl text-gra">
            Master programming languages and technologies with our step-by-step guides
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-semibold text-gray-700">Filter by:</span>
            <select
              value={topicFilter}
              onChange={(e) => setTopicFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option>All Topics</option>
              <option>Java</option>
              <option>Python</option>
              <option>JavaScript</option>
              <option>React</option>
              <option>Node.js</option>
              <option>Databases</option>
            </select>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Learning Progress Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Your Learning Progress
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Java Fundamentals</span>
                <span className="text-blue  font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue to-purple-500 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Python Basics</span>
                <span className="text-blue font-semibold">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue to-purple-500 h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamically Filtered Tutorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial) => (
            <div 
              key={tutorial.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative border-b">
                <div className="h-48 bg-white flex items-center justify-center p-4">
                  <img src={tutorial.imageSrc} alt={tutorial.title} className="max-h-full max-w-full object-contain" />
                </div>
                <span className={`absolute top-4 right-4 px-2 py-1 rounded-md text-sm font-medium ${
                  tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {tutorial.level}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  {tutorial.lessons && (
                    <div className="flex items-center justify-between mb-2">
                       <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>{tutorial.level}</span>
                      <span className="text-gray-500 text-sm">{tutorial.lessons} lessons</span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-black">{tutorial.title}</h3>
                  <p className="text-gray-600 mb-4">{tutorial.description}</p>
                </div>
                <div className="mt-auto pt-4">
                  {tutorial.students && (
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-blue font-semibold">{tutorial.rating} ⭐ ({tutorial.students} students)</span>
                    </div>
                  )}
                  <button className="w-full bg-blue  text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {tutorial.students ? 'Enroll Now' : 'Start Tutorial'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Tutorials;