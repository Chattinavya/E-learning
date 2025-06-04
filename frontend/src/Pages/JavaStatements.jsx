import React from 'react';


const JavaStatements = () => {
  return (
    <div className="java-statements-container">
      <h1>Java if, if-else, and if-else-if Statements</h1>

      <h2>Java if Statement</h2>
      <p>The <strong>if statement</strong> is the simplest form of decision-making in Java. It executes a block of code only if the specified condition is true.</p>

      <pre>{`// Java program to illustrate If statement
class GfG {
  public static void main(String args[]) {
    int i = 10;

    // using if statement
    if (i < 15)
      System.out.println("10 is less than 15");

    System.out.println("Outside if-block");
  }
}`}</pre>

      <p><strong>Output:</strong></p>
      <pre>{`10 is less than 15
Outside if-block`}</pre>

      <h3>Dry Run:</h3>
      <ul>
        <li>Program starts.</li>
        <li><code>i</code> is initialized to 10.</li>
        <li>Condition <code>i &lt; 15</code> evaluates to true → <code>"10 is less than 15"</code> gets printed.</li>
        <li><code>"Outside if-block"</code> is printed unconditionally.</li>
      </ul>

      <h3>Syntax:</h3>
      <pre>{`if (condition) {
  // Statements to execute if condition is true
}`}</pre>

      <h3>Note:</h3>
      <p>If braces are not used, only the immediate next statement is considered under <code>if</code>.</p>
      <pre>{`if (condition)
  statement1;
  statement2; // Not part of if block`}</pre>

      <h3>Example:</h3>
      <pre>{`class GFG {
  public static void main(String args[]) {
    String str = "GeeksforGeeks";
    int i = 4;

    if (i == 4) {
      i++;
      System.out.println(str);
    }

    System.out.println("i = " + i);
  }
}`}</pre>
      <p><strong>Output:</strong></p>
      <pre>{`GeeksforGeeks
i = 5`}</pre>

      <hr />

      <h2>Java if-else Statement</h2>
      <p>The <strong>if-else</strong> statement chooses between two paths. If the condition is true, it executes the <code>if</code> block; otherwise, it executes the <code>else</code> block.</p>

      <pre>{`public class IfElse {
  public static void main(String[] args) {
    int n = 10;

    if (n > 5) {
      System.out.println("The number is greater than 5.");
    } else {
      System.out.println("The number is 5 or less.");
    }
  }
}`}</pre>

      <p><strong>Output:</strong></p>
      <pre>{`The number is greater than 5.`}</pre>

      <h3>Syntax:</h3>
      <pre>{`if (condition) {
  // Executes if true
} else {
  // Executes if false
}`}</pre>

      <hr />

      <h2>Java Nested if Statement</h2>
      <p><strong>Nested if</strong> statements allow placing one <code>if</code> inside another for more complex decision-making.</p>

      <pre>{`public class NestedIf {
  public static void main(String[] args) {
    int a = 25;
    double w = 65.5;

    if (a >= 18) {
      if (w >= 50.0) {
        System.out.println("You are eligible to donate blood.");
      } else {
        System.out.println("You must weigh at least 50 kilograms to donate blood.");
      }
    } else {
      System.out.println("You must be at least 18 years old to donate blood.");
    }
  }
}`}</pre>

      <p><strong>Output:</strong></p>
      <pre>{`You are eligible to donate blood.`}</pre>

      <hr />

      <h2>Java if-else-if Ladder</h2>
      <p>The <strong>if-else-if ladder</strong> checks multiple conditions in order. The first condition that evaluates to true executes its block and the rest are skipped.</p>

      <pre>{`class GFG {
  public static void main(String[] args) {
    int i = 20;

    if (i == 10)
      System.out.println("i is 10");
    else if (i == 20)
      System.out.println("i is 20");
    else
      System.out.println("i is neither 10 nor 20");
  }
}`}</pre>

      <p><strong>Output:</strong></p>
      <pre>{`i is 20`}</pre>

      <h3>Extended Example:</h3>
      <pre>{`class GFG {
  public static void main(String[] args) {
    int i = 20;

    if (i == 10)
      System.out.println("i is 10");

    else if (i == 15)
      System.out.println("i is 15");

    else if (i == 20)
      System.out.println("i is 20");

    else
      System.out.println("i is not present");

    System.out.println("Outside if-else-if");
  }
}`}</pre>

      <p><strong>Output:</strong></p>
      <pre>{`i is 20
Outside if-else-if`}</pre>

      <h3>Benefits:</h3>
      <ul>
        <li>Sequential condition checking</li>
        <li>Improves readability</li>
        <li>Fallback with else block</li>
        <li>Handles both logical and numeric conditions</li>
      </ul>
    </div>
  );
};

export default JavaStatements;
