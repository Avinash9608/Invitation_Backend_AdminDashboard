import React from 'react';
import Feature1 from '../../assets/feature-1.jpg';
import Feature2 from '../../assets/feature-2.png';

const Icon = ({ iconColor }) => (
  <svg
    className={`flex-shrink-0 w-5 h-5 ${iconColor}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const MidSection = () => {
  return (
    <>
      <div className="BackGroundBG">
      
        <section>
          <div className="max-w-screen-xl mx-auto space-y-12 lg:space-y-20 lg:py-18 lg:px-0">
        
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <div className="text-gray-500 sm:text-lg dark:text-gray-800">
                <h2
                  className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900"
                  data-aos="fade-up"
                >
                  Invitations on Your Finger Tips
                </h2>
                <p className="mb-8 font-light lg:text-xl" data-aos="fade-up">
                  Deliver great Invitation experiences fast - without the
                  complexity of traditional Methods. Accelerate Invitation
                  development work, Cost Effective, and deploy changes with ease.
                </p>
                {/* List */}
                <ul
                  role="list"
                  className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                  <li className="flex space-x-3" data-aos="fade-up">
                    <Icon iconColor="text-red-600 dark:text-red-600" />
                    <span className="text-base font-medium leading-tight text-gray-900">
                      Easy Invitation Creation
                    </span>
                  </li>
                  <li className="flex space-x-3" data-aos="fade-up">
                    <Icon iconColor="text-red-600 dark:text-red-600" />
                    <span
                      className="text-base font-medium leading-tight text-gray-900"
                      data-aos="fade-up"
                    >
                      One Layout, Multiple Invitations
                    </span>
                  </li>
                  <li className="flex space-x-3" data-aos="fade-up">
                    <Icon iconColor="text-red-600 dark:text-red-600" />
                    <span
                      className="text-base font-medium leading-tight text-gray-900"
                      data-aos="fade-up"
                    >
                      Invitation Management
                    </span>
                  </li>
                </ul>
                <p className="mb-8 font-light lg:text-xl" data-aos="fade-up">
                  We deliver great invitation experiences - without the
                  complexity of traditional mediums.
                </p>
              </div>
              <img
                className="w-full mb-4 rounded-lg lg:mb-0 lg:flex h-full sm:mt-4 sm:mb-4 md:max-h-[500px] object-contain"
                src={Feature1}
                alt="Feature 1"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="BackGroundBG3">
        <section className=" ">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <img
                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                src={Feature2}
                alt="Feature 2"
                data-aos="fade-up"
              />
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2
                  className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900"
                  data-aos="fade-up"
                >
                  You invest in the One Platform
                </h2>
                <p className="mb-8 font-light lg:text-xl text-gray-800">
                  We deliver great service experiences fast - without the
                  complexity of traditional solutions. Accelerate Template
                  Creation work, eliminate toil, and send invitations with ease.
                </p>
                
                <ul
                  role="list"
                  className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                  <li className="flex space-x-3" data-aos="fade-up">
                    <Icon iconColor="text-red-600 dark:text-red-600" />
                    <span className="text-base font-medium leading-tight text-gray-900">
                      Dynamic reports and dashboards
                    </span>
                  </li>
                  <li className="flex space-x-3" data-aos="fade-up">
                    <Icon iconColor="text-red-600 dark:text-red-600" />
                    <span className="text-base font-medium leading-tight text-gray-900">
                      Templates for everyone
                    </span>
                  </li>
                  <li className="flex space-x-3" data-aos="fade-up">
                    <Icon iconColor="text-red-600 dark:text-red-600" />
                    <span className="text-base font-medium leading-tight text-gray-900">
                      Development workflow
                    </span>
                  </li>
                  <li className="flex space-x-3" data-aos="fade-up">
                    <Icon iconColor="text-red-600 dark:text-red-600" />
                    <span className="text-base font-medium leading-tight text-gray-900">
                      Limitless business automation
                    </span>
                  </li>
                  <li className="flex space-x-3" data-aos="fade-up">
                    <Icon iconColor="text-red-600 dark:text-red-600" />
                    <span className="text-base font-medium leading-tight text-gray-900">
                      User management
                    </span>
                  </li>
                </ul>
                <p className="font-light lg:text-xl text-gray-800" data-aos="fade-up">
                  Deliver great service experiences fast - without the complexity
                  of traditional solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='BackGroundBG'>
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6 ">
            <div  className="col-span-2 mb-8" data-aos="fade-up">
                <p  className="text-lg font-medium text-red-600 dark:text-red-600" data-aos="fade-up">Trusted Worldwide</p>
                <h2  className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl " data-aos="fade-up">Trusted by over 1000+ users and 5000+ teams</h2>
                <p  className="font-light text-gray-500 sm:text-xl dark:text-gray-400" data-aos="fade-up">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
                <div  className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <a href="#"  className="inline-flex items-center text-base font-medium text-red-600 hover:text-purple-800 dark:text-red-600 dark:hover:text-purple-700" data-aos="fade-up">
                        Explore Legality Guide
                        <svg  className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                    <div>
                      <a href="#"  className="inline-flex items-center text-base font-medium text-red-600 hover:text-purple-800 dark:text-red-600 dark:hover:text-purple-700" data-aos="fade-up">
                          Visit the Trust Center
                          <svg  className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                      </div>
                </div>
            </div>
            <div  className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0" data-aos="fade-up">
                <div>
                    <svg  className="w-10 h-10 mb-2 text-red-600 md:w-12 md:h-12 dark:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
                    <h3  className="mb-2 text-2xl font-bold " data-aos="fade-up">99.99% uptime</h3>
                    <p  className="font-light text-gray-700 dark:text-gray-700" data-aos="fade-up">For Landwind, with zero maintenance downtime</p>
                </div>
                <div>
                    <svg  className="w-10 h-10 mb-2 text-red-600 md:w-12 md:h-12 dark:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                    <h3  className="mb-2 text-2xl font-bold " data-aos="fade-up">1000+ Users</h3>
                    <p  className="font-light text-gray-700 dark:text-gray-700" data-aos="fade-up">Trusted by over 1000 users around the world</p>
                </div>
                <div>
                    <svg  className="w-10 h-10 mb-2 text-red-600 md:w-12 md:h-12 dark:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
                    <h3  className="mb-2 text-2xl font-bold " data-aos="fade-up">100+ countries</h3>
                    <p  className="font-light text-gray-700 dark:text-gray-700" data-aos="fade-up">Have used Landwind to create invitational Template</p>
                </div>
                <div>
                    <svg  className="w-10 h-10 mb-2 text-red-600 md:w-12 md:h-12 dark:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" data-aos="fade-up"></path></svg>
                    <h3  className="mb-2 text-2xl font-bold " data-aos="fade-up">500+ Users</h3>
                    <p  className="font-light text-gray-700 dark:text-gray-700" data-aos="fade-up">Invitation Sent per day</p>
                </div>
            </div>
        </div>
        </div>
   
    </>
  );
};

export default MidSection;
