import React from "react";

const HtmlAttributes = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "auto" }}>
      <h1>HTML Attributes in React</h1>
      
      <p>
        HTML Attributes are special words used within the opening tag of an HTML element. They provide additional information about HTML elements.
        Attributes configure the element's behavior, appearance, or functionality.
      </p>
      <p>
        Each attribute has a name and a value, formatted as <code>name="value"</code>. They tell the browser how to render or behave during user interaction.
      </p>

      <h2>Syntax</h2>
      <p>
        {"<tagname attribute_name=\"attribute_value\"> content... </tagname>"}
      </p>

      <h2>Code Example of Using HTML Attributes</h2>
      <p>This example uses the <code>src</code> attribute within the <code>{"<img>"}</code> tag to display an image:</p>
      
      <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`<!DOCTYPE html>
<html>
<head>
  <title>HTML img src Attribute</title>
</head>
<body>
  <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png" />
</body>
</html>`}
      </pre>

      <h3>In this example:</h3>
      <ul>
        <li><strong>Tag:</strong> {"<img>"}</li>
        <li><strong>Attribute:</strong> src</li>
        <li><strong>Value:</strong> "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png"</li>
        <li><strong>Purpose:</strong> Specifies the path to the image file you want to display.</li>
      </ul>

      <h2>Components of Attribute</h2>
      <ol>
        <li><strong>attribute_name:</strong> The attribute's name (e.g., href, src, class, id).</li>
        <li><strong>attribute_value:</strong> The value assigned to the attribute, always in quotes.</li>
      </ol>

      <h2>Types of HTML Attributes</h2>
      <p>Attributes can be broadly categorized based on their function:</p>

      <h3>Global Attributes</h3>
      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>class</td><td>Groups elements and allows styling.</td></tr>
          <tr><td>style</td><td>Inline CSS styles.</td></tr>
          <tr><td>src</td><td>Specifies source for resources (images, videos, audio).</td></tr>
          <tr><td>contenteditable</td><td>Determines if content is editable.</td></tr>
          <tr><td>role</td><td>Accessibility role of element.</td></tr>
          <tr><td>tabindex</td><td>Order of focus during keyboard navigation.</td></tr>
          <tr><td>id</td><td>Unique identifier for targeting.</td></tr>
          <tr><td>href</td><td>Hyperlink destination for <code>{"<a>"}</code> tags.</td></tr>
          <tr><td>alt</td><td>Alternative text for images (accessibility & SEO).</td></tr>
          <tr><td>title</td><td>Tooltip text on hover.</td></tr>
          <tr><td>lang</td><td>Language of the element's content.</td></tr>
        </tbody>
      </table>

      <h3>Other Attribute Types</h3>
      <ul>
        <li>Event Attributes: Handle browser events (e.g., onClick, onChange).</li>
        <li>Input Attributes: Specific to form inputs.</li>
        <li>Image Attributes: For <code>{"<img>"}</code> tags.</li>
        <li>Link Attributes: For <code>{"<a>"}</code> and <code>{"<link>"}</code>.</li>
        <li>Table Attributes: For tables (<code>{"<table>"}</code>, <code>{"<tr>"}</code>, etc.)</li>
        <li>Style Attributes: Define styles directly.</li>
        <li>Media Attributes: For <code>{"<audio>"}</code> and <code>{"<video>"}</code>.</li>
        <li>Accessibility Attributes: Improve accessibility, e.g., aria-* attributes.</li>
        <li>Meta Attributes: For metadata like charset.</li>
      </ul>

      <h2>Common HTML Attributes</h2>

      <h3>1. alt Attribute</h3>
      <p>Provides alternative text if the image can't be displayed, improving accessibility.</p>
      <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png" alt="The Logo" />
<img src="" alt="Since src is blank, alt is displayed" />`}
      </pre>

      <h3>2. width and height Attributes</h3>
      <p>Used to set image size (pixels).</p>
      <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`<img 
  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png" 
  width="300px" 
  height="100px" />`}
      </pre>

      <h3>3. id Attribute</h3>
      <p>Assigns a unique identifier for CSS or JS targeting.</p>
      <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`<h1 id="geeks">Welcome to GeeksforGeeks</h1>

<style>
  #geeks { color: green; }
</style>`}
      </pre>

      <h3>4. title Attribute</h3>
      <p>Shows a tooltip when hovering.</p>
      <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`<h3 title="Hello GeeksforGeeks">Hover to see the effect</h3>`}
      </pre>

      <h3>5. href Attribute</h3>
      <p>Defines link destination in <code>{"<a>"}</code> tags.</p>
      <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`<a href="https://www.geeksforgeeks.org/">Open in same tab</a>
<a href="https://www.geeksforgeeks.org/" target="_blank">Open in new tab</a>`}
      </pre>

      <h3>6. style Attribute</h3>
      <p>Inline CSS styles to elements.</p>
      <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`<h2 style={{ fontFamily: "Chaparral Pro Light" }}>Hello GeeksforGeeks.</h2>
<h3 style={{ fontSize: "20px" }}>Hello GeeksforGeeks.</h3>
<h2 style={{ color: "#8CCEF9" }}>Hello GeeksforGeeks.</h2>
<h2 style={{ textAlign: "center" }}>Hello GeeksforGeeks.</h2>`}
      </pre>

      <h3>7. lang Attribute</h3>
      <p>Declares language, important for accessibility and SEO.</p>
      <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`<html lang="en">...</html>`}
      </pre>

      <h2>Important Points About HTML Attributes</h2>
      <ol>
        <li><strong>Use lowercase attribute names</strong> (recommended by W3C for consistency).</li>
        <li><strong>Always quote attribute values</strong>, especially if they contain spaces or special characters.</li>
        <li><strong>Use single or double quotes consistently</strong>. If value contains double quotes, wrap in single quotes, and vice versa.</li>
        <li><strong>Boolean attributes</strong> (e.g., <code>checked</code>) can be written without values in HTML (but in React, they should be set as boolean props).</li>
      </ol>

      <h4>React Note:</h4>
      <p>
        In React JSX, attributes mostly mirror HTML attributes, but with some differences:
      </p>
      <ul>
        <li><code>class</code> becomes <code>className</code></li>
        <li><code>for</code> becomes <code>htmlFor</code></li>
        <li>Boolean attributes use JSX boolean syntax, e.g., <code>{'<input checked />'}</code> or <code>{'<input checked={true} />'}</code></li>
        <li>Style attribute expects a JavaScript object: <code>{'{ color: "red", fontSize: 14 }'}</code></li>
      </ul>
    </div>
  );
};

export default HtmlAttributes;
