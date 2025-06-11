import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Video2 from './Video2';

const Highlights2 = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section id="Highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="scree-max-width">
        <div className="mb-12 md:flex full items-end justify-between">
          <h1
            id="title"
            className="section-heading opacity-0 translate-y-8 transition-all duration-1000"
          >
            Programming Languages
          </h1>
        </div>
        <Video2 />
      </div>
    </section>
  );
};

export default Highlights2;
