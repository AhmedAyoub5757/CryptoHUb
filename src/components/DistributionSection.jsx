import React from "react";

const DistributionSection = () => {
  return (
    <section className="w-full py-20 px-6 lg:px-24 bg-white text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Token Distribution
          </h2>
          <img
            src="https://bestwpware.com/html/tf/cryptohub/assets/img/01-Chat.jpg"
            alt="Token Distribution"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Fund Distribution
          </h2>
          <img
            src="https://bestwpware.com/html/tf/cryptohub/assets/img/02-Chat.jpg"
            alt="Fund Distribution"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default DistributionSection;
