// import React from "react";
// import "./Section2.css"; // optional if you want to center vertically

// const Section2 = () => {
//   return (
//     <div className="container">
//       <div className="section2 d-flex justify-content-center align-items-center text-center my-5">
//         <p className="lead px-3">
//           Traditional telematics detect harsh braking but skip the reasoning. AI
//           dashcams spot objects but struggle to understand their danger.
//           <br />
//           <strong>
//             Insurevision analyses risk contextually – not only predicting
//             accidents – but preventing them.
//           </strong>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Section2;




// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Section2 = () => {
//   const textRef = useRef();

//   useEffect(() => {
//     const lines = textRef.current.querySelectorAll(".line");

//     lines.forEach((line) => {
//       gsap.fromTo(
//         line,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: line,
//             start: "top 80%",
//             end: "bottom center",
//             scrub: 0.5,
//             markers: false, // no debug markers!
//           },
//         }
//       );
//     });

//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   return (
//     <div className="container">
//       <div className="section2 d-flex justify-content-center align-items-center text-center my-5">
//         <div className="text" ref={textRef}>
//           {/* Split lines manually */}
//           <h1>            
//             <div className="line">Humans drive cars and understand risk with our eyes, not gps and acerometer data. We focus our attention on danger rather than on counting and classifying road objects. Our understanding is based on our experience as drivers...  InsureVision analyses risk contextually just like humans
//             </div>
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section2;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const textRef = useRef();

  useEffect(() => {
    const lines = textRef.current?.querySelectorAll(".line");

    lines?.forEach((line) => {
      gsap.fromTo(
        line,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "bottom center",
            scrub: 0.5,
            markers: false,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="container">
      <div className="section2 d-flex justify-content-center align-items-center text-center my-5">
        <div className="text" ref={textRef}>
          {/* Each line separated for animation */}
          <h1>
            <span className="line">
              Humans drive cars and understand risk with our eyes, not GPS and
              accelerometer data.
            </span>
            <br />
            <span className="line">
              We focus our attention on danger rather than on counting and
              classifying road objects.
            </span>
            <br />
            <span className="line">
              Our understanding is based on our experience as drivers...
            </span>
            <br />
            <span className="line">
              InsureVision analyses risk contextually just like humans.
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section2;

