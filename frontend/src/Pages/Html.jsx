import React, { useState } from "react";

const Html = () => {
  const [showCode, setShowCode] = useState(false);
  const toggleCode = () => setShowCode(!showCode);

  return (
    <div style={{ 
      maxWidth: "800px", 
      margin: "20px auto", 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
      color: "#222",
      lineHeight: 1.6,
      padding: "0 15px"
    }}>
      <h1 style={{ color: "#007acc" }}>HTML Introduction</h1>

      <p>
        HTML stands for <strong>Hyper Text Markup Language</strong>, which is the core language used to structure content on the web. 
        It organizes text, images, links, and media using tags and elements that browsers can interpret. 
        As of 2025, over 95% of websites rely on HTML alongside CSS and JavaScript, making it a fundamental tool in modern web development.
      </p>

      <p>
        It is a <strong>markup language</strong>, not a programming language. This means it annotates text to define how it is structured and displayed by web browsers.
      </p>

      <p>
        It is a <strong>static language</strong>, meaning it does not inherently provide interactive features but can be combined with CSS for styling and JavaScript for interactivity.
      </p>

      <p>
        In a nutshell, HTML is all about organizing and displaying information on a webpage. We can think of it as the bones or structure of a webpage.
      </p>

      <h2>Basic HTML Code Example</h2>

      <button
        onClick={toggleCode}
        style={{
          backgroundColor: "#007acc",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "12px"
        }}
      >
        {showCode ? "Hide Code" : "Show Code"}
      </button>

      {showCode && (
        <pre
          style={{
            backgroundColor: "#282c34",
            color: "#61dafb",
            padding: "15px",
            borderRadius: "5px",
            fontSize: "14px",
            fontFamily: "source-code-pro, monospace",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
          }}
        >
{`<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is my first paragraph of text!</p>
</body>
</html>`}
        </pre>
      )}

      <h2>HTML Page Structure</h2>
      <p>
        The basic structure of an HTML page contains the essential building blocks (i.e., doctype declaration, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code>, and <code>&lt;body&gt;</code> elements) upon which all web pages are created.
      </p>

      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> - Document type declaration that tells the browser this is an HTML5 document.</li>
        <li><code>&lt;html&gt;</code> - The root element that contains all other elements.</li>
        <li><code>&lt;head&gt;</code> - Contains metadata and "behind the scenes" elements (not visible on the page).</li>
        <li><code>&lt;title&gt;</code> - Sets the page title shown on the browser tab.</li>
        <li><code>&lt;body&gt;</code> - Contains the visible content of the webpage.</li>
      </ul>

      <h2>Common HTML Tags</h2>
      <p>Here are some frequently used HTML tags and their descriptions:</p>

      <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#007acc", color: "white" }}>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Tag</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;html&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>The root element of an HTML document</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;head&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>Contains meta-information about the webpage</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;body&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>Contains the visible content</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;h1&gt; to &lt;h6&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>Headings of various levels (h1 is largest)</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;p&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>Paragraph</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;a&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>Hyperlink</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;img&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>Image embed</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;ul&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>Unordered list</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;ol&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>Ordered list</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;li&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>List item</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;table&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>Table</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}><code>&lt;form&gt;</code></td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>HTML form</td>
          </tr>
        </tbody>
      </table>

      <p>To learn more about these tags, check out <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener noreferrer" style={{ color: "#007acc" }}>HTML Tags on MDN</a>.</p>

      <h2>HTML Attributes</h2>
      <p>
        Attributes provide additional information about HTML elements. They are added inside opening tags and written as <code>name="value"</code>.
        Common attributes include <code>class</code>, <code>id</code>, <code>href</code>, and <code>src</code>.
      </p>
      <p>Example:</p>
      <pre style={{
        backgroundColor: "#f4f4f4",
        padding: "10px",
        borderRadius: "5px",
        fontFamily: "source-code-pro, monospace",
      }}>
{`<a href="https://www.example.com">Visit Example</a>`}
      </pre>
      <p>
        In the above example, <code>href</code> is an attribute of the <code>&lt;a&gt;</code> tag that defines the link's URL.
      </p>
      <p>Learn more about attributes <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes" target="_blank" rel="noopener noreferrer" style={{ color: "#007acc" }}>here</a>.</p>

      <h2>Web Browsers</h2>
      <p>
        Unlike programming languages that compile code, HTML files are interpreted by web browsers (like Chrome, Firefox, Safari). 
        These browsers read the HTML file and render the content as a webpage.
      </p>

      <h2>Why Learn HTML?</h2>
      <ul>
        <li>Build websites: The basic building block for creating any website.</li>
        <li>Customize Content: Edit web pages, emails, or templates to your liking.</li>
        <li>Understand how the web works: Grasp the structure of websites and internet technologies.</li>
        <li>Employment Opportunities: Web development jobs are growing rapidly.</li>
        <li>Learn Easily: Beginner-friendly and a great first step into coding.</li>
      </ul>

      <h2>Applications of HTML</h2>
      <ul>
        <li>Web Development: Backbone of webpages structuring content and multimedia.</li>
        <li>Web Applications: Powers complex apps with CSS and JavaScript.</li>
        <li>Emails: HTML emails deliver rich interactive content.</li>
        <li>Mobile Apps: HTML5 used with frameworks like PhoneGap for cross-platform apps.</li>
      </ul>

      <h2>Limitations of HTML</h2>
      <ul>
        <li>No logic or functionality: Requires JavaScript for interactivity and logic.</li>
        <li>SEO Limitations: Needs proper metadata and external SEO techniques.</li>
        <li>Limited Styles: Mostly styled with CSS for layout and visuals.</li>
      </ul>

      <h2>HTML5: Enhancements and New Features</h2>
      <ul>
        <li>Semantics: New tags like <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>.</li>
        <li>Multimedia: <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> for embedding media without plugins.</li>
        <li>APIs: Geolocation, Web Storage, Canvas for dynamic interactive content.</li>
      </ul>

      <h2>HTML History</h2>
      <p>
        HTML was created by Tim Berners-Lee in 1991 to share and structure documents on the web. The first standardized version, HTML 2.0, was published in 1995, laying the foundation for modern web development.
      </p>
      <p>Today, HTML5 is the latest and most advanced version.</p>

      <h2>Conclusion</h2>
      <p>
        Mastering HTML is a fundamental step in your web development journey. It is more than a markup language — it’s a powerful tool to create engaging, accessible, and SEO-friendly websites.
      </p>

      <p>
        To learn more about HTML, visit the <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" style={{ color: "#007acc" }}>HTML Tutorial Page</a>.
      </p>
    </div>
  );
};

export default Html;
