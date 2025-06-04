import React, { useState } from "react";
import HtmlIntro from "./Html";
import HtmlEditors from "./HtmlEditors";
import HtmlBasics from "./HtmlBasics";
import HtmlElements from "./HtmlElements";
import "./WebDevelopment.css";
import HtmlAttributes from "./HtmlAttributes";
import HtmlResponsive from "./HtmlResponsive";

const WebDevelopment = () => {
  const [selectedTopic, setSelectedTopic] = useState("HTML Introduction");

  const renderContent = () => {
  switch (selectedTopic) {
    case "HTML Introduction":
      return <HtmlIntro />;
    case "HTML Editors":
      return <HtmlEditors />;
    case "HTML Basics":
      return <HtmlBasics />;
    case "HTML Elements":
      return <HtmlElements />;
    case "HTML Attributes":
      return <HtmlAttributes />;
    case "HTML Responsive":
      return <HtmlResponsive/>;
    default:
      return <div>Select a topic to view the tutorial.</div>;
  }
};

  const sidebarTopics = ["HTML Introduction", "HTML Editors", "HTML Basics","HTML Elements" ,"HTML Attributes","HTML Responsive"];

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

export default WebDevelopment;
