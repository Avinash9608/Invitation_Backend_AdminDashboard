// import React from "react";
// import { useEffect } from "react";
// import Navbar from "../LandingPage/Navbar";
// import TemplateMid from "./TemplateMid";
// import Footer from "../LandingPage/Footer";
// import FAQSection from "../LandingPage/Faq";

// const WebPageTemplate = () => {
//   return (
//     <>
//       <div className="w-full bg-blue-200 p-4 pt-[var(--navbar-height)]">
//         <div className="p-10 sm:p-10 m-5 rounded-3xl  dark:text-white bg-white text-black flex items-center justify-center overflow-hidden shadow-2xl">
//           <div className="w-full max-w-6xl px-4 sm:px-6">
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//               <div className="flex flex-col justify-center text-center md:text-left z-10">
//                 <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-black uppercase leading-tight tracking-tight">
//                   Design with <span className="text-red-500">Impact</span>
//                 </h1>
//                 <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-400 dark:text-gray-600 text-gray-700 text-balance">
//                   Brutal aesthetics for a bold web presence. Build without
//                   compromise.
//                 </p>
//                 <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
//                   <a
//                     href="#get-started"
//                     className="rounded-sm p-3 grow text-center bg-red-400 text-white font-bold uppercase text-sm tracking-widest hover:bg-red-600 transition"
//                   >
//                     Get Started
//                   </a>
//                   <a
//                     href="#learn-more"
//                     className="rounded-sm p-3 grow border text-center border-red-500 text-red-500 font-bold uppercase text-sm tracking-widest hover:bg-red-500 hover:text-white hover:text-black transition"
//                   >
//                     Learn More
//                   </a>
//                 </div>
//               </div>

//               <div className="relative flex items-center sm:m-10">
//                 <div className="absolute -top-10 md:-top-20 -left-10 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-red-500 rotate-12 rounded-lg border-red-700 border-b-4 border-r-8 max-sm:hidden"></div>
//                 <div className="relative z-10 bg-gray-800 dark:bg-gray-800 p-4 sm:p-6 -right-1/2 -translate-x-1/2 grow text-center shadow-2xl -rotate-2 rounded-xl text-nowrap border-slate-950 border-b-4 border-r-8">
//                   <h2 className="text-2xl sm:text-3xl font-bold uppercase text-gray-50 dark:text-gray-50">
//                     Design, Share and Invite
//                   </h2>
//                   <p className="mt-1 text-sm sm:text-base font-light text-gray-400 dark:text-gray-400">
//                     Embrace minimalism with maximal impact.
//                   </p>
//                 </div>
//                 <div className="absolute -bottom-10 md:-bottom-20 -right-16 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-red-500 -rotate-12 rounded-lg border-red-700 border-r-4 border-b-8 max-sm:hidden"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <TemplateMid />
//       <FAQSection />
//     </>
//   );
// };

// export default WebPageTemplate;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplateMid from "./TemplateMid";
import FAQSection from "../LandingPage/Faq";

const WebPageTemplate = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (using token or session validation)
    const checkLoginStatus = () => {
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(!!token); // Update state based on token presence
    };
    checkLoginStatus();
  }, []);

  const handleGetStartedClick = () => {
    if (isLoggedIn) {
      navigate("/templateFrontend"); // Redirect to the templates page
    } else {
      navigate("/login"); // Redirect to login page
    }
  };

  return (
    <>
      <div className="w-full bg-blue-200 p-4 pt-[var(--navbar-height)]">
        <div className="p-10 sm:p-10 m-5 rounded-3xl dark:text-white bg-white text-black flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="w-full max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center text-center md:text-left z-10">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-black uppercase leading-tight tracking-tight">
                  Design with <span className="text-red-500">Impact</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-400 dark:text-gray-600 text-gray-700">
                  Brutal aesthetics for a bold web presence. Build without
                  compromise.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={handleGetStartedClick}
                    className="rounded-sm p-3 grow text-center bg-red-400 text-white font-bold uppercase text-sm tracking-widest hover:bg-red-600 transition"
                  >
                    Get Started
                  </button>
                  <a
                    href="#learn-more"
                    className="rounded-sm p-3 grow border text-center border-red-500 text-red-500 font-bold uppercase text-sm tracking-widest hover:bg-red-500 hover:text-white hover:text-black transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              {/* Decorative Elements */}
            </div>
          </div>
        </div>
      </div>
      <TemplateMid />
      <FAQSection />
    </>
  );
};

export default WebPageTemplate;
