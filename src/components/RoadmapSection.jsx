import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRocket, FaUsers, FaLightbulb, FaLaptopCode, FaBug, FaCheck } from "react-icons/fa";

const roadmapData = [
  {
    date: "May 2024",
    title: "TEAM FORMATION",
    description: "Assembling the core team and defining roles.",
    icon: <FaUsers />,
  },
  {
    date: "Jun 2024",
    title: "PROJECT CONCEPT",
    description: "Defining the project's mission and technical goals.",
    icon: <FaLightbulb />,
  },
  {
    date: "Jul 2024",
    title: "UI/UX DESIGN",
    description: "Designing clean and user-friendly interfaces.",
    icon: <FaLaptopCode />,
  },
  {
    date: "Aug 2024",
    title: "DEVELOPMENT START",
    description: "Building core features and backend services.",
    icon: <FaRocket />,
  },
  {
    date: "Sep 2024",
    title: "BETA LAUNCH",
    description: "Internal testing and public beta rollout.",
    icon: <FaBug />,
  },
  {
    date: "Oct 2024",
    title: "OFFICIAL RELEASE",
    description: "Project officially goes live to the public.",
    icon: <FaCheck />,
  },
];

const Roadmap = () => {
  return (
    <section className="w-full bg-white py-20 px-4 lg:px-24" id="roadmap">
      <h2 className="text-4xl font-bold text-center text-gray-800 font-sans mb-4">The Roadmap</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna.
      </p>

      <VerticalTimeline lineColor="#9333ea">
        {roadmapData.map((step, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={step.date}
            iconStyle={{ background: "#9333ea", color: "#fff" }}
            icon={step.icon}
            contentStyle={{ background: "#f9f9f9", color: "#333" }}
            contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}
          >
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p>{step.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Roadmap;
