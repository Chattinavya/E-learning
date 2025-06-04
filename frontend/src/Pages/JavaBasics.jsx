import React from 'react';


const JavaBasics = () => {
  return (
    <div className="java-basics-container">
      <h1>Java Syntax</h1>
      <p><strong>Last Updated :</strong> 06 May, 2025</p>

      <p>
        Java is an object-oriented programming language known for its simplicity, portability, and robustness. Its syntax is similar to C and C++, which makes it easier for developers with C/C++ backgrounds to learn.
      </p>
      <p>
        Java Syntax refers to a set of rules that define how Java programs are written and interpreted by the compiler. These rules help ensure the code is readable, logically correct, and free from syntax errors.
      </p>

      <h2>Structure of a Java Program</h2>
      <p>Let’s explore the basic syntax using a simple “Hello World” program:</p>

      <pre>
{`// FileName: Geeks.java

public class Geeks {

    // Program begins with a call to main() method
    // main method is the entry point of a Java Program
    public static void main(String args[]) {

        // Prints "Hello World" to the console
        System.out.println("Hello World");
    }
}`}
      </pre>

      <p><strong>Output:</strong> Hello World</p>

      <p>
        Java is one of the most popular and widely used programming languages and platforms. Let's learn how to write, compile, and run your first Java program.
      </p>

      <h2>Steps to Implement a Java Program</h2>

      <h3>1. Create a Java Program</h3>
      <p>Write your Java program using a text editor (like Notepad, VS Code) or an IDE (like IntelliJ, Eclipse, NetBeans).</p>

      <pre>
{`// Simple Java Hello World Program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}
// Save the file as HelloWorld.java`}
      </pre>

      <h3>2. Compile the Java Program</h3>
      <p>Use the <code>javac</code> compiler in your terminal/command prompt to compile:</p>
      <pre>javac HelloWorld.java</pre>
      <ul>
        <li>Ensure you're in the correct directory where the file is saved.</li>
        <li>If no errors, this command creates a <code>HelloWorld.class</code> file with the bytecode.</li>
      </ul>

      <h3>3. Run the Java Program</h3>
      <p>Run the compiled program using the Java interpreter:</p>
      <pre>java HelloWorld</pre>
      <p><strong>Output:</strong> Hello, World</p>

      <h2>Summary</h2>
      <ul>
        <li>Java syntax is easy to learn for those familiar with C/C++.</li>
        <li>Every Java application must contain a <code>main</code> method as the entry point.</li>
        <li>Compilation and execution are done using <code>javac</code> and <code>java</code> commands respectively.</li>
      </ul>
    </div>
  );
};

export default JavaBasics;
