import React from "react";

const HTMLBasics = () => {
  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: "1rem", fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      <h1>HTML Basics</h1>

      <p>
        <strong>HTML (HyperText Markup Language)</strong> is the standard markup language used to create and structure web pages. It defines the layout of a webpage using elements and tags, allowing for the display of text, images, links, and multimedia content.
        As the foundation of nearly all websites, HTML is used in over 95% of all web pages today, making it an essential part of modern web development.
      </p>

      <p>
        In this guide, we learn the basics of HTML, which includes HTML tags (<code>{'<h1>'}</code>, <code>{'<p>'}</code>, <code>{'<img>'}</code>, etc.), attributes, elements, and document structure which collectively form a working web page.
      </p>

      <h2>Table of Contents</h2>
      <ul>
        <li>Basic HTML Document and Structure</li>
        <li>HTML Headings</li>
        <li>HTML Paragraph and Break Elements</li>
        <li>HTML Horizontal Line</li>
        <li>HTML Images</li>
        <li>View HTML Source Code</li>
      </ul>

      <h2>Basic HTML Document and Structure</h2>
      <p>
        Every HTML document begins with a document type declaration, setting the foundation for the webpage.
        This section introduces basic HTML tags that structure the page, such as <code>{'<head>'}</code>, <code>{'<body>'}</code>, and <code>{'<title>'}</code>.
        Although this is not mandatory, it is a good convention to start the document with the below-mentioned tag.
      </p>

      <h3>HTML Structure</h3>
      <p>Below mentioned are the basic HTML tags that divide the whole page into various parts like head, body, etc.</p>

      <h4>Basic HTML Tags for Document Structure</h4>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "1rem" }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>Tag</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>{'<html>'}</code></td>
            <td>Encloses the entire HTML document, serving as the root element for all HTML content.</td>
          </tr>
          <tr>
            <td><code>{'<head>'}</code></td>
            <td>Contains header information about the webpage, including title, meta tags, and linked stylesheets. It is part of the document's structure but is not displayed on the webpage.</td>
          </tr>
          <tr>
            <td><code>{'<title>'}</code></td>
            <td>Used within the <code>{'<head>'}</code> section to define the title of the HTML document. It appears in the browser tab or window and provides a brief description of the webpage's content.</td>
          </tr>
          <tr>
            <td><code>{'<body>'}</code></td>
            <td>Encloses the visible content of the webpage, such as text, images, audio, videos, and links. All elements within this tag are displayed on the actual webpage when viewed in a browser.</td>
          </tr>
        </tbody>
      </table>

      <h3>Example: Basic HTML Document</h3>
      <pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", overflowX: "auto" }}>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML</title>
</head>
<body>
    <!-- Contents of the webpage -->
    <p>GeeksforGeeks is an online study platform</p>
</body>
</html>`}
      </pre>
      <p><strong>Code Overview:</strong></p>
      <ul>
        <li>This HTML document defines a basic webpage with a responsive design using <code>{'<meta>'}</code> tags, ensuring it adjusts well to different devices.</li>
        <li>The content includes a paragraph <code>{'<p>'}</code> displaying "GeeksforGeeks is an online study platform," and the title "HTML" appears in the browser tab.</li>
      </ul>

      <h2>HTML Headings</h2>
      <p>
        The HTML heading tags are used to create headings for the content of a webpage. These tags are typically placed inside the <code>{'<body>'}</code> tag.
        HTML offers six heading tags, from <code>{'<h1>'}</code> to <code>{'<h6>'}</code>, each displaying the heading in a different font size.
      </p>

      <h3>Syntax</h3>
      <pre style={{ backgroundColor: "#f5f5f5", padding: "1rem" }}>
{`<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>`}
      </pre>

      <h3>Example</h3>
      <pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", overflowX: "auto" }}>
{`<html>
<body>
      <h1>Heading 1 (h1)</h1>
      <h2>Heading 2 (h2)</h2>
      <h3>Heading 3 (h3)</h3>
      <h4>Heading 4 (h4)</h4>
      <h5>Heading 5 (h5)</h5>
      <h6>Heading 6 (h6)</h6>
</body>
</html>`}
      </pre>
      <p><strong>Code Overview:</strong></p>
      <ul>
        <li>This code displays six headings (<code>{'<h1>'}</code> to <code>{'<h6>'}</code>) on the webpage, with <code>{'<h1>'}</code> being the largest and most prominent and <code>{'<h6>'}</code> being the smallest.</li>
        <li>The headings are used to define text hierarchy and emphasize content based on importance.</li>
      </ul>

      <h2>HTML Paragraph and Break Elements</h2>
      <p>
        HTML <code>{'<p>'}</code> tags are used to write paragraph statements on a webpage. They start with the <code>{'<p>'}</code> tag and end with <code>{'</p>'}</code>.
        The HTML <code>{'<br>'}</code> tag is used to insert a single line break and does not require a closing tag.
      </p>

      <h3>Syntax</h3>
      <pre style={{ backgroundColor: "#f5f5f5", padding: "1rem" }}>
{`// for Paragraph
<p> Content... </p>

// for Break
<br>`}
      </pre>

      <h3>Example</h3>
      <pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", overflowX: "auto" }}>
{`<html>
<body>
      <p>
            HTML stands for HyperText Markup Language.<br>
            It is used to design web pages using a markup
            language.<br>HTML is a combination of Hypertext
            and Markup language.<br>Hypertext defines the
            link between web pages.<br>A markup language
            is used to define the text document within the
            tag which defines the structure of web pages.
      </p>
</body>
</html>`}
      </pre>

      <p><strong>Code Overview:</strong></p>
      <ul>
        <li>This HTML code uses a <code>{'<p>'}</code> tag to display a paragraph of text, providing an overview of what HTML is and its purpose.</li>
        <li>The <code>{'<br>'}</code> tags are used to insert line breaks, making the text more readable by separating each sentence onto a new line within the paragraph.</li>
      </ul>

      <h2>HTML Horizontal Line</h2>
      <p>
        The HTML <code>{'<hr>'}</code> tag is used to divide a page into sections by creating a horizontal line that spans from the left to the right side of the page.
        This is an empty tag and does not require a closing tag or any additional attributes.
      </p>

      <h3>Syntax</h3>
      <pre style={{ backgroundColor: "#f5f5f5", padding: "1rem" }}>
{`<hr>`}
      </pre>

      <h3>Example</h3>
      <pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", overflowX: "auto" }}>
{`<html>
<body>
    <p>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
    </p>
    <hr>
    <p>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
    </p>
    <hr>
    <p>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
    </p>
    <hr>
</body>
</html>`}
      </pre>

      <h2>HTML Images</h2>
      <p>
        The <code>{'<img>'}</code> tag is used to insert an image into a webpage.
        The source of the image is specified within the <code>src</code> attribute, like this: <code>{'<img src="source_of_image">'}</code>.
      </p>

      <h3>Syntax</h3>
      <pre style={{ backgroundColor: "#f5f5f5", padding: "1rem" }}>
{`<img src="geeks.png">`}
      </pre>

      <p>This HTML code uses the <code>{'<img>'}</code> tag to display an image on a webpage. The <code>src</code> attribute specifies the URL of the image, which is loaded and displayed when the page is rendered in the browser.</p>

      <h2>View HTML Source Code</h2>
      <p>While checking a web page, you might want to see the HTML code behind it. Here we will see how you can view HTML source code for the entire page or a specific element.</p>

      <h3>1. View HTML Source Code of Entire Page</h3>
      <p>To view the source code of a webpage, press <kbd>Ctrl + U</kbd> on the page, or right-click on the page and select the "View Page Source" option. This will open a new tab that shows the HTML source code for that entire page.</p>

      <h3>2. Inspect an HTML Element on a Page</h3>
      <p>To check the HTML code for a specific element on a page, right-click on the page and select the "Inspect" option. This lets you see the HTML and CSS behind that element. You can also try making changes and see the live updates.</p>

      <hr />

      <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#555" }}>
        HTML Basics | HTML Tutorial for Beginners
      </p>
    </div>
  );
};

export default HTMLBasics;
