import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/HeroSection.css'; 
import './components/Header.css'; 
import StatsSection from './components/StatsSection';
import WhyParticipateSection from './components/WhyParticipateSection';
import ExploreChallenges from './components/ExploreChallenges';
import HackathonList from './components/HackathonList';
import HackathonForm from './components/HackathonForm';
import HackathonOverview from './components/HackathonOverview'; 

function App() {
  const [hackathons, setHackathons] = useState([
    
    {
      id: 1,
      name: 'Data Sprint 72 - Butterfly Identification',
      startDate: '17th Jun\'22 09:00 PM',
      endDate: '21st Jun\'22 11:00 PM',
      description: 'Identify the class to which each butterfly belongs to',
      level: 'Easy',
    },
    
  ]);

  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={
          <>
            <HeroSection />
            <StatsSection />
            <WhyParticipateSection />
            <ExploreChallenges />
            <HackathonList hackathons={hackathons} />
          </>
        } />
        <Route path="/hackathon-form" element={<HackathonForm hackathons={hackathons} setHackathons={setHackathons} />} /> 
        <Route path="/hackathon-form/:id" element={<HackathonForm hackathons={hackathons} setHackathons={setHackathons} />} /> 
        <Route path="/hackathon-overview/:id" element={<HackathonOverview hackathons={hackathons} setHackathons={setHackathons} />} />
      </Routes>
    </Router>
  );
}

export default App;
