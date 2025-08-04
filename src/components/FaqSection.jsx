import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const tabs = ["Development", "Design", "Compatibility"];
const faqData = [
  {
    question: "What is crypto current?",
    answer:
      "Cryptocurrency is a digital or virtual currency secured by cryptography. It uses blockchain technology to ensure transparency and immutability.",
  },
  {
    question: "What are the best cryptocurrencies to buy?",
    answer:
      "Some of the most popular cryptocurrencies include Bitcoin, Ethereum, Binance Coin, and Solana. Always do your own research before investing.",
  },
  {
    question: "How to buy cryptocurrency?",
    answer:
      "You can buy cryptocurrency through exchanges like Binance, Coinbase, and others using fiat or other digital assets.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Refunds depend on the exchange platform. Most crypto transactions are irreversible, so always double-check before transferring.",
  },
];

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("Development");
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 md:px-20 py-16 bg-white" id='faq'>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 mb-4 rounded-full"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Suspendisse potenti. Curabitur eleifend, est a laoreet.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeTab === tab ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm p-4"
          >
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-base font-medium text-gray-800">{faq.question}</span>
              <span className="text-gray-500">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-3 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
