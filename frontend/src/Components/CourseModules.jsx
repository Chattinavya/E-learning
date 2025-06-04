import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/CourseModules.css";

const allModules = {
  "data-structures": [
    {
      title: "Introduction to Data Structures",
      info: "2 Topics",
      path: "/course/coursedetails"
    },
    {
      title: "Time Complexity",
      info: "3 Topics",
      path: "/course/timecomplexity"
    },
    {
      title: "Sorting",
      info: "4 Topics",
      highlighted: true,
      path: "/courses/sorting"
    }
  ],
  verbal: [
    {
      title: "Grammar Basics",
      info: "5 Topics",
      path: "/verbal/grammar-basics"
    },
    // Add more verbal modules here...
  ],
  "reasoning-aptitude": [
    {
      title: "Logical Reasoning",
      info: "6 Topics",
      path: "/reasoning/logical-reasoning"
    },
    // Add more reasoning modules here...
  ]
};

const CourseModules = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const modules = allModules[id] || [];

  if (modules.length === 0) {
    return (
      <div className="modules-container">
        <h2 className="heading">Modules not found</h2>
        <p>No modules found for course: <strong>{id}</strong></p>
      </div>
    );
  }

  return (
    <div className="modules-container">
      <h2 className="heading">Modules for {id.replace(/-/g, " ")}</h2>
      {modules.map((module, idx) => (
        <div
          key={idx}
          className={`module-card ${module.highlighted ? "highlighted" : ""}`}
        >
          <div className="module-text">
            <strong>{module.title}</strong>
            <p>{module.info}</p>
          </div>
          <button
            className="start-button"
            onClick={() => navigate(module.path)}
          >
            Start Learning
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseModules;
