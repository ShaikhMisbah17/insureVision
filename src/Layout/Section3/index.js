// import React from 'react';
// import "./Section3.css"

// const index = () => {
//   return (
//     <div className='section3 container text-center'>
//         <h4 className='mb-3'>How Will We Insure Your Safety?</h4>
//         <img src='https://th.bing.com/th/id/OIP.5wAqGSDAT2G2p5qHk5lweQAAAA?w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' className='img-fluid' />
//     </div>
//   )
// }

// export default index


// import React, { useEffect, useRef } from "react";
// import "./Section3.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Section3 = () => {
//   const imageRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       imageRef.current,
//       {
//         scale: 0.3, // start small
//         transformOrigin: "center center",
//       },
//       {
//         scale: 1, // expand to full width
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//           pin: true,
//           markers: false,
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="section3" ref={sectionRef}>
//       <h3 className="mb-3 section3-text">How Will We Insure Your Safety?</h3>
//       <img
//         ref={imageRef}
//         src= "./assets/section-3.png"
//         className="expand-image"
//         alt="Safety Visual"
//       />
//     </div>
//   );
// };

// export default Section3;

// ./assets/section-3.png

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image scale
      gsap.fromTo(
        imageRef.current,
        { scale: 0.5, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
          },
        }
      );

      // Animate text overlays
      textRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${i * 500 + 300} top`,
              end: "+=200",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-[300vh] overflow-hidden relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Expanding Image */}
        <div
          ref={imageRef}
          className="absolute w-full h-full z-0 flex items-center justify-center overflow-hidden"
        >
          <img
            src="./assets/section-3.png" // Replace with your correct path
            alt="Expanding Visual"
            className="object-cover w-full h-full transition-all duration-700 ease-out"
          />
        </div>

        {/* Text Overlays */}
        {/* Top Center */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10 max-w-xl text-center">
          <div
            ref={(el) => (textRefs.current[0] = el)}
            className="bg-[#1a1a2e] bg-opacity-80 p-4 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold">Next Gen Risk Understanding</h2>
            <p className="text-sm mt-1 opacity-80">
              Bringing true context into risk means identifying risky drivers early with confidence.
            </p>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-16 left-10 w-1/3 z-10">
          <div
            ref={(el) => (textRefs.current[1] = el)}
            className="bg-[#1a1a2e] bg-opacity-80 p-4 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-semibold">Real Time Accident Prevention</h3>
            <p className="text-sm mt-1 opacity-80">
              Our AI anticipates risk seconds before potential accidents—safer roads.
            </p>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-16 right-10 w-1/3 z-10">
          <div
            ref={(el) => (textRefs.current[2] = el)}
            className="bg-[#1a1a2e] bg-opacity-80 p-4 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-semibold">Super Charge Existing Video Telematics</h3>
            <p className="text-sm mt-1 opacity-80">
              Use your dashcams as smart insurance intelligence engines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
