import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Video2 from "./Video2"; // Assuming you have this

gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="Highlights"
      className="w-screen overflow-hidden h-full common-padding bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100"
    >
      <div className="screen-max-width">
        <div className="mb-12 md:flex w-full items-end justify-between">
          <h1
            ref={titleRef}
            className="text-black text-3xl font-bold"
          >
            Programming <span className="text-blue">Languages</span>
          </h1>
        </div>

        <Video2 />
      </div>
    </section>
  );
}
