import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./components/NavBar";
import AuthPage from "./components/AuthPage";
import ProfilePage from "./components/ProfilePage"; // Include the profile page component
import "./App.css";


const App = () => {
    const [users, setUsers] = useState([]); // Store registered users
    const [currentUser, setCurrentUser] = useState(null); // Track the logged-in user
    const [showAuthPage, setShowAuthPage] = useState(false); // Toggle AuthPage
    const [showProfilePage, setShowProfilePage] = useState(false); // Toggle ProfilePage

    const handleOpenAuthPage = () => {
    setShowAuthPage(true);
};

    // Handle user registration
    const handleRegister = (newUser) => {
        if (users.some((user) => user.email === newUser.email)) {
            alert("Email is already registered. Please use a different email.");
            return;
        }

        setUsers([...users, newUser]);
        alert("User registered successfully!");
        setShowAuthPage(false); // Close AuthPage after successful registration
    };

    // Handle user login
    const handleLogin = (user) => {
        setCurrentUser(user);
        alert(`Welcome, ${user.email}!`);
        setShowAuthPage(false); // Close AuthPage after successful login
        setShowProfilePage(true); // Show profile page after login
    };

    // Handle user logout
    const handleLogout = () => {
        setCurrentUser(null);
        setShowProfilePage(false); // Hide profile page on logout
        alert("You have been logged out.");
    };

    

    return (
        <div className="app-container">
            {/* Navbar */}
            <NavBar 
                onRegisterClick={handleOpenAuthPage} 
                onLogout={handleLogout} 
                isLoggedIn={!!currentUser} 
                onProfileClick={() => setShowProfilePage(true)} 
            />

            {/* Main Content */}
            {showAuthPage ? (
                <AuthPage onRegister={handleRegister} onLogin={handleLogin} users={users} />
            ) : showProfilePage && currentUser ? (
                <ProfilePage user={currentUser} />
            ) : (
                <div className="welcome-container">
                    <h1>Welcome to Campus Buzz!</h1>
                    <p>Please register or login to access features.</p>
                </div>
            )}
        </div>
    );
};

// Mount the app
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
export default App;
