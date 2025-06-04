import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const careerData = [
  {
    title: 'Full Stack Web',
    hours: '87.6 total hours',
    bgColor: '#FFE4B5',
    image: '/Images/web.jpg',

  },
  {
    title: 'Java',
    hours: '28.4 total hours',
    bgColor: '#E6CCFF',
    image: '/Images/java.jpg',

  },
  {
    title: 'Data Scientist',
    hours: '46.8 total hours',
    bgColor: '#D6B4FC',
    image: '/Images/data.png',

  },
];

function CardSection() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <div className="career-wrapper">
      <h1 className="career-heading">Ready to reimagine your career?</h1>
      <p className="career-subheading">
        Get the skills and real-world experience employers want with Career Accelerators.
      </p>

      <div className="card-container">
        {careerData.map((item, index) => (
          <div className="career-card" key={index}>
            <div className="card-image" style={{ backgroundColor: item.bgColor }}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-body">
              <h2>{item.title}</h2>
              <p className="card-stats">{item.salary}</p>
              <div className="card-footer">
                <span>⭐ {item.rating}</span>
                <span>{item.reviews}</span>
                <span>{item.hours}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="cta-button" onClick={handleNavigate}>
        All Career Accelerators
      </button>
    </div>
  );
}

export default CardSection;
