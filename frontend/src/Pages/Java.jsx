import React, { useState } from "react";
import "./WebDevelopment.css";
import JavaIntro from "./JavaIntro";
import JavaBasics from "./JavaBasics";
import JavaStatements from "./JavaStatements";
import JavaArrays from "./JavaArrays";


const Java = () => {
  const [selectedTopic, setSelectedTopic] = useState("JAVA Introduction");

  const renderContent = () => {
  switch (selectedTopic) {
    case "JAVA Introduction":
      return <JavaIntro />;
    case "JAVA Basics":
      return <JavaBasics/>;
    case "JAVA Statements":
      return <JavaStatements/>;
    case "JAVA Arrays":
      return <JavaArrays/>
    default:
      return <div>Select a topic to view the tutorial.</div>;
  }
};

  const sidebarTopics = ["JAVA Introduction","JAVA Basics","JAVA Statements","JAVA Arrays"];

  return (
    <div className="tutorial-container">
      <aside className="tutorial-sidebar">
        <h3>HTML Tutorial</h3>
        <ul>
          {sidebarTopics.map((topic) => (
            <li
              key={topic}
              className={selectedTopic === topic ? "active" : ""}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic}
            </li>
          ))}
        </ul>
      </aside>
      <main className="tutorial-content">{renderContent()}</main>
    </div>
  );
};

export default Java;
