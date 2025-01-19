
import React from "react";
import { Search } from "lucide-react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 text-white homepage">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 homepage-header">
        {/* Campus Buzz Logo and Text */}
        <div className="flex items-center gap-3 homepage-logo">
          <img
            src="./home/campus-buzz-logo.png"
            alt="Campus Buzz Logo"
            className="w-12 h-12 logo-icon"
          />
          <h1 className="text-3xl font-light homepage-title">Campus Buzz</h1>
        </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4 homepage-nav">
          <button className="px-4 py-2 bg-blue-800/50 rounded nav-btn">Home</button>
          <button className="px-4 py-2 bg-blue-800/50 rounded nav-btn">College News</button>
          <button className="px-4 py-2 bg-blue-800/50 rounded nav-btn">Feedback</button>
          <img
            src="./home/profile-image.png"
            alt="User Profile"
            className="w-10 h-10 bg-gray-400 rounded-full user-icon"
          />
        </div>
      </nav>

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
  <div className="feature">
    <img src="./home/technews.png" alt="Tech News" />
    <p>TechNews</p>
  </div>

  {/* Emails */}
  <div className="feature">
    <img src="./home/email.png" alt="Emails" />
    <p>Emails</p>
  </div>

  {/* Internships */}
  <div className="feature">
    <img src="./home/internships.png" alt="Internships" />
    <p>Internships</p>
  </div>

  {/* Schedules */}
  <div className="feature">
    <img src="./home/schedules.png" alt="Schedules" />
    <p>Schedules</p>
  </div>

  {/* Resources */}
  <div className="feature">
    <img src="./home/resources.png" alt="Resources" />
    <p>Resources</p>
  </div>
</div>

        <div class="social-links-container">
    <h3 class="social-links-heading">Follow us on:</h3>
    <div class="social-icons">
        <a href="https://facebook.com" class="social-link" target="_blank">
            <img src="./home/facebook.png" alt="Facebook" class="social-icon" />
        </a>
        <a href="https://twitter.com" class="social-link" target="_blank">
            <img src="./home/twitter.png" alt="Twitter" class="social-icon" />
        </a>
        <a href="https://instagram.com" class="social-link" target="_blank">
            <img src="./home/instagram.png" alt="Instagram" class="social-icon" />
        </a>
    </div>
</div> 

         
      </main>
    </div>
  );
};

export default Homepage;

