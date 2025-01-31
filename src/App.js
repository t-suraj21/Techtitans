import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { createRoot } from "react-dom/client";
import NavBar from "./components/NavBar";
import AuthPage from "./components/AuthPage";
import ProfilePage from "./components/Profile Page";
import TechNewsFeed from "./components/technews";
import Internship from "./components/Intership";
import Homepage from "./components/Homepage"; // Import Homepage component
import Resources from "./components/Resources"; // Import Resources component
import "./App.css";


const App = () => {
  const [users, setUsers] = useState([]); // Store registered users
  const [currentUser, setCurrentUser] = useState(null); // Track the logged-in user

  // Handle user registration
  const handleRegister = (newUser) => {
    if (users.some((user) => user.email === newUser.email)) {
      alert("Email is already registered. Please use a different email.");
      return;
    }
    setUsers([...users, newUser]);
    alert("User registered successfully!");
  };

  // Handle user login
  const handleLogin = (user) => {
    setCurrentUser(user);
    alert(`Welcome, ${user.email}!`);
  };

  // Handle user logout
  const handleLogout = () => {
    setCurrentUser(null);
    alert("You have been logged out.");
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <NavBar
          onRegisterClick={() => (window.location.href = "/auth")}
          onLogout={handleLogout}
          isLoggedIn={!!currentUser}
          onProfileClick={() => (window.location.href = "/profile")}
          onNewsFeedClick={() => (window.location.href = "/technews")}
          onInternshipClick={() => (window.location.href = "/internship")}
          onResourcesClick={() => (window.location.href = "/resources")} // Add Resources click
        />

        {/* Routes */}
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Tech News Feed */}
          <Route path="/technews" element={<TechNewsFeed />} />

          {/* Internship Page */}
          <Route path="/internship" element={<Internship />} />

          {/* Profile Page */}
          <Route
            path="/profile"
            element={
              currentUser ? <ProfilePage user={currentUser} /> : <Navigate to="/" />
            }
          />

          {/* Auth Page */}
          <Route
            path="/auth"
            element={
              <AuthPage
                onRegister={handleRegister}
                onLogin={handleLogin}
                users={users}
              />
            }
          />

          {/* Resources Page */}
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
};

// Mount the app
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
