import React from "react";

const cards = [
  {
    img: "https://bestwpware.com/html/tf/cryptohub/assets/img/blockchain.png",
    title: "Easy to Use",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
  },
  {
    img: "https://bestwpware.com/html/tf/cryptohub/assets/img/payment.png",
    title: "Make Payments",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
  },
  {
    img: "https://bestwpware.com/html/tf/cryptohub/assets/img/order.png",
    title: "Buy or Sell",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-24 text-center">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Why <span className="underline decoration-blue-400 ">choose</span> us
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 animate-fadeInUp`}
            style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
