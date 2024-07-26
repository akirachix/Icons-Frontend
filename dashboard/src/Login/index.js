import './index.css';
import React, { useState } from 'react';

const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    
    const handleLogin = (e) => {
        e.preventDefault(); 

        if (!username || !password) {
            setError('Please fill in all fields.');
        } else {
            setError(''); 
            console.log('Logging in with:', { username, password });
        }
    };

    return (
        <div className="main">
            <div className="box">
                <div className="Platform">
                    <div>
                        <img src="/Images/logo.png" alt="logo" className="logo_img" />
                    </div>
                    <div>
                        <h2>Edukeri</h2>
                    </div>
                </div>
                <div className="form">
                    <form onSubmit={handleLogin}>
                        <div>
                            <div>
                                <p>Username</p>
                                <input 
                                    type="text" 
                                    className="username" 
                                    name="username" 
                                    placeholder="Your Name" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required 
                                />
                            </div>
                            <div>
                                <p>Password</p>
                                <input 
                                    type="password" 
                                    className="password" 
                                    name="password" 
                                    placeholder="Your Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit">Sign In</button>
                            {error && <p className="error-message">{error}</p>}
                            <br />
                            <br />
                            <br />
                            <p className="call-to-action">
                                Already have an account? <span className="signup_text">Sign Up</span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hero">
                <div className="hero_image">
                    <div>
                        <img src="/Images/logo.png" alt="logo" className="hero_img" />
                    </div>
                    <div>
                        <h1>Edukeri</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
