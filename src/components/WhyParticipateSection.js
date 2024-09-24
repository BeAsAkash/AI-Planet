import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import { ReactComponent as ProveSkillsIcon } from '../assets/icons/prove-skills.svg';
import { ReactComponent as LearnCommunityIcon } from '../assets/icons/learn-community.svg';
import { ReactComponent as ChallengeYourselfIcon } from '../assets/icons/challenge-yourself.svg';
import { ReactComponent as EarnRecognitionIcon } from '../assets/icons/earn-recognition.svg';
import './WhyParticipateSection.css';

const WhyParticipateSection = () => {
  return (
    <section className="why-participate-section">
      <Container>
        <h2 className="section-title text-center">Why Participate in <span className="highlight">AI Challenges?</span></h2>
        <Row className="mt-4">
        
          <Col md={6} lg={3} className="mb-4">
            <div className="participate-card">
              <ProveSkillsIcon className="participate-icon" />
              <h3>Prove your skills</h3>
              <p>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
            </div>
          </Col>

        
          <Col md={6} lg={3} className="mb-4">
            <div className="participate-card">
              <LearnCommunityIcon className="participate-icon" />
              <h3>Learn from community</h3>
              <p>One can look and analyze the solutions submitted by other Data Scientists in the community and learn from them.</p>
            </div>
          </Col>

        
          <Col md={6} lg={3} className="mb-4">
            <div className="participate-card">
              <ChallengeYourselfIcon className="participate-icon" />
              <h3>Challenge yourself</h3>
              <p>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience, and bounce back harder.</p>
            </div>
          </Col>

       
          <Col md={6} lg={3} className="mb-4">
            <div className="participate-card">
              <EarnRecognitionIcon className="participate-icon" />
              <h3>Earn recognition</h3>
              <p>You will stand out from the crowd if you do well in AI challenges. It not only helps you shine in the community but also earns rewards.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyParticipateSection;
