import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/Verbal.css";
const verbalModules = [
  {
    title: "Grammar Essentials",
    description: "Learn the fundamentals of English grammar including tenses, articles, and sentence structure.",
    questions: [
      {
        passage: "She has been working hard to improve her grammar skills.",
        question: "Identify the tense used in the sentence.",
        options: ["Present Simple", "Present Perfect Continuous", "Past Simple", "Future Tense"],
        answer: "Present Perfect Continuous"
      }
    ]
  },
  {
    title: "Vocabulary Building",
    description: "Enhance your word bank with root words, prefixes, suffixes, and contextual usage.",
    questions: [
      {
        passage: "Understanding prefixes helps in deducing the meanings of unfamiliar words.",
        question: "What is the prefix in the word 'unfamiliar'?",
        options: ["un-", "fam-", "liar", "ar"],
        answer: "un-"
      }
    ]
  },
  {
    title: "Reading Comprehension",
    description: "Improve your ability to understand and interpret written passages quickly and accurately.",
    questions: [
      {
        passage: "The sun dipped below the horizon, painting the sky in hues of orange and pink...",
        question: "What is the best description of the scene?",
        options: ["A stormy evening", "A peaceful sunset", "A city at night", "An early morning"],
        answer: "A peaceful sunset"
      },
      {
        passage: "The scientist studied the bacteria under a microscope...",
        question: "What is the focus of the passage?",
        options: ["A scientist’s lunch break", "How heat affects bacteria", "Building a microscope", "Types of scientists"],
        answer: "How heat affects bacteria"
      }
    ]
  },
  {
    title: "Synonyms and Antonyms",
    description: "Master common and advanced synonyms and antonyms used in exams and conversation.",
    questions: [
      {
        passage: "A synonym for 'happy' is 'joyful'.",
        question: "Which of the following is an antonym of 'happy'?",
        options: ["Sad", "Glad", "Joyful", "Cheerful"],
        answer: "Sad"
      }
    ]
  },
  {
    title: "Spot the Error",
    description: "Practice identifying grammatical and usage errors in sentences.",
    questions: [
      {
        passage: "She don't like apples.",
        question: "Identify the error in the sentence.",
        options: ["Subject-verb agreement", "Spelling mistake", "Wrong punctuation", "No error"],
        answer: "Subject-verb agreement"
      }
    ]
  },
  {
    title: "Sentence Completion",
    description: "Learn to logically complete sentences using grammar and context clues.",
    questions: [
      {
        passage: "If it rains tomorrow, we ____ the picnic.",
        question: "Choose the correct word to complete the sentence.",
        options: ["will cancel", "canceled", "cancel", "cancelling"],
        answer: "will cancel"
      }
    ]
  }
];


const Questions = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState({});

  const handleOptionClick = (qIndex, option) => {
    if (userAnswers[qIndex] === undefined) {
      setUserAnswers((prev) => ({ ...prev, [qIndex]: option }));
    }
  };

  return (
    <div className="section-container">
      <h2 className="section-title">📝 Practice Questions</h2>
      {questions.map((q, i) => {
        const userAnswer = userAnswers[i];
        return (
          <div key={i} className="question-block">
            {q.passage && <p className="passage"><strong>Passage:</strong> {q.passage}</p>}
            <p className="question-text">{q.question}</p>
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
const Modules = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <div className="section-container">
      <h2 className="section-title">📘 Verbal Course Modules</h2>
      <div className="module-grid">
        {verbalModules.map((mod, i) => (
          <div
            key={i}
            className={`module-card ${selectedModule?.title === mod.title ? "selected" : ""}`}
            onClick={() => setSelectedModule(mod)}
          >
            <h3 className="module-title">{i + 1}. {mod.title}</h3>
            <p className="module-desc">{mod.description}</p>
          </div>
        ))}
      </div>

      {selectedModule && (
        <div className="module-details">
          <h2>{selectedModule.title} Overview</h2>
          <p>{selectedModule.description}</p>
          {selectedModule.questions ? (
            <Questions questions={selectedModule.questions} />
          ) : (
            <p>No questions available for this module.</p>
          )}
        </div>
      )}
    </div>
  );
};
const Verbal = () => {
  return (
    <div className="verbal-container">
      <h1 className="verbal-title">🗣️ Verbal Skills Practice</h1>
      <nav className="verbal-nav">
        <Link to="modules" className="verbal-link">Modules</Link>
      </nav>

      <Routes>
        <Route path="modules" element={<Modules />} />
        <Route path="*" element={<p className="section-container">Please select the "Modules" section to begin.</p>} />
      </Routes>
    </div>
  );
};

export default Verbal;
