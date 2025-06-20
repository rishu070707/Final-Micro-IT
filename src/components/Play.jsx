import React, { useState, useEffect, useRef, useCallback } from 'react';

const Play = () => {
  const [selectedCourse, setSelectedCourse] = useState('java');
  const [currentVideoTitle, setCurrentVideoTitle] = useState('');
  const [currentLocalVideo, setCurrentLocalVideo] = useState('');
  const [currentYouTubeEmbed, setCurrentYouTubeEmbed] = useState('');
  const [isYouTubeVideo, setIsYouTubeVideo] = useState(false);
  const videoPlayerRef = useRef(null);
  const videoListRef = useRef(null);

  useEffect(() => {
    if (window.gsap && videoListRef.current) {
      window.gsap.fromTo(
        videoListRef.current.children,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [selectedCourse]);

  const courses = {
    'java': [
      { id: 'j1', title: 'Java Basics: Getting Started', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' },
      { id: 'j2', title: 'Object-Oriented Programming in Java', url: 'https://www.youtube.com/watch?v=a199KZGMNxk' },
      { id: 'j3', title: 'Java Collections Framework', url: 'https://www.youtube.com/watch?v=rzA7UJ-hQn4' },
      { id: 'j4', title: 'Exception Handling in Java', url: 'https://www.youtube.com/watch?v=0jkFiFDJNrQ' },
      { id: 'j5', title: 'Building REST APIs with Spring Boot', url: 'https://www.youtube.com/watch?v=rxT5RFYxjSg' },
    ],
    'python': [
      { id: 'p1', title: 'Python for Beginners: Setup', url: 'https://www.youtube.com/watch?v=YKSpANU8jPE' },
      { id: 'p2', title: 'Data Structures in Python', url: 'https://www.youtube.com/watch?v=f9Aje_cN_CY' },
      { id: 'p3', title: 'Python Web Development with Flask', url: 'https://www.youtube.com/watch?v=oA8brF3w5XQ' },
      { id: 'p4', title: 'Machine Learning with Python', url: 'https://www.youtube.com/watch?v=7eh4d6sabA0' },
      { id: 'p5', title: 'Automating Tasks with Python Scripts', url: 'https://www.youtube.com/watch?v=qYSWWGz9Z6s' },
    ],
    'react': [
      { id: 'r1', title: 'React Fundamentals: Components', url: 'https://www.youtube.com/watch?v=SqcY0GlETPk&t=680s' },
      { id: 'r2', title: 'State Management with Hooks', url: 'https://www.youtube.com/watch?v=LOH1l-MP_9k' },
      { id: 'r3', title: 'React Router for Navigation', url: 'https://www.youtube.com/watch?v=oTIJunBa6MA' },
      { id: 'r4', title: 'Styling React Apps with Tailwind CSS', url: 'https://www.youtube.com/watch?v=L3wJe66tlBk' },
      { id: 'r5', title: 'Building Custom Hooks in React', url: 'https://www.youtube.com/watch?v=4fmYrIWl-4Q' },
    ],
    'node.js': [
      { id: 'n1', title: 'Node.js Basics: Event Loop', url: 'https://www.youtube.com/watch?v=QOfROjXytok' },
      { id: 'n2', title: 'Building APIs with Express.js', url: 'https://www.youtube.com/watch?v=uNCrMvkPUAE&t=1045s' },
      { id: 'n3', title: 'Asynchronous JavaScript in Node.js', url: 'https://www.youtube.com/watch?v=670f71LTWpM' },
      { id: 'n4', title: 'Authentication with Passport.js', url: 'https://www.youtube.com/watch?v=F-sFp_AvHc8' },
      { id: 'n5', title: 'Node.js Microservices', url: 'https://www.youtube.com/watch?v=VeP45b54gvo' },
    ],
    'mongo db': [
      { id: 'm1', title: 'MongoDB Introduction: Documents', url: 'https://www.youtube.com/watch?v=SnqPyqRh4r4' },
      { id: 'm2', title: 'CRUD Operations in MongoDB', url: 'https://www.youtube.com/watch?v=2Qj33fkKRo0' },
      { id: 'm3', title: 'MongoDB Indexing for Performance', url: 'https://www.youtube.com/watch?v=xpHjnFXICh8' },
      { id: 'm4', title: 'Aggregation Pipeline in MongoDB', url: 'https://www.youtube.com/watch?v=MWmMvudBgFU' },
      { id: 'm5', title: 'Connecting Node.js to MongoDB', url: 'https://www.youtube.com/watch?v=xrglM8U0Zv8' },
    ],
  };

  const getYouTubeId = (url) => {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  };

  const getYouTubeEmbedUrl = (url) => {
    const id = getYouTubeId(url);
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1` : '';
  };

  const handleCourseChange = (e) => setSelectedCourse(e.target.value);

  const handleVideoSelect = useCallback((url, title) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      setCurrentYouTubeEmbed(getYouTubeEmbedUrl(url));
      setCurrentLocalVideo('');
      setIsYouTubeVideo(true);
    } else {
      setCurrentLocalVideo(url);
      setCurrentYouTubeEmbed('');
      setIsYouTubeVideo(false);
    }
    setCurrentVideoTitle(title);
  }, []);

  useEffect(() => {
    const first = courses[selectedCourse]?.[0];
    if (first) handleVideoSelect(first.url, first.title);
  }, [selectedCourse, handleVideoSelect]);

  return (
    <div className="p-4 bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 min-h-screen">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold mb-2 text-black">Select Course</h1>
        <select
          value={selectedCourse}
          onChange={handleCourseChange}
          className="p-2 rounded bg-blue-600 text-black font-semibold shadow-lg"
        >
          {Object.keys(courses).map((course) => (
            <option key={course} value={course}>{course.toUpperCase()}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:flex-1">
          <div className="aspect-video bg-black rounded overflow-hidden">
            {isYouTubeVideo ? (
              <iframe
                key={currentVideoTitle}
                ref={videoPlayerRef}
                src={currentYouTubeEmbed}
                title={currentVideoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video
                ref={videoPlayerRef}
                src={currentLocalVideo}
                controls
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <h2 className="mt-4 text-xl font-bold text-gray-800">{currentVideoTitle}</h2>
        </div>

        <div className="w-full lg:w-1/3">
          <h3 className="text-lg font-bold mb-4 text-black">Up Next</h3>
          <div ref={videoListRef} className="space-y-3">
            {courses[selectedCourse].map((video) => (
              <button
                key={video.id}
                onClick={() => handleVideoSelect(video.url, video.title)}
                className={`flex gap-3 items-start w-full p-2 rounded-lg transition hover:bg-blue text-left ${currentVideoTitle === video.title ? 'bg-blue-100' : 'bg-white'}`}
              >
                <img
                  src={
                    video.url.includes('youtube.com') || video.url.includes('youtu.be')
                      ? `https://img.youtube.com/vi/${getYouTubeId(video.url)}/mqdefault.jpg`
                      : 'https://placehold.co/120x70/E5E7EB/374151?text=Video'
                  }
                  alt="thumbnail"
                  className="w-28 h-16 rounded object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-black">{video.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
