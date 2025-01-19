import React from "react";
import "./internship.css";

const internshipWebsites = [
  { name: "Internshala", url: "https://internshala.com" },
  { name: "LinkedIn Internships", url: "https://www.linkedin.com/internships" },
  { name: "AngelList", url: "https://angel.co" },
  { name: "Glassdoor Internships", url: "https://www.glassdoor.com/Internships" },
  { name: "Indeed Internships", url: "https://www.indeed.com/q-Internships-jobs.html" },
  { name: "WayUp", url: "https://www.wayup.com" },
  { name: "Handshake", url: "https://joinhandshake.com" },
  { name: "Google Internships", url: "https://careers.google.com/internships/" },
  { name: "Microsoft Internships", url: "https://careers.microsoft.com/students/us/en/us-internship" },
  { name: "IBM Internships", url: "https://www.ibm.com/employment/internships/" },
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
          >
            {website.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Internship;
