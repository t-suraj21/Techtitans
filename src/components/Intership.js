import React from "react";
import "./internship.css";

const internshipWebsites = [
  {
    name: "Internshala",
    url: "https://internshala.com",
    description:
      "A platform offering internships across diverse fields with training courses to boost your skills.",
    logo: "./logos/internshala.png",
  },
  {
    name: "LinkedIn Internships",
    url: "https://www.linkedin.com/internships",
    description:
      "A global platform to showcase your professional profile and find internships matching your goals.",
    logo: "./logos/linkedin.png",
  },
  {
    name: "AngelList",
    url: "https://angel.co",
    description:
      "Connects you with innovative startups offering exciting opportunities, sometimes with stock options.",
    logo: "./logos/angellist.png",
  },
  {
    name: "Glassdoor Internships",
    url: "https://www.glassdoor.com/Internships",
    description:
      "Find internships with detailed company reviews and salary insights for informed decisions.",
    logo: "./logos/glassdoor.png",
  },
  {
    name: "Indeed Internships",
    url: "https://www.indeed.com/q-Internships-jobs.html",
    description:
      "Search engine with powerful filters and insights to help you find the perfect internship.",
    logo: "./logos/indeed.png",
  },
  {
    name: "WayUp",
    url: "https://www.wayup.com",
    description:
      "A platform designed for students and recent grads, offering internships and entry-level jobs.",
    logo: "./logos/wayup.png",
  },
  {
    name: "Handshake",
    url: "https://joinhandshake.com",
    description:
      "Built for college students, discover internships aligned with your major and goals.",
    logo: "./logos/handshake.png",
  },
  {
    name: "Google Internships",
    url: "https://careers.google.com/internships/",
    description:
      "Work on cutting-edge technologies like AI and cloud computing with access to world-class mentorship.",
    logo: "./logos/google.png",
  },
  {
    name: "Microsoft Internships",
    url: "https://careers.microsoft.com/students/us/en/us-internship",
    description:
      "Internships across software, research, and business fields with impactful projects.",
    logo: "./logos/microsoft.png",
  },
  {
    name: "IBM Internships",
    url: "https://www.ibm.com/employment/internships/",
    description:
      "Focuses on emerging tech like AI and quantum computing, offering mentorship and hackathons.",
    logo: "./logos/ibm.png",
  },
];

const Internship = () => {
  return (
    <div className="internship-container">
      <h1>Explore Internship Opportunities</h1>
      <div className="internship-grid">
        {internshipWebsites.map((website, index) => (
          <a
            key={index}
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="internship-card"
            title={website.description} // Tooltip for description
          >
            <img src={website.logo} alt={`${website.name} Logo`} className="internship-logo" />
            <span>{website.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Internship;
