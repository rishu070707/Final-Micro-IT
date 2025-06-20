import React, { useState, useEffect } from 'react';


const projectsData = [
  {
    id: 'todo-app',
    level: 'beginner',
    title: 'Todo List Application',
    description: 'Build a simple todo list with HTML, CSS, and JavaScript. Learn the basics of DOM manipulation and local storage.',
    duration: '2-3 hours',
    technologies: 'HTML, CSS, JavaScript',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/3209/3209861.png', 
    overview: 'A comprehensive todo list application with local storage, drag-and-drop functionality, and category management.',
    instructions: [
      'Set up your development environment',
      'Create the HTML structure',
      'Style with CSS',
      'Implement JavaScript functionality',
      'Add local storage',
      'Test and deploy'
    ],
    codeSample: `// Todo List Implementation...// 
     class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(title) {
    this.todos.push({
      id: Date.now(),
      title,
      completed: false
    });
  }

  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}`,
    comments: [
      { id: 1, user: 'Alex Smith', avatarInitial: 'AS', rating: 4.0, timestamp: '2 days ago', text: 'Great project! The instructions were clear and I learned a lot.' },
      { id: 2, user: 'Jane Doe', avatarInitial: 'JD', rating: 5.0, timestamp: '1 day ago', text: 'Excellent for beginners!' }
    ]
  },
  {
    id: 'weather-app',
    level: 'intermediate',
    title: 'Weather Dashboard',
    description: 'Create a weather dashboard using OpenWeather API. Implement geolocation and dynamic weather updates.',
    duration: '4-5 hours',
    technologies: 'React, API Integration',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png', 
    overview: 'A sleek weather dashboard that fetches and displays real-time weather data from the OpenWeather API based on user location.',
    instructions: [ 'Set up a new React project.', 'Get an API key from OpenWeather.', 'Implement API calls to fetch weather data.', 'Style the dashboard and deploy.'],
    codeSample: `// Fetch Weather Data...`,
    comments: [
      { id: 3, user: 'Sam Wilson', avatarInitial: 'SW', rating: 5.0, timestamp: '3 days ago', text: 'Loved the API integration part.' }
    ]
  },
  {
    id: 'ecommerce-platform',
    level: 'advanced',
    title: 'E-commerce Platform',
    description: 'Build a full-stack e-commerce platform with user authentication, product management, and payment integration.',
    duration: '15-20 hours',
    technologies: 'MERN Stack, Stripe',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/3081/3081986.png', 
    overview: 'A feature-rich, full-stack e-commerce website using the MERN stack (MongoDB, Express, React, Node.js) and Stripe for payment processing.',
    instructions: ['Design the database schema with MongoDB.', 'Build the backend API with Node.js and Express.', 'Set up user authentication with JWT.', 'Integrate the Stripe API for payments.'],
    codeSample: `// Backend Route for Payment...`,
    comments: []
  },
];


const StarRating = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => <i key={`full-${i}`} className="fas fa-star"></i>)}
      {halfStar && <i className="fas fa-star-half-alt"></i>}
      {[...Array(emptyStars)].map((_, i) => <i key={`empty-${i}`} className="far fa-star"></i>)}
    </div>
  );
};


const CommentForm = ({ onSubmit }) => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() && rating > 0) {
            onSubmit(text, rating);
            setText('');
            setRating(0);
        } else {
            alert("Please write a comment and select a rating.");
        }
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <form onSubmit={handleSubmit} className="flex gap-4">
                <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">JD</span>
                </div>
                <div className="flex-grow">
                    <textarea
                        placeholder="Share your thoughts..."
                        className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        rows="3"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => setRating(index + 1)}
                                    className={`text-2xl transition-colors ${index < rating ? 'text-yellow-400' : 'text-gray-500'} hover:text-yellow-400`}
                                >
                                    <i className="fas fa-star"></i>
                                </button>
                            ))}
                            <span className="text-sm text-gray-400 ml-2">Rate this project</span>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Post Comment
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};


const ProjectDetailModal = ({ project, onClose, onCommentSubmit }) => {
    if (!project) return null;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'auto'; };
    }, []);

    const handleCommentSubmit = (text, rating) => {
        const newComment = { id: Date.now(), user: 'John Doe', avatarInitial: 'JD', timestamp: 'Just now', text, rating };
        onCommentSubmit(project.id, newComment);
    };

    const averageRating = project.comments.length > 0
        ? project.comments.reduce((acc, comment) => acc + comment.rating, 0) / project.comments.length
        : 0;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 text-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
              <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 rounded-t-xl z-10">
                  <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold">{project.title}</h2>
                      <button
  onClick={onClose}
  className="text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center"
  aria-label="Close"
>
  <i className="fas fa-times"></i>
</button>

                  </div>
              </div>

              <div className="overflow-y-auto p-8">
                  <div className="space-y-8">
                      <div>
                          <h3 className="text-xl font-semibold mb-2">Overview</h3>
                          <p className="text-gray-400">{project.overview}</p>
                          <div className="flex flex-wrap gap-4 my-4">
                              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 text-sm"><i className="far fa-clock mr-2 text-blue-400"></i>Duration: {project.duration}</div>
                              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 text-sm"><i className="fas fa-code mr-2 text-blue-400"></i>Technologies: {project.technologies}</div>
                          </div>
                      </div>

                      <div>
                          <h3 className="text-xl font-semibold mb-2 text-white" >Instructions</h3>
                          <div className="bg-gray-800 rounded-lg p-6">
                              <ol className="list-decimal list-inside space-y-2 text-white">
                                  {project.instructions.map((step, index) => <li key={index}>{step}</li>)}
                              </ol>
                          </div>
                      </div>

                      <div>
                          <h3 className="text-xl font-semibold mb-2">Code Sample</h3>
                          <div className="bg-black rounded-lg p-6 overflow-x-auto">
                              <pre><code className="language-javascript text-gray-white">{project.codeSample}</code></pre>
                          </div>
                      </div>

                      <div className="flex flex-wrap gap-4 items-center justify-between">
                          <div className="flex gap-4">
                              <button className="bg-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"><i className="fas fa-play mr-2"></i> Try Online</button>
                              <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center"><i className="fas fa-download mr-2"></i> Download</button>
                          </div>
                          <div className="flex items-center gap-2">
                              <StarRating rating={averageRating} />
                              <span className="text-gray-400 font-semibold">({averageRating.toFixed(1)})</span>
                          </div>
                      </div>

                      <div className="border-t border-gray-700 pt-8">
                          <h3 className="text-xl font-semibold mb-6">Comments</h3>
                          <CommentForm onSubmit={handleCommentSubmit} />
                          <div className="space-y-6">
                              {project.comments.length > 0 ? (
                                  project.comments.map(comment => (
                                      <div key={comment.id} className="flex gap-4">
                                          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-gray-300 font-semibold">{comment.avatarInitial}</span></div>
                                          <div className="flex-grow">
                                              <div className="flex items-center justify-between"><h4 className="font-semibold">{comment.user}</h4><span className="text-sm text-gray-500">{comment.timestamp}</span></div>
                                              <div className="flex items-center mt-1 mb-2">
                                                  <StarRating rating={comment.rating} />
                                                  <span className="text-sm text-gray-500 ml-2">{comment.rating.toFixed(1)}</span>
                                              </div>
                                              <p className="text-gray-400">{comment.text}</p>
                                          </div>
                                      </div>
                                  ))
                              ) : (<p className="text-gray-500 text-center">No comments yet. Be the first to rate this project!</p>)}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [allProjects, setAllProjects] = useState(projectsData);

  const handleFilterClick = (level) => setActiveFilter(level);
  const handleViewDetails = (projectId) => {
    const project = allProjects.find(p => p.id === projectId);
    setSelectedProject(project);
  };
  const handleCloseModal = () => setSelectedProject(null);

  const handleCommentSubmit = (projectId, newComment) => {
    const updatedProjects = allProjects.map(p => {
        if (p.id === projectId) {
            return { ...p, comments: [newComment, ...p.comments] };
        }
        return p;
    });
    setAllProjects(updatedProjects);
    setSelectedProject(updatedProjects.find(p => p.id === projectId));
  };

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(project => project.level === activeFilter);

  return (
    <section id="projects" className="page-section bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue text-sm font-semibold tracking-wide uppercase">Our Projects</span>
          <h1 className="text-4xl font-bold mt-2 mb-4 text-black">Explore Our Project Collection</h1>
          <p className="text-xl text-blue  max-w-3xl mx-auto">
            Dive into our carefully curated collection of hands-on projects designed to help you master various technologies and build your portfolio.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
            <button key={level} onClick={() => handleFilterClick(level)}
              className={`filter-button px-6 py-2 rounded-lg capitalize transition-colors duration-300 ${
                activeFilter === level ? 'bg-blue  text-white' : 'bg-gray-800 text-white border-2 border-gray-700 hover:bg-gray-700'
              }`}>
              {level === 'all' ? 'All Projects' : level}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card" data-level={project.level}>
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20">
                
                <div className="relative">
                  <div className="h-48 bg-gray-800 flex items-center justify-center">
                      <img src={project.imageSrc} alt={project.title} className="h-24 w-24 object-contain"/>
                  </div>
                   <span className={`absolute top-4 right-4 px-2 py-1 rounded-md text-sm font-medium capitalize ${
                     project.level === 'beginner' ? 'bg-green-900/50 text-green-300' :
                     project.level === 'intermediate' ? 'bg-yellow-900/50 text-yellow-300' :
                     'bg-red-900/50 text-red-300'
                   }`}>
                    {project.level}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="space-y-3 mt-auto pt-4 border-t border-gray-800">
                    <div className="flex items-center text-sm text-white"><i className="far fa-clock mr-2"></i>Duration: {project.duration}</div>
                    <div className="flex items-center text-sm text-white"><i className="fas fa-code mr-2"></i>Technologies: {project.technologies}</div>
                    <button onClick={() => handleViewDetails(project.id)} className="w-full mt-2 bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} onCommentSubmit={handleCommentSubmit} />}
    </section>
  );
};

export default Projects;