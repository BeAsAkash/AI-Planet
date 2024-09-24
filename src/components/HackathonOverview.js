import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import './HackathonOverview.css';

const HackathonOverview = ({ hackathons, setHackathons }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const hackathon = hackathons.find(h => h.id === parseInt(id));

  if (!hackathon) {
    return <div>Hackathon not found</div>;
  }

  const handleDelete = () => {
    setHackathons(prevHackathons => prevHackathons.filter(h => h.id !== parseInt(id)));
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/hackathon-form/${id}`);
  };

  return (
    <Container className="hackathon-overview-container">
      <div className="hackathon-header">
        <div className="header-details">
          <span className="start-date">
            <i className="fa fa-clock-o"></i> Starts on {hackathon.startDate} (India Standard Time)
          </span>
          <h1 className="hackathon-title">{hackathon.name}</h1>
          <p className="hackathon-description">{hackathon.description}</p>
          <div className="hackathon-level">
            <i className="fa fa-bar-chart"></i> {hackathon.level}
          </div>
        </div>
        <div className="edit-delete-buttons">
          <Button variant="success" onClick={handleEdit}>Edit</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </div>

      <div className="overview-section">
        <h2>Overview</h2>
        <p>{hackathon.description}</p>
      </div>
    </Container>
  );
};

export default HackathonOverview;
