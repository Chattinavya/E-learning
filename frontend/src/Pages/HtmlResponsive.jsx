// src/components/ResponsiveHtmlBasics.js
import React from 'react';


function HtmlResponsive() {
  return (
    <div className="responsive-container">
      <h1 className="title">Responsive Design in HTML</h1>

      {/* Introduction */}
      <section className="section">
        <h2>📱 What is Responsive Design?</h2>
        <p>
          Responsive design makes web pages look good on all devices—phones, tablets, and desktops. It uses flexible grids, images, and media queries to ensure content adapts to any screen size and orientation.
        </p>
      </section>

      {/* Key Techniques */}
      <section className="section">
        <h2>🛠️ Key Techniques</h2>
        <ul>
          <li><strong>Viewport Meta Tag:</strong> Ensures proper scaling on mobile.</li>
          <li><strong>Media Queries:</strong> Apply CSS based on screen size.</li>
          <li><strong>Relative Units:</strong> Use %, em, rem, and vw/vh instead of fixed px units.</li>
          <li><strong>Flexible Images:</strong> Resize within their containers using <code>max-width: 100%</code>.</li>
          <li><strong>Mobile-First:</strong> Start designing for small screens, then scale up.</li>
        </ul>
      </section>

      {/* Viewport Meta Tag */}
      <section className="section">
        <h2>📏 Viewport Meta Tag</h2>
        <p>Include this in your <code>&lt;head&gt;</code> to make your layout responsive:</p>
        <pre className="code-block">
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        </pre>
      </section>

      {/* Media Queries */}
      <section className="section">
        <h2>🎯 Media Query Example</h2>
        <p>This example changes the background color on smaller screens:</p>
        <pre className="code-block">
{`@media screen and (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}`}
        </pre>
      </section>

      {/* Responsive Image */}
      <section className="section">
        <h2>🖼️ Responsive Image</h2>
        <p>Using <code>max-width: 100%</code> ensures images scale with the container:</p>
        <pre className="code-block">
{`<img src="image.jpg" style="max-width: 100%; height: auto;">`}
        </pre>
        <p>Better yet, use the <code>&lt;picture&gt;</code> element for full control:</p>
        <pre className="code-block">
{`<picture>
  <source media="(max-width: 600px)" srcSet="small.jpg">
  <source media="(min-width: 601px)" srcSet="large.jpg">
  <img src="fallback.jpg" alt="Responsive">
</picture>`}
        </pre>
      </section>

      {/* Responsive Text */}
      <section className="section">
        <h2>🔤 Responsive Text</h2>
        <p>Text that scales with viewport width using <code>vw</code> units:</p>
        <pre className="code-block">
{`h1 {
  font-size: 5vw;
}`}
        </pre>
      </section>

      {/* Layout Techniques */}
      <section className="section">
        <h2>📐 Layout Techniques</h2>
        <ul>
          <li><strong>Flexbox:</strong> Auto adjust columns and rows:</li>
          <pre className="code-block">
{`.container {
  display: flex;
  flex-wrap: wrap;
}`}
          </pre>

          <li><strong>CSS Grid:</strong> Create fully responsive grids:</li>
          <pre className="code-block">
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`}
          </pre>

          <li><strong>Multi-Column:</strong> Text columns adjust with screen:</li>
          <pre className="code-block">
{`.columns {
  column-count: 2;
  column-gap: 20px;
}`}
          </pre>
        </ul>
      </section>

      {/* Best Practices */}
      <section className="section">
        <h2>✅ Best Practices</h2>
        <ul>
          <li>Always include the viewport meta tag</li>
          <li>Test on real devices and emulators</li>
          <li>Design with touch interaction and accessibility in mind</li>
          <li>Use fluid layouts and scalable elements</li>
          <li>Consider using frameworks like Bootstrap or Tailwind CSS</li>
        </ul>
      </section>
    </div>
  );
}

export default HtmlResponsive;
