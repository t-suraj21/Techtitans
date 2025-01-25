import React from "react";
import { Search } from "lucide-react";
import "./HomePage.css";

// Sample data for TechNews, Internships, and Resources
const techNews = [
  { title: "AI Revolution in 2025", link: "/technews/ai-revolution" },
  { title: "Top Programming Trends", link: "/technews/programming-trends" },
  { title: "Future of Web Development", link: "/technews/web-future" },
];

const internships = [
  { name: "Google Software Internship", link: "/internship/google" },
  { name: "Microsoft AI Research Internship", link: "/internship/microsoft" },
  { name: "Tesla Engineering Internship", link: "/internship/tesla" },
];

const resources = [
  { name: "ReactJS Documentation", link: "/resources/reactjs" },
  { name: "JavaScript Tutorials", link: "/resources/javascript" },
  { name: "Web Development Guide", link: "/resources/web-dev" },
];

const extendedInternships = [
  { name: "Internshala", link: "https://internshala.com" },
  { name: "LinkedIn Internships", link: "https://www.linkedin.com/internships" },
  { name: "Google Internships", link: "https://careers.google.com/internships/" },
];

const extendedTechNews = [
  { title: "Advancements in Quantum Computing", link: "/technews/quantum-computing" },
  { title: "The Rise of Open Source AI", link: "/technews/open-source-ai" },
  { title: "Cybersecurity Challenges in 2025", link: "/technews/cybersecurity-2025" },
];

const extendedResources = [
  { name: "HTML & CSS for Beginners", link: "https://example.com/html-css" },
  { name: "Python for Data Science", link: "https://example.com/python-ds" },
  { name: "Machine Learning Basics", link: "https://example.com/ml-basics" },
];

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 text-white homepage">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-8 px-4 homepage-content">
        {/* Tagline */}
        <h2 className="text-2xl text-center mb-8 homepage-tagline">LET'S GROW TOGETHER</h2>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-16 search-bar">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm"
            placeholder="Search..."
          />
          <Search className="absolute right-4 top-3 text-gray-300 search-btn hover:text-white" />
        </div>

        {/* Features Section */}
        <div className="features">
          <a href="/technews" className="feature">
            <img src="./home/technews.png" alt="Tech News" />
            <p>TechNews</p>
          </a>
          <a href="#" className="feature">
            <img src="./home/email.png" alt="Emails" />
            <p>Counsellor</p>
          </a>
          <a href="/Internship" className="feature">
            <img src="./home/internships.png" alt="Internships" />
            <p>Internships</p>
          </a>
          <a href="#" className="feature">
            <img src="./home/schedules.png" alt="Schedules" />
            <p>Schedules</p>
          </a>
          <a href="/Resources" className="feature">
            <img src="./home/resources.png" alt="Resources" />
            <p>Resources</p>
          </a>
          <a href="/chatbot" className="feature">
            <img src="./home/chatbot.png" alt="Chatbot" />
            <p>Chatbot</p>
          </a>
        </div>

        {/* TechNews Section */}
        <div className="latest-section">
          <h3 className="section-title">Latest Tech News</h3>
          <ul className="list">
            {[...techNews, ...extendedTechNews].map((news, index) => (
              <li key={index} className="list-item">
                <a href={news.link} className="list-link">
                  {news.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Internship Section */}
        <div className="latest-section">
          <h3 className="section-title">Top Internship Opportunities</h3>
          <ul className="list">
            {[...internships, ...extendedInternships].map((internship, index) => (
              <li key={index} className="list-item">
                <a href={internship.link} className="list-link">
                  {internship.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div className="latest-section">
          <h3 className="section-title">Top Learning Resources</h3>
          <ul className="list">
            {[...resources, ...extendedResources].map((resource, index) => (
              <li key={index} className="list-item">
                <a href={resource.link} className="list-link">
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="social-links-container">
          <h3 className="social-links-heading">Follow us on:</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src="./home/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src="./home/twitter.png" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src="./home/instagram.png" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
