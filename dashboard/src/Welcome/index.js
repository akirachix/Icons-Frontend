import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Welcome = () => {
    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        navigate('/login'); 
    };

    return (
        <div className="container">
            <div>
            <div className="content">
                <h1>Welcome to Edukeri <br/>Admin's Dashboard</h1>
                <h5>Empowering rural areas teachers with essential digital skills</h5>
                <button onClick={handleButtonClick}>GET STARTED</button>
            </div>
            </div>
        </div>
    );
}

export default Welcome;
