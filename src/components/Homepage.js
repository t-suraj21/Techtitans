import React from "react";
import "./HomePage.css";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-blue-100 text-gray-900 homepage">
      {/* Hero Section */}
      <section className="hero flex flex-col md:flex-row items-center justify-between px-10 py-20">
        {/* Left Side Content */}
        <div className="max-w-xl text-left animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Invest in Your Career. Build Real Experience.</h1>
          <p className="text-lg text-gray-700 max-w-lg mb-6">
            Work on remote projects to get real professional experience and stand out in the job market.
          </p>
          <a href="/apply" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Apply Now
          </a>
        </div>

        {/* Right Side Logo Box */}
        <div className="logo-box">
          <div className="logo-grid">
            {["logo1.png", "logo2.png", "logo3.jpg", "logo4.jpg", "logo5.png", "logo6.png"].map((logo, index) => (
              <div key={index}>
                <img src={`/assets/${logo}`} alt={`Logo ${index + 1}`} className="w-14 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="agenda px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fade-in">
          Campus Buzz is your one-stop platform for staying informed about university news, tech advancements, and career opportunities.
          Our goal is to create a bridge between students and valuable resources that enhance their academic and professional journey.
        </p>
      </section>

      {/* Features Section */}
      <section className="features grid grid-cols-2 md:grid-cols-3 gap-6 px-8 py-16 text-center animate-slide-up">
        {[
          { link: "/technews", img: "technews.png", title: "Tech News" },
          { link: "#", img: "counsellor.png", title: "Counsellor" },
          { link: "/Internship", img: "internships.png", title: "Internships" },
          { link: "#", img: "schedules.png", title: "Events" },
          { link: "/Resources", img: "resources.png", title: "Resources" },
          { link: "/chatbot", img: "chatbot.png", title: "Chatbot" },
        ].map((feature, index) => (
          <a key={index} href={feature.link} className="feature flex flex-col items-center gap-2">
            <img src={`/home/${feature.img}`} alt={feature.title} className="w-20 h-20 object-contain" />
            <p className="text-lg font-medium">{feature.title}</p>
          </a>
        ))}
      </section>

      {/* Motion Graphics Section */}
      <section className="motion-graphics py-16 text-center animate-fade-in">
        <h2 className="text-3xl font-semibold mb-6">Explore, Learn & Grow</h2>
        <div className="flex justify-center">
          <img src="/home/motion-graphic.gif" alt="Engaging Motion" className="w-3/4 md:w-1/2 object-contain" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer px-8 py-12 text-center bg-blue-800 text-white">
        <p>&copy; 2025 Campus Buzz. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;