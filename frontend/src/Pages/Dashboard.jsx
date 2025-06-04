import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const topics = [
  { title: "Web Development", color: "#3498db", path: "/web-development" },
  { title: "Java", color: "#e67e22", path: "/java" },
  { title: "MERN Stack", color: "#2ecc71", path: "/mern-stack" },
  { title: "Data Science", color: "#9b59b6", path: "/data-science" },
  { title: "Python", color: "#f1c40f", path: "/python" },
  { title: "HTML", color: "#e74c3c", path: "/html" },
  { title: "JavaScript", color: "#f39c12", path: "/javascript" }
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <h2 className="dashboard-title">📚 Dashboard</h2>
      <div className="card-grid">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="topic-card"
            style={{ backgroundColor: topic.color }}
            onClick={() => navigate(topic.path)}
          >
            <h3>{topic.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
