import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo , smallHeroVideo } from '../utills';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc,setVideoSrc]=useState (window.innerWidth<760 ? smallHeroVideo : heroVideo)
  const handlevideoSrcset = () =>{
    if (window.innerWidth < 760){
        setVideoSrc(smallHeroVideo)
    }
    else{
      setVideoSrc(heroVideo)
    }
  }
  useEffect(() => {
    window.addEventListener('resize',handlevideoSrcset);
    return () =>{
    window.removeEventListener('resize',handlevideoSrcset);
    }
    
  } , [] )
  useGSAP( () => {
    gsap.to('#hero',{ opacity : 1 , delay:2})
    gsap.to('#cta',{opacity:1, y:-50 ,delay:2})
  },[])
  useEffect(() => {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) window.chatbase.q = [];
      window.chatbase.q.push(args);
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") return target.q;
        return (...args) => target(prop, ...args);
      }
    });

    const onLoad = () => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "d8fpreynNEtTDw9zftRM4";
      script.domain = "www.chatbase.co";
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
  }
}, []);
 
  return (
    
    <section className="w-full nav-height bg-balck relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p  id='hero'  className="hero-title">Welcome To Project Mainia </p>
          <div className="md:w-7/12 w-12/12">
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4'/>
          </video>

          </div>
        </div>
        <div id='cta' className="flex flex-col items-center opacity 0 translate-y-20">
          <a href ="#Highlights" className="btn">Subscribe</a>
          <p className="font-normal text-xl">
            from ₹694.12/month
          </p>
        </div>
    </section>
  )
}

export default Hero 