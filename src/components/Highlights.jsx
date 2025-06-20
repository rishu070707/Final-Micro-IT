import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

import VideoCrousel from './VideoCrousel';
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {opacity:1 , y:0})
    gsap.to(".link",{opacity:1 ,y:0 , duration:1, stagger:0.25})
  },[])
  return (
    <section id="Highlights" className="w-screen overflow-hidden h-full common-padding bg-white" > 
     <div className="scree-max-width">
       <div className="mb-12  md:flex full items-end justify-between">
        <h1 id="title" className=" text-black text-3xl font-bold left-4">
          Get the <span className="text-blue">Highlights</span>
        </h1>
       </div>
       <VideoCrousel/>
     </div>
    </section>
  )
}

export default Highlights