import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TimeComplexity = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="notes-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back to Modules</button>

      <h1 className="notes-title">Introduction to Time Complexity</h1>

      <section className="notes-section">
        <h2>What is Time Complexity?</h2>
        <p>
          Time complexity measures how the runtime of an algorithm increases as the input size grows.
          It expresses the relationship between the input size (n) and the number of operations performed,
          helping analyze the efficiency of algorithms.
        </p>
      </section>

      <section className="notes-section">
        <h2>Why is Time Complexity Important?</h2>
        <ul>
          <li>Helps compare algorithms to choose the most efficient one.</li>
          <li>Predicts scalability and performance for large datasets.</li>
          <li>Guides optimization and resource management.</li>
          <li>Critical for writing high-performance software.</li>
        </ul>
      </section>

      <section className="notes-section">
        <h2>Common Time Complexity Notations</h2>
        <ul>
          <li><strong>O(1)</strong> — Constant time: Execution time doesn’t grow with input size.</li>
          <li><strong>O(log n)</strong> — Logarithmic time: Time grows slowly as input increases.</li>
          <li><strong>O(n)</strong> — Linear time: Time grows proportionally with input size.</li>
          <li><strong>O(n log n)</strong> — Log-linear time: Slightly more than linear; common in efficient algorithms.</li>
          <li><strong>O(n²)</strong> — Quadratic time: Time increases with the square of input size.</li>
          <li><strong>O(2ⁿ)</strong> — Exponential time: Time doubles with each added input element.</li>
        </ul>
      </section>

      <section className="notes-section">
        <h2>Types of Time Complexity</h2>
        <ul>
          <li><strong>Best Case:</strong> Minimum time taken under ideal conditions.</li>
          <li><strong>Average Case:</strong> Expected time for a typical input.</li>
          <li><strong>Worst Case:</strong> Maximum time taken in the most complex scenario.</li>
        </ul>
      </section>

      <section className="notes-section">
        <h2>Examples of Time Complexity</h2>
        <ul>
          <li>Linear search: <strong>O(n)</strong></li>
          <li>Binary search: <strong>O(log n)</strong></li>
          <li>Bubble sort: <strong>O(n²)</strong></li>
          <li>Accessing an element by index: <strong>O(1)</strong></li>
        </ul>
      </section>

      <section className="notes-section">
        <h2>Tips to Understand and Improve Time Complexity</h2>
        <ul>
          <li>Avoid unnecessary nested loops.</li>
          <li>Simplify your logic to reduce operations.</li>
          <li>Use formulas instead of loops when possible.</li>
          <li>Practice analyzing runtime behavior of your code.</li>
        </ul>
      </section>
    </div>
  );
};

export default TimeComplexity;
