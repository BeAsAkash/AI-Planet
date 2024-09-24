import React from 'react';
import { Link } from 'react-router-dom';
import HackathonCard from './HackathonCard';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HackathonDashboard = ({ hackathons }) => {
  return (
    <div className="container">
    
      <header className="text-center mb-5">
        <h1>Accelerate Innovation with Global AI Challenges</h1>
        <p>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
        <Link to="/create">
          <Button className="btn-primary">Create Challenge</Button>
        </Link>
      </header>

      
      <div className="row text-center mb-5">
        <div className="col-4">
          <h2>100K+</h2>
          <p>AI Model Submissions</p>
        </div>
        <div className="col-4">
          <h2>50K+</h2>
          <p>Data Scientists</p>
        </div>
        <div className="col-4">
          <h2>100+</h2>
          <p>AI Challenges Hosted</p>
        </div>
      </div>

    
      <div className="filter-bar">
        <Row>
          <Col md={8}>
            <input type="text" className="form-control" placeholder="Search Challenges" />
          </Col>
          <Col md={4}>
            <Button className="btn-primary">Filter</Button>
          </Col>
        </Row>
      </div>

     
      <Row>
        {hackathons.map((hackathon) => (
          <Col md={4} key={hackathon.id}>
            <HackathonCard hackathon={hackathon} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HackathonDashboard;
