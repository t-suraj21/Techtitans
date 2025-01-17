import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const AuthPage = ({ onLogin }) => {
    const [isRegisterMode, setIsRegisterMode] = useState(true);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isRegisterMode) {
            if (!fullName || !email || !password || !confirmPassword) {
                alert('Please fill in all fields.');
                return;
            }
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Register API Call
            try {
                const response = await axios.post('http://localhost:5001/register', {
                    email,
                    password,
                });
                alert(response.data.message); // Show success message from the backend
                setFullName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } catch (error) {
                alert(error.response?.data?.message || 'Registration failed. Try again.');
            }
        } else {
            // Login API Call
            try {
                const response = await axios.post('http://localhost:5001/login', {
                    email,
                    password,
                });
                alert(response.data.message); // Show success message from the backend
                onLogin(response.data.user); // Pass the user data to the parent component
            } catch (error) {
                alert(error.response?.data?.message || 'Login failed. Try again.');
            }
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-left">
                    <h1 className="title">Hey Users!</h1>
                    <p className="subtitle">{isRegisterMode ? 'Create your account' : 'Login to your account'}</p>

                    <div className="toggle-buttons">
                        <button
                            className={isRegisterMode ? 'active' : ''}
                            onClick={() => setIsRegisterMode(true)}
                        >
                            Register
                        </button>
                        <button
                            className={!isRegisterMode ? 'active' : ''}
                            onClick={() => setIsRegisterMode(false)}
                        >
                            Login
                        </button>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        {isRegisterMode && (
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                        )}
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {isRegisterMode && (
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        )}
                        <button type="submit" className="submit-button">
                            {isRegisterMode ? 'Create Account' : 'Login'}
                        </button>
                    </form>
                </div>
                <div className="auth-right">
                    <img src="xyz.jpg" alt="Auth Image" className="auth-image" />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
