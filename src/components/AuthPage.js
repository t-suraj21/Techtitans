import React, { useState } from 'react';
import './Auth.css'; // Add the CSS file for styling

const AuthPage = ({ onRegister, onLogin, users }) => {
    const [isRegisterMode, setIsRegisterMode] = useState(true);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
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

            onRegister({ fullName, email, password });
            alert('Account created successfully!');
            setFullName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } else {
            const user = users.find(
                (user) => user.email === email && user.password === password
            );

            if (user) {
                onLogin(user);
                alert('Logged in successfully!');
            } else {
                alert('Invalid email or password.');
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

                    <div className="or-divider">Or continue with</div>
                    <div className="social-buttons">
                        <button className="google-button">Google</button>
                        <button className="github-button">GitHub</button>
                    </div>
                </div>
                <div className="auth-right">
                    <img src="xyz.jpg" alt="Auth Image" className="auth-image" />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
