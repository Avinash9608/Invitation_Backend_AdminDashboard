import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase.' },
    { question: 'How do I track my order?', answer: 'You can track your order through the tracking link sent to your email.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we offer worldwide shipping with additional fees.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we offer worldwide shipping with additional fees.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we offer worldwide shipping with additional fees.' },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10">
        {/* FAQ Heading */}
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
              Frequently<br />asked questions
            </h2>
            <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-600">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="md:col-span-3">
          <div className="divide-y divide-gray-600 dark:divide-neutral-700">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full text-left font-medium text-gray-800 hover:text-blue-600 dark:text-gray-700 dark:hover:text-blue-400"
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-gray-600 dark:text-neutral-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
