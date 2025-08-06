import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Marina Mojo",
    title: "Crypto Developer",
    img: "https://bestwpware.com/html/tf/cryptohub/assets/img/team/1.jpg",
  },
  {
    name: "Ayoub Fennouni",
    title: "Crypto Expert",
    img: "https://bestwpware.com/html/tf/cryptohub/assets/img/team/2.jpg",
  },
  {
    name: "Crypto Marketer",
    title: "Crypto Marketer",
    img: "https://bestwpware.com/html/tf/cryptohub/assets/img/team/3.jpg",
  },
  {
    name: "Crypto Designer",
    title: "Crypto Designer",
    img: "https://bestwpware.com/html/tf/cryptohub/assets/img/team/4.jpg",
  },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      className="w-full py-20 px-4 md:px-16 bg-white"
      id="team"
      data-aos="fade-up"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet the Experts</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-500 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-stretch bg-white">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center p-4 group"
            data-aos="fade-up"
            data-aos-delay={index * 150} // staggered animation
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl  -rotate-3 mb-1 group-hover:rotate-0 transition duration-300">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{member.title}</p>

            <div className="flex space-x-3">
              {[FaFacebookF, FaTwitter, FaGooglePlusG].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10  bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-blue-900 hover:text-white transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
