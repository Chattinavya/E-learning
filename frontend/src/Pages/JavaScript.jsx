import React from "react";

const JavaScript = () => {
  return (
    <div>
      <h2>🧠 JavaScript Tutorial</h2>
      <p>JavaScript is the programming language of the web. It brings interactivity to websites.</p>
      
      <h3>🧮 Basic Example</h3>
      <pre>
        {`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Developer"));`}
      </pre>

      <h3>📌 Core Concepts</h3>
      <ul>
        <li>Variables and Data Types</li>
        <li>Functions</li>
        <li>DOM Manipulation</li>
        <li>Events</li>
        <li>ES6+ Features (let/const, arrow functions, promises)</li>
      </ul>
    </div>
  );
};

export default JavaScript;
