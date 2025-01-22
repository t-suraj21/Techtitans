import React from "react";
import { Search } from "lucide-react";
import "./HomePage.css";
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
          {/* Tech News */}
          <a href="/technews" className="feature">
            <img src="./home/technews.png" alt="Tech News" />
            <p>TechNews</p>
          </a>

          {/* Emails */}
          <a href="#" className="feature">
            <img src="./home/email.png" alt="Emails" />
            <p>Counsellor</p>
          </a>

          {/* Internships */}
          <a href="/Internship" className="feature">
            <img src="./home/internships.png" alt="Internships" />
            <p>Internships</p>
          </a>

          {/* Schedules */}
          <a href="#" className="feature">
            <img src="./home/schedules.png" alt="Schedules" />
            <p>Schedules</p>
          </a>

          {/* Resources */}
          <a href="#" className="feature">
            <img src="./home/resources.png" alt="Resources" />
            <p>Resources</p>
          </a>
        </div>

        <div className="social-links-container">
          <h3 className="social-links-heading">Follow us on:</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-link" target="_blank">
              <img src="./home/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" className="social-link" target="_blank">
              <img src="./home/twitter.png" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://instagram.com" className="social-link" target="_blank">
              <img src="./home/instagram.png" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
