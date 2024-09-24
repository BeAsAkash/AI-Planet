import React from 'react';
import './HackathonCard.css';

const HackathonCard = ({ hackathon }) => {
  const { status, title, startsIn, buttonText, imageUrl } = hackathon;

  return (
    <div className="hackathon-card">
      <div className="hackathon-card-img">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="hackathon-card-content">
        <span className={`hackathon-status ${status.toLowerCase()}`}>
          {status}
        </span>
        <h3>{title}</h3>
        
        <p>{status === 'Past' ? 'Ended on:' : 'Starts in:'} {startsIn}</p>
        <button className="participate-btn">{buttonText}</button>
      </div>
    </div>
  );
};

export default HackathonCard;
