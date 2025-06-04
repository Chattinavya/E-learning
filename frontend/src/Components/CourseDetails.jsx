import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './CourseDetail.css';

const CourseDetails = () => {
  const navigate = useNavigate();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="notes-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back to Modules</button>

      <h1 className="notes-title">Introduction to Data Structures</h1>

      <section className="notes-section">
        <h2>What are Data Structures?</h2>
        <p>
          A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently.
          Different types of data structures are suited to different kinds of applications and tasks.
        </p>
      </section>

      <section className="notes-section">
        <h2>Why are Data Structures Important?</h2>
        <ul>
          <li>They help manage and organize data efficiently.</li>
          <li>Essential for writing optimized and scalable code.</li>
          <li>Used in algorithms to solve complex computational problems.</li>
          <li>Impact time and space complexity of a program.</li>
        </ul>
      </section>

      <section className="notes-section">
        <h2>Types of Data Structures</h2>
        <ol>
          <li><strong>Linear Structures:</strong> Arrays, Linked Lists, Stacks, Queues</li>
          <li><strong>Non-linear Structures:</strong> Trees, Graphs</li>
          <li><strong>Hash-based Structures:</strong> Hash Tables, Hash Maps</li>
        </ol>
      </section>

      <section className="notes-section">
        <h2>Common Operations</h2>
        <p>
          Operations depend on the type of data structure, but common ones include:
        </p>
        <ul>
          <li>Insertion</li>
          <li>Deletion</li>
          <li>Traversal</li>
          <li>Searching</li>
          <li>Sorting</li>
        </ul>
      </section>

      <section className="notes-section">
        <h2>Real-World Applications</h2>
        <ul>
          <li>Social media: Graphs to model connections.</li>
          <li>Compilers: Stacks for parsing expressions.</li>
          <li>Databases: Trees (like B-Trees) for indexing.</li>
          <li>Operating systems: Queues for task scheduling.</li>
        </ul>
      </section>

      <section className="notes-section">
        <h2>Bonus Tips</h2>
        <ul>
          <li>Practice visualizing structures using diagrams or online tools.</li>
          <li>Try implementing basic structures from scratch (e.g., linked list).</li>
          <li>Use real-world analogies to better understand how structures work (e.g., stack = plates).</li>
          <li>Reinforce with problems on platforms like LeetCode, HackerRank, or GeeksforGeeks.</li>
        </ul>
      </section>
    </div>
  );
};

export default CourseDetails;
