// import React, { useState, useEffect } from "react";
// import bride from "../assets/images/bride.jpg";
// import groom from "../assets/images/groom.jpg";

// const HeroSec = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const targetDate = new Date("2024-12-31T00:00:00"); // Update to your desired date
//     const interval = setInterval(() => {
//       const now = new Date();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / (1000 * 60)) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <header
//         id="fh5co-header"
//         className="fh5co-cover"
//         role="banner"
//         style={{
//           backgroundImage: "url(images/img_bg_2.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         data-stellar-background-ratio="0.5"
//       >
//         <div className="overlay"></div>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 col-md-offset-2 text-center">
//               <div className="display-t">
//                 <div
//                   className="display-tc animate-box"
//                   data-animate-effect="fadeIn"
//                 >
//                   <h1>Joefrey &amp; Sheila</h1>
//                   <h2>We Are Getting Married</h2>
//                   <div className="countdown-timer">
//                     <div className="time-box">
//                       <span className="time-value">{timeLeft.days}</span>
//                       <span className="time-label">Days</span>
//                     </div>
//                     <div className="time-box">
//                       <span className="time-value">{timeLeft.hours}</span>
//                       <span className="time-label">Hours</span>
//                     </div>
//                     <div className="time-box">
//                       <span className="time-value">{timeLeft.minutes}</span>
//                       <span className="time-label">Minutes</span>
//                     </div>
//                     <div className="time-box">
//                       <span className="time-value">{timeLeft.seconds}</span>
//                       <span className="time-label">Seconds</span>
//                     </div>
//                   </div>
//                   <p>
//                     <a href="#" className="btn btn-default btn-sm HeroBTN">
//                       Save the date
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div id="fh5co-couple">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
//               <h2>Hello!</h2>
//               <h3>November 28th, 2016 New York, USA</h3>
//               <p>We invited you to celebrate our wedding</p>
//             </div>
//           </div>
//           <div className="couple-wrap animate-box">
//             <div className="couple-half">
//               <div className="groom">
//                 <img src={groom} alt="groom" className="img-responsive" />
//               </div>
//               <div className="desc-groom">
//                 <h3>Joefrey Mahusay</h3>
//                 <p>
//                   Far far away, behind the word mountains, far from the
//                   countries Vokalia and Consonantia, there live the blind texts.
//                   Separated they live in Bookmarksgrove
//                 </p>
//               </div>
//             </div>
//             <p className="heart text-center">
//               <i className="icon-heart2"></i>
//             </p>
//             <div className="couple-half">
//               <div className="bride">
//                 <img src={bride} alt="groom" className="img-responsive" />
//               </div>
//               <div className="desc-bride">
//                 <h3>Sheila Mahusay</h3>
//                 <p>
//                   Far far away, behind the word mountains, far from the
//                   countries Vokalia and Consonantia, there live the blind texts.
//                   Separated they live in Bookmarksgrove
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSec;

import React, { useState, useEffect } from "react";
import defaultBride from "../../assets/images/bride.jpg"; // Path to default bride image
import defaultGroom from "../../assets/images/groom.jpg"; // Path to default groom image

const HeroSec = ({ formDataFromAdmin }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [formData, setFormData] = useState({
    brideName: "Sheila",
    groomName: "Joefrey",
    weddingDate: "2024-12-31T00:00:00",
    venue: "New York, USA",
    backgroundImage: "",
    groomImage: defaultGroom,
    brideImage: defaultBride,
    groomDescription: "Groom description goes here.",
    brideDescription: "Bride description goes here.",
  });

  // Update formData when formDataFromAdmin changes
  useEffect(() => {
    if (formDataFromAdmin) {
      setFormData((prevData) => ({
        ...prevData,
        ...formDataFromAdmin,
      }));
    }
  }, [formDataFromAdmin]);

  // Update countdown timer
  useEffect(() => {
    const targetDate = new Date(formData.weddingDate);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [formData.weddingDate]);

  return (
    <header
      id="fh5co-header"
      className="fh5co-cover"
      role="banner"
      style={{
        backgroundImage: `url(${formData.backgroundImage || defaultBride})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t">
              <div
                className="display-tc animate-box"
                data-animate-effect="fadeIn"
              >
                <h1>
                  {formData.groomName} &amp; {formData.brideName}
                </h1>
                <h2>We Are Getting Married</h2>
                <div className="countdown-timer">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div className="time-box" key={unit}>
                      <span className="time-value">{value}</span>
                      <span className="time-label">
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
                <p>
                  <a href="#" className="btn btn-default btn-sm HeroBTN">
                    Save the date
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSec;
