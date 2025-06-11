import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo , smallHeroVideo } from '../utills';
import { useEffect, useState } from 'react';
import { color } from 'framer-motion';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handlevideoSrcset = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handlevideoSrcset);
    return () => {
      window.removeEventListener('resize', handlevideoSrcset);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-balck relative">
      <div className="h-5/6 w-full flex-center flex-col top-6">
        <p id='hero' className="hero-title top-6">Welcome To Micro It</p>
        <div className="md:w-7/12 w-12/12">
          <video autoPlay muted playsInline key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>
      <div id='cta' className="flex flex-col items-center opacity 0 translate-y-20">
        <a href="#Highlights" className="btn">Explore</a>
        <p className="font-normal text-xl">
          Welcome to Micro IT
        </p>
      </div>

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#71717a',
          color: '#fff',
          fontSize: '24px',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1001,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
        }}
      >
        💬
      </button>

      {/* Chatbox Popup */}
      {isChatOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '350px',
          height: '500px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          overflow: 'hidden',
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}>
          {/* Close Button */}
          <button
            onClick={() => setIsChatOpen(false)}
            style={{
              position: 'absolute',
              top: '5px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              zIndex: 1002,
            }}
            aria-label="Close Chat"
          >
            X
          </button>

          {/* Chatbase Iframe */}
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/rwpc-wYhstXY7jNemzzSz"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Hero;
