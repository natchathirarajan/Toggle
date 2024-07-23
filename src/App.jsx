import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
        <img src="https://banner2.cleanpng.com/20180420/jaw/kisspng-eye-computer-icons-eye-pupil-5ad968a012bfe4.2922474615241975360768.jpg" alt="eye" />
        </div>
        <h2 className="name">Name:V.Natchathira Rajan</h2>
        <p className="registration">Registration No: 212221040112</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            Additional details or content can go here...
          </div>
        )}
      </div>
    </div>
  );
};

export default App;