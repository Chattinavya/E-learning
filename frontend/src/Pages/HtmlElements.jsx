import React from "react";

const HtmlElements = () => {
  return (
    <div className="html-topic">
      <h2>HTML Elements</h2>
      <p><strong>Last Updated:</strong> 27 Nov, 2024</p>
      <p>
        An <strong>HTML Element</strong> consists of a start tag, content, and an end tag,
        which together define the element's structure and functionality.
        Elements are the basic building blocks of a webpage and can represent
        different types of content, such as text, links, images, or headings.
      </p>

      <p>
        For example, the <code>&lt;p&gt;</code> element for paragraphs includes opening and
        closing tags with text content in between.
      </p>

      <h3>HTML Element Syntax</h3>
      <pre>{`<tagname>Your Contents...</tagname>`}</pre>

      <h3>HTML Element Code Example</h3>
      <pre>{`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Elements</title>
  </head>
  <body>
    <p>Welcome to GeeksforGeeks!</p>
  </body>
</html>`}</pre>

      <h3>Table of Content</h3>
      <ul>
        <li>Some Key Points About HTML Elements</li>
        <li>Nested HTML Elements</li>
        <li>Necessary to Add an End Tag</li>
        <li>HTML Empty Element</li>
        <li>Block-Level and Inline Elements</li>
        <li>Best Practices When Using HTML Elements</li>
      </ul>

      <h3>Some Key Points About HTML Elements</h3>
      <ul>
        <li>Opening tag starts the element: <code>&lt;tagname&gt;</code></li>
        <li>Closing tag ends it: <code>&lt;/tagname&gt;</code></li>
        <li>Content lies between the tags</li>
      </ul>

      <p>
        <strong>Case Sensitivity:</strong> HTML tags are not case-sensitive. For example,{" "}
        <code>&lt;B&gt;</code> and <code>&lt;b&gt;</code> both make text bold, but lowercase
        is preferred for consistency.
      </p>

      <h3>Nested HTML Elements</h3>
      <p>
        Nested elements occur when one element is placed inside another to form a
        hierarchy, such as <code>&lt;html&gt;</code> containing <code>&lt;head&gt;</code> and{" "}
        <code>&lt;body&gt;</code>.
      </p>

      <pre>{`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Elements</title>
  </head>
  <body style="text-align: center">
    <h1>GeeksforGeeks</h1>
    <p>Computer science portal</p>
  </body>
</html>`}</pre>

      <h3>Necessary to Add an End Tag</h3>
      <p>
        Modern browsers may auto-correct missing tags, but it's best practice to
        always include them.
      </p>

      <pre>{`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Elements</title>
  </head>
  <body>
    <h2>Welcome To GeeksforGeeks</h2>
    <p>Hi Geeks! these data I can use in HTML elements
  </body>
</html>`}</pre>

      <h3>HTML Empty Element</h3>
      <p>
        Empty elements have no content and no closing tag, like <code>&lt;br&gt;</code>,{" "}
        <code>&lt;hr&gt;</code>, <code>&lt;input&gt;</code>, etc.
      </p>

      <pre>{`<h2>Heading</h2>
<br>
<p>Paragraph below heading</p>`}</pre>
    </div>
  );
};

export default HtmlElements;
