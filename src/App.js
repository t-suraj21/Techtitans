import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './components/NavBar';
import AuthPage from './components/AuthPage';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]); // Store registered users
    const [currentUser, setCurrentUser] = useState(null); // Track the logged-in user
    const [showAuthPage, setShowAuthPage] = useState(false); // Control whether to show AuthPage

    const handleRegister = (newUser) => {
        // Check if the email is already registered
        if (users.some(user => user.email === newUser.email)) {
            alert('Email is already registered. Please use a different email.');
            return;
        }

        setUsers([...users, newUser]);
        alert('User registered successfully!');
        setShowAuthPage(false); // Close AuthPage after successful registration
    };

    const handleLogin = (user) => {
        setCurrentUser(user);
        alert(`Welcome, ${user.email}!`);
        setShowAuthPage(false); // Close AuthPage after successful login
    };

    const handleLogout = () => {
        setCurrentUser(null);
        alert('You have been logged out.');
    };

    const handleOpenAuthPage = () => {
        setShowAuthPage(true);
    };

    return (
        <div className="app-container">
            <NavBar onRegisterClick={handleOpenAuthPage} />
            {showAuthPage ? (
                <AuthPage onRegister={handleRegister} onLogin={handleLogin} users={users} />
            ) : currentUser ? (
                <div className="welcome-container">
                    <h1>Welcome, {currentUser.email}!</h1>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <h1>Please Register or Login</h1>
            )}
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
export default App;