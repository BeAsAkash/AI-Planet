import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as ModelSubmissionsIcon } from '../assets/icons/model-submissions.svg';
import { ReactComponent as DataScientistsIcon } from '../assets/icons/data-scientists.svg';
import { ReactComponent as AiChallengesIcon } from '../assets/icons/ai-challenges.svg';
import './StatsSection.css';

const StatsSection = () => {
    return (
      <section className="stats-section">
        <Container>
          <Row className="justify-content-between align-items-center stats-row">
          
            <Col xs={12} md={4} className="stat-item text-center position-relative">
              <ModelSubmissionsIcon className="stat-icon" />
              <h3>100K+</h3>
              <p>AI model submissions</p>
              <div className="vertical-divider"></div> 
            </Col>

      
            <Col xs={12} md={4} className="stat-item text-center position-relative">
              <DataScientistsIcon className="stat-icon" />
              <h3>50K+</h3>
              <p>Data Scientists</p>
              <div className="vertical-divider"></div> 
            </Col>

            
            <Col xs={12} md={4} className="stat-item text-center position-relative">
              <AiChallengesIcon className="stat-icon" />
              <h3>100+</h3>
              <p>AI Challenges hosted</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default StatsSection;
