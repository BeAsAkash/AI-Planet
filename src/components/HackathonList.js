import React from 'react';
import HackathonCard from './HackathonCard'; // Assuming you have this component
import Image1 from '../assets/images/Group 1000002771.png';
import Image2 from '../assets/images/Group 1000002766.png';
import Image3 from '../assets/images/Group 1000002767.png';
import Image4 from '../assets/images/Group 1000002466.png';
import Image5 from '../assets/images/Group 1000002773.png';
import Image6 from '../assets/images/Group 1000002772.png';

const HackathonList = () => {

  const hackathons = [
    {
      id: 1,
      status: 'Upcoming',
      title: 'Data Science Bootcamp - Graded Datathon',
      startsIn: '00 : 15 : 22',
      buttonText: 'Participate Now',
      imageUrl: Image1,
    },
    {
      id: 2,
      status: 'Upcoming',
      title: 'Data Sprint 72 - Butterfly Identification',
      startsIn: '00 : 12 : 34',
      buttonText: 'Participate Now',
      imageUrl: Image2,
    },
    {
      id: 3,
      status: 'Active',
      title: 'Data Sprint 71 - Weather Recognition',
      startsIn: '01 : 17 : 10',
      buttonText: 'Participate Now',
      imageUrl: Image3,
    },
    {
      id: 4,
      status: 'Active',
      title: 'Data Sprint 70 - Airline Passenger Satisfaction',
      startsIn: '00 : 11 : 27',
      buttonText: 'Participate Now',
      imageUrl: Image4,
    },
    {
      id: 5,
      status: 'Past',
      title: 'Engineering Graduates Employment Outcomes',
      startsIn: '16th May 22 09:00 PM',
      buttonText: 'Participate Now',
      imageUrl: Image5,
    },
    {
      id: 6,
      status: 'Past',
      title: 'Travel Insurance Claim Prediction',
      startsIn: '16th May 22 09:00 PM',
      buttonText: 'Participate Now',
      imageUrl: Image6,
    },
  ];

  return (
    <div className="hackathon-list-container">
      <div className="hackathons-grid">
        {hackathons.map((hackathon) => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>
    </div>
  );
};

export default HackathonList;
