import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ReactComponent as RocketIcon } from '../assets/icons/rocket-icon.svg'; 
import './HeroSection.css'; 
import { useNavigate } from 'react-router-dom'; 

const HeroSection = () => {
  const navigate = useNavigate();

  const handleCreateChallenge = () => {
    navigate('/hackathon-form');
  };

  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col md={6} className="hero-text">
            <div className="heading-container">
              <div className="yellow-bar"></div>
              <h1>
                Accelerate Innovation<br />
                with <span>Global AI Challenges</span>
              </h1>
            </div>
            <p>
              AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
            </p>
            <Button variant="light" className="create-challenge-btn" onClick={handleCreateChallenge}>
              Create Challenge
            </Button>
          </Col>
          <Col md={6} className="hero-rocket">
            <RocketIcon className="rocket-icon" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
