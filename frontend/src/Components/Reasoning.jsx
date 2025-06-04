import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Make sure Sidebar exists or remove it

const reasoningModules = [
  {
    title: "Logical Reasoning",
    description: "Develop critical thinking skills to analyze and solve logical problems efficiently.",
    questions: [
      {
        question: "If all roses are flowers and some flowers fade quickly, can we say some roses fade quickly?",
        options: ["Yes", "No", "Cannot be determined", "None of these"],
        answer: "Cannot be determined"
      },
      {
        question: "Find the next number in the sequence: 2, 6, 12, 20, ?",
        options: ["28", "30", "32", "36"],
        answer: "30"
      }
    ]
  },
  {
    title: "Analytical Reasoning",
    description: "Practice solving puzzles, pattern recognition, and decision-making problems.",
    questions: [
      {
        question: "A clock shows 3:15. What is the angle between the hour and the minute hands?",
        options: ["0 degrees", "7.5 degrees", "30 degrees", "37.5 degrees"],
        answer: "7.5 degrees"
      },
      {
        question: "In a code language, if CAT is written as XZG, how is DOG written?",
        options: ["WLT", "WLG", "WLF", "XLG"],
        answer: "WLT"
      }
    ]
  },
  {
    title: "Spatial Reasoning",
    description: "Enhance your ability to visualize and manipulate objects mentally in space.",
    questions: [
      {
        question: "Which 3D shape can be made by folding this 2D net? (Imagine a net of a cube)",
        options: ["Cube", "Pyramid", "Cylinder", "Sphere"],
        answer: "Cube"
      },
      {
        question: "If a cube is painted on all sides and then cut into 27 smaller cubes, how many cubes have exactly two painted sides?",
        options: ["12", "8", "6", "0"],
        answer: "12"
      }
    ]
  }
];

const ReasoningQuestions = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionClick = (qIndex, option) => {
    if (selectedAnswers[qIndex] === undefined) {
      setSelectedAnswers(prev => ({ ...prev, [qIndex]: option }));
    }
  };

  return (
    <div className="section-container">
      <h2 className="section-title">🧠 Reasoning Practice Questions</h2>
      {questions.map((q, i) => {
        const userAnswer = selectedAnswers[i];
        return (
          <div key={i} className="question-block">
            <p className="question-text"><strong>{q.question}</strong></p>
            <ul className="options-list">
              {q.options.map((opt, idx) => {
                let className = "";
                if (userAnswer !== undefined) {
                  if (opt === q.answer) className = "correct-answer";
                  if (opt === userAnswer && userAnswer !== q.answer) className = "wrong-answer";
                }
                return (
                  <li
                    key={idx}
                    className={className}
                    onClick={() => handleOptionClick(i, opt)}
                    style={{ cursor: userAnswer === undefined ? "pointer" : "default" }}
                  >
                    {opt}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const ReasoningModules = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className={`courses-page ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <div className="section-container">
          <h2 className="section-title">🧩 Reasoning Course Modules</h2>
          <div className="module-grid">
            {reasoningModules.map((mod, i) => (
              <div
                key={i}
                className={`module-card ${selectedModule === mod ? "selected" : ""}`}
                onClick={() => setSelectedModule(mod)}
              >
                <h3 className="module-title">{i + 1}. {mod.title}</h3>
                <p className="module-desc">{mod.description}</p>
              </div>
            ))}
          </div>

          {selectedModule?.questions && (
            <ReasoningQuestions questions={selectedModule.questions} />
          )}
        </div>
      </main>
    </div>
  );
};

export default ReasoningModules;
