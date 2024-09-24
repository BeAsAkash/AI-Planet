import React, { useState } from 'react';
import './ExploreChallenges.css'; 

const ExploreChallenges = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false); 
  };

  return (
    <section className="explore-challenges-section">
      <h2 className="explore-challenges-title">Explore Challenges</h2>
      <div className="search-filter-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <button className="search-icon">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="filter-dropdown">
          <button className={`filter-button ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
            Filter <i className="fa fa-chevron-down"></i> 
          </button>
          <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <li>
              <strong>Status</strong>
            </li>
            <li className="filter-checkbox-container">
              <input type="checkbox" id="all" />
              <label htmlFor="all">All</label>
            </li>
            <li className="filter-checkbox-container">
              <input type="checkbox" id="active" />
              <label htmlFor="active">Active</label>
            </li>
            <li className="filter-checkbox-container">
              <input type="checkbox" id="upcoming" />
              <label htmlFor="upcoming">Upcoming</label>
            </li>
            <li className="filter-checkbox-container">
              <input type="checkbox" id="past" />
              <label htmlFor="past">Past</label>
            </li>
            <li className="filter-divider"></li>
            <li>
              <strong>Level</strong>
            </li>
            <li className="filter-checkbox-container">
              <input type="checkbox" id="easy" />
              <label htmlFor="easy">Easy</label>
            </li>
            <li className="filter-checkbox-container">
              <input type="checkbox" id="medium" />
              <label htmlFor="medium">Medium</label>
            </li>
            <li className="filter-checkbox-container">
              <input type="checkbox" id="hard" />
              <label htmlFor="hard">Hard</label>
            </li>
          </ul>
        </div>
      </div>

      
      {isOpen && <div className="blur-overlay open" onClick={closeDropdown}></div>}
    </section>
  );
};

export default ExploreChallenges;
