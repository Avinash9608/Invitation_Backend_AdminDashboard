import React, { useState } from 'react';

const TemplateMid = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-700">
              Fully customizable rules to match your unique needs
            </h2>

            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              {/* Tab 1 */}
              <button
                type="button"
                className={`p-4 md:p-5 rounded-xl text-start hover:bg-gray-200 focus:outline-none ${
                  activeTab === 'tab1' ? 'bg-white shadow-md' : ''
                }`}
                onClick={() => setActiveTab('tab1')}
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-gray-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold">
                      Advanced tools
                    </span>
                    <span className="block mt-1">
                      Use Preline's thought-out libraries to manage businesses.
                    </span>
                  </span>
                </span>
              </button>

              {/* Tab 2 */}
              <button
                type="button"
                className={`p-4 md:p-5 rounded-xl text-start hover:bg-gray-200 focus:outline-none ${
                  activeTab === 'tab2' ? 'bg-white shadow-md' : ''
                }`}
                onClick={() => setActiveTab('tab2')}
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-gray-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path d="m12 14 4-4" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold">
                      Smart dashboards
                    </span>
                    <span className="block mt-1">
                      Quickly sample components and copy-paste codes.
                    </span>
                  </span>
                </span>
              </button>

              {/* Tab 3 */}
              <button
                type="button"
                className={`p-4 md:p-5 rounded-xl text-start hover:bg-gray-200 focus:outline-none ${
                  activeTab === 'tab3' ? 'bg-white shadow-md' : ''
                }`}
                onClick={() => setActiveTab('tab3')}
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-gray-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold">
                      Seamless integration
                    </span>
                    <span className="block mt-1">
                      Easily integrate with other tools for enhanced productivity.
                    </span>
                  </span>
                </span>
              </button>
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div>
              {activeTab === 'tab1' && (
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl"
                  src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?auto=format&fit=crop&w=560&h=720&q=80"
                  alt="Advanced tools"
                />
              )}
              {activeTab === 'tab2' && (
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl"
                  src="https://images.unsplash.com/photo-1665686306574-1ace09918530?auto=format&fit=crop&w=560&h=720&q=80"
                  alt="Smart dashboards"
                />
              )}
              {activeTab === 'tab3' && (
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl"
                  src="https://images.unsplash.com/photo-1665686306574-1ace09918530?auto=format&fit=crop&w=560&h=720&q=80"
                  alt="Seamless integration"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center h-screen">
   
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-3/4 p-12">
  <a className="group block relative overflow-hidden rounded-lg" href="#">
    <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project"/>
    <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
      <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
        <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span className="text-xs">View</span>
      </div>
    </div>
  </a>

  <a className="group block relative overflow-hidden rounded-lg" href="#">
    <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project"/>
    <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
      <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
        <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span className="text-xs">View</span>
      </div>
    </div>
  </a>

  <a className="group block relative overflow-hidden rounded-lg" href="#">
    <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project"/>
    <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
      <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
        <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span className="text-xs">View</span>
      </div>
    </div>
  </a>

  <a className="group block relative overflow-hidden rounded-lg" href="#">
    <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project"/>
    <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
      <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
        <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span className="text-xs">View</span>
      </div>
    </div>
  </a>

  <a className="group block relative overflow-hidden rounded-lg" href="#">
    <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1585159812596-fac104f2f069?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project"/>
    <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
      <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
        <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span className="text-xs">View</span>
      </div>
    </div>
  </a>

  <a className="group block relative overflow-hidden rounded-lg" href="#">
    <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1654131300276-db70adf4f85d?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project"/>
    <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
      <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
        <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span className="text-xs">View</span>
      </div>
    </div>
  </a>
</div>

    </div>
    
    </>
  );
};

export default TemplateMid;
