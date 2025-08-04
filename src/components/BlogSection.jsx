import React from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const blogData = [
  {
    img: "https://bestwpware.com/html/tf/cryptohub/assets/img/blog/blog-img-1.jpg",
    date: "Aug 4, 2025",
    author: "Admin",
    title: "Digital currency that can be used to buy goods and services",
  },
  {
    img: "https://bestwpware.com/html/tf/cryptohub/assets/img/blog/blog-img-2.jpg",
    date: "Aug 1, 2025",
    author: "Admin",
    title: "Digital or virtual currency that is secured by cryptography",
  },
  {
    img: "https://bestwpware.com/html/tf/cryptohub/assets/img/blog/blog-img-3.jpg",
    date: "July 28, 2025",
    author: "Admin",
    title: "Cryptocurrency is a type of digital currency that generally only exists",
  },
];

const BlogSection = () => {
  return (
    <section className="px-4 md:px-20 py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Latest Blog</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 mb-4 rounded-full"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover insights, news, and trends from the world of cryptocurrency.
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Stay updated with the latest developments in blockchain and finance.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.img}
              alt="blog"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaUser />
                  <span>{blog.author}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
