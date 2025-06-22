import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo , smallHeroVideo } from '../utills';
import { useEffect, useState ,useRef} from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import video from './D_Animation_Video_Ready.mp4'
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const [text] = useTypewriter({
    words: ["Projects", "Getting Intern", "Learning"],
    loop: true,
  });
  const handlevideoSrcset = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
   useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      gsap.from(videoRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);


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
     <section className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div
  ref={textRef}
  className="will-change-transform flex-1 w-full text-center lg:text-left"
>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-black">
              Say Goodbye to Coding Stress. Hello,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-blue block sm:inline mt-2 sm:mt-0">
                Micro IT
              </span>
            </h1>

            <div className="mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
                Your one-stop solution. We specialize in
              </p>
              <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl md:text-3xl text-blue-700 font-bold bg-blue px-3 py-2 rounded-lg inline-block">
                  {text}
                </span>
                <Cursor cursorColor="#2563EB" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                      href="/Play"
                      className="px-6 py-3 bg-zinc hover:bg-blue text-white font-semibold rounded-xl shadow-md transition-all duration-300">
                      Learn
                    </a>
               <a
                      href="/projects"
                      className="px-6 py-3 border border-blue text-blue hover:bg-blue hover:text-white font-semibold rounded-xl transition-all duration-300">
                    Projects
                    </a>
            </div>
          </div>

          {/* Right Content: Video */}
         <div
  ref={videoRef}
  className="will-change-transform flex-1 w-full"
>
            <video
              className="w-full rounded-2xl shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>

      
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
