import React from "react";
import "./ResourcePage.css";

const resources = [
  {
    domain: "Web Development",
    courses: [
      { name: "HTML & CSS for Beginners", link: "https://example.com/html-css" },
      { name: "JavaScript: The Complete Guide", link: "https://example.com/javascript" },
      { name: "React.js Essentials", link: "https://example.com/react" },
    ],
  },
  {
    domain: "Data Science",
    courses: [
      { name: "Python for Data Science", link: "https://example.com/python-ds" },
      { name: "Data Analysis with Pandas", link: "https://example.com/pandas" },
      { name: "Visualization with Matplotlib", link: "https://example.com/matplotlib" },
    ],
  },
  {
    domain: "Cybersecurity",
    courses: [
      { name: "Introduction to Cybersecurity", link: "https://example.com/cybersecurity" },
      { name: "Ethical Hacking Basics", link: "https://example.com/ethical-hacking" },
      { name: "Network Security Fundamentals", link: "https://example.com/network-security" },
    ],
  },
  {
    domain: "Machine Learning",
    courses: [
      { name: "Machine Learning Basics", link: "https://example.com/ml-basics" },
      { name: "Deep Learning with TensorFlow", link: "https://example.com/tensorflow" },
      { name: "Natural Language Processing", link: "https://example.com/nlp" },
    ],
  },
];

const ResourcePage = () => {
  return (
    <div className="resource-container">
      <h1>Available Courses by Domain</h1>
      <div className="resource-grid">
        {resources.map((category, index) => (
          <div key={index} className="resource-card">
            <h2>{category.domain}</h2>
            <ul>
              {category.courses.map((course, courseIndex) => (
                <li key={courseIndex}>
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcePage;
