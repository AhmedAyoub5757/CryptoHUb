import React from "react";

const presaleData = [
  { title: "Private PreSale", date: "Aug 25, 2025", bg: "bg-[#0d43b5]" },
  { title: "PreSale", date: "Sep 01, 2025", bg: "bg-[#1597bb]" },
  { title: "Crowdsale", date: "Sep 08, 2025", bg: "bg-[#800080]" },
  { title: "Low - High ", date: "Sep 15, 2025", bg: "bg-[#7868e6]" },
  { title: "Total Token Sale ", date: "Sep 22, 2025", bg: "bg-[#ff0066d9]" },
  { title: "Acceptable Currency", date: "Sep 29, 2025", bg: "bg-[#00008b]" },
];

const PreSaleSection = () => {
  return (
    <section className="w-full py-10 px-6 lg:px-24 bg-white text-center" id="presale">
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="underline decoration-blue-500">Pre-Sale</span>
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {presaleData.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-[128px] p-8 shadow-md hover:shadow-xl transition duration-300`}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-white text-sm">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreSaleSection;
