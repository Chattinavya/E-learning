import React from 'react';


const JavaIntro = () => {
  return (
    <div className="java-intro-container">
      <h1>Introduction to Java</h1>
      <p>
        Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995. 
        It is platform-independent, which means we can write code once and run it anywhere using the Java Virtual Machine (JVM). 
        Java is widely used for building desktop applications, web applications, Android apps, and enterprise systems.
      </p>

      <h2>Key Features of Java</h2>
      <ul>
        <li><strong>Platform Independent:</strong> Write Once, Run Anywhere (WORA) — Java runs on any device with a JVM.</li>
        <li><strong>Object-Oriented:</strong> Promotes clean, reusable, and modular code.</li>
        <li><strong>Security:</strong> Java doesn't support pointers and has built-in protections.</li>
        <li><strong>Multithreading:</strong> Java allows concurrent execution of multiple tasks.</li>
        <li><strong>Just-In-Time (JIT) Compiler:</strong> Improves performance by compiling bytecode to native code at runtime.</li>
      </ul>

      <h2>Understanding Hello World Program in Java</h2>
      <p>Here's a simple Java program to display "Hello World" on the screen:</p>

      <pre>{`// This is a simple Java program to print Hello World!
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`}</pre>

      <p><strong>Output:</strong></p>
      <pre>Hello World!</pre>

      <h3>How does this work?</h3>
      <ul>
        <li><code>//</code> starts a single-line comment.</li>
        <li><code>public class HelloWorld</code> defines the main class.</li>
        <li><code>public static void main(String[] args)</code> is the entry point for Java programs.</li>
        <li><code>System.out.println("Hello, World!");</code> prints text to the console.</li>
      </ul>

      <h3>Java Program Execution Flow:</h3>
      <ol>
        <li>Write code in a file like <code>HelloWorld.java</code>.</li>
        <li>Compile it using <code>javac</code> → generates <code>HelloWorld.class</code>.</li>
        <li>The JVM reads the <code>.class</code> file and interprets the bytecode.</li>
        <li>JVM converts bytecode to binary machine code and runs it.</li>
      </ol>

      <h2>Comments in Java</h2>
      <p>Comments explain what the code is doing and are ignored during execution.</p>
      <p><strong>Single-line comment:</strong></p>
      <pre>{`// This is a comment`}</pre>

      <p><strong>Multi-line comment:</strong></p>
      <pre>{`/*
This is a multi-line comment.
This is useful for explaining larger sections of code.
*/`}</pre>

      <h2>Curly Braces and Indentation in Java</h2>
      <p>Curly braces <code>{'{' + '}'}</code> define code blocks. Indentation improves readability but is not required.</p>
      <pre>{`if (5 > 2) {
    System.out.println("True");
    System.out.println("Inside the if block");
}
System.out.println("Outside the if block");`}</pre>

      <h2>Naming Conventions in Java</h2>
      <ul>
        <li><strong>Class names:</strong> Start with a capital letter (e.g., <code>HelloWorld</code>).</li>
        <li><strong>Methods/variables:</strong> camelCase (e.g., <code>printMessage</code>).</li>
        <li><strong>Constants:</strong> Uppercase with underscores (e.g., <code>MAX_SIZE</code>).</li>
      </ul>

      <h2>Famous Applications Built Using Java</h2>
      <ul>
        <li><strong>Android Apps:</strong> Most Android apps use Java.</li>
        <li><strong>Netflix:</strong> Uses Java for backend services.</li>
        <li><strong>Amazon:</strong> Java is part of its backend architecture.</li>
        <li><strong>LinkedIn:</strong> Uses Java for scalability and performance.</li>
        <li><strong>Minecraft:</strong> Built entirely in Java.</li>
        <li><strong>Spotify:</strong> Uses Java in its backend systems.</li>
        <li><strong>Uber:</strong> Java handles backend services like trip management.</li>
        <li><strong>NASA WorldWind:</strong> A virtual globe software built with Java.</li>
      </ul>

      <h2>What Can We Do with Java?</h2>
      <ul>
        <li><strong>Mobile App Development:</strong> Using Android Studio.</li>
        <li><strong>Web Development:</strong> With Spring Boot, Jakarta EE.</li>
        <li><strong>Desktop GUI Applications:</strong> Using JavaFX, Swing.</li>
        <li><strong>Enterprise Applications:</strong> Banking, business software.</li>
        <li><strong>Game Development:</strong> Using LibGDX and other engines.</li>
        <li><strong>Big Data:</strong> Hadoop, Kafka use Java.</li>
        <li><strong>IoT:</strong> Java can run on embedded systems.</li>
        <li><strong>Cloud Apps:</strong> Java works on AWS, Azure, GCP.</li>
        <li><strong>Scientific Apps:</strong> For processing large scientific datasets.</li>
      </ul>
    </div>
  );
};

export default JavaIntro;
