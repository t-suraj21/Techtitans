import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const AuthPage = ({ onLogin }) => {
    const [isRegisterMode, setIsRegisterMode] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isRegisterMode) {
            const { fullName, email, password, confirmPassword } = formData;

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
                    fullName,
                    email,
                    password,
                });
                alert(response.data.message);
                setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
            } catch (error) {
                alert(error.response?.data?.message || 'Registration failed. Try again.');
            }
        } else {
            const { email, password } = formData;

            try {
                const response = await axios.post('http://localhost:5001/login', {
                    email,
                    password,
                });
                alert(response.data.message);
                onLogin(response.data.user);
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
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isRegisterMode && (
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
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
