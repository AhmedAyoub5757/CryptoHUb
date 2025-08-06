import React, { useState } from 'react';

// The main App component that contains the entire UI
const App = () => {
  // State to manage the active tab. 'Development' is the default active tab.
  const [activeTab, setActiveTab] = useState('Development');

  // State to manage which FAQ item is currently open.
  // Using a number to store the index of the open item, -1 means none are open.
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  // Data for the FAQ questions and answers
  const faqs = [
    {
      question: 'What is cryptocurrency?',
      answer: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.'
    },
    {
      question: 'What are the best cryptocurrency for buy?',
      answer: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.'
    },
    {
      question: 'How to buy cryptocurrency?',
      answer: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.'
    },
    {
      question: 'What is the refund policy?',
      answer: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.'
    },
  ];

  // Function to handle opening and closing FAQ items
  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  // The ArrowDown icon from lucide-react, styled as an SVG
  const ArrowDownIcon = ({ isOpen }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8 font-['Inter']" id='faq'>
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h1>
          <p className="text-gray-500 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
        </div>

        {/* Tab Navigation Section */}
        <div className="flex justify-center mb-12">
          {['Development', 'Design', 'Compatibility'].map((tab) => (
            <button
              key={tab}
              className={`
                px-6 py-2 text-lg font-medium  transition-colors duration-200 ease-in-out
                ${activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
                }
                ${tab === 'Development' ? 'mr-2' : ''}
                ${tab === 'Design' ? 'mx-2' : ''}
                ${tab === 'Compatibility' ? 'ml-2' : ''}
              `}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md cursor-pointer p-6 transition-all duration-300 ease-in-out"
              onClick={() => handleFaqToggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <ArrowDownIcon isOpen={openFaqIndex === index} />
              </div>
              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openFaqIndex === index
                    ? 'max-h-96 opacity-100 mt-4'
                    : 'max-h-0 opacity-0'
                  }
                `}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
