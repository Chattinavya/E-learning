import React from 'react';

const JavaArrays = () => {
  return (
    <div style={{  fontFamily: 'Arial, sans-serif', lineHeight: '1.6', maxWidth: '800px', margin: 'auto' }}>
      <h1>Java Arrays Tutorial</h1>

      <h2>1. What is an Array in Java?</h2>
      <p>
        An array in Java is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed.
      </p>

      <h3>Declaration:</h3>
      <pre><code className="language-java">
{`int[] myArray; // Preferred syntax
String[] names;
double[] prices;`}
      </code></pre>

      <h3>Instantiation:</h3>
      <pre><code className="language-java">
{`myArray = new int[5]; // Creates an array of 5 integers`}
      </code></pre>

      <h2>2. Initialization of Arrays</h2>
      <h3>Static Initialization (inline):</h3>
      <pre><code className="language-java">
{`int[] numbers = {1, 2, 3, 4, 5};`}
      </code></pre>

      <h3>Dynamic Initialization:</h3>
      <pre><code className="language-java">
{`int[] numbers = new int[3];
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;`}
      </code></pre>

      <h2>3. Accessing Array Elements</h2>
      <p>Use the index (starting from 0) to access an array element:</p>
      <pre><code className="language-java">
{`System.out.println(numbers[1]); // Output: 20`}
      </code></pre>

      <h2>4. Iterating Through an Array</h2>
      <h3>Using a for loop:</h3>
      <pre><code className="language-java">
{`for(int i = 0; i < numbers.length; i++) {
  System.out.println(numbers[i]);
}`}
      </code></pre>

      <h3>Using enhanced for loop:</h3>
      <pre><code className="language-java">
{`for(int num : numbers) {
  System.out.println(num);
}`}
      </code></pre>

      <h2>5. Types of Arrays</h2>

      <h3>Single-Dimensional Array:</h3>
      <pre><code className="language-java">
{`int[] singleArray = new int[5];`}
      </code></pre>

      <h3>Multi-Dimensional Array:</h3>
      <pre><code className="language-java">
{`int[][] matrix = {
  {1, 2, 3},
  {4, 5, 6}
};

System.out.println(matrix[1][2]); // Output: 6`}
      </code></pre>

      <h2>6. Array of Objects</h2>
      <pre><code className="language-java">
{`String[] cars = new String[3];
cars[0] = "Toyota";
cars[1] = "Honda";
cars[2] = "Ford";`}
      </code></pre>

      <h2>7. Common Array Methods</h2>
      <ul>
        <li><code>Arrays.toString(array)</code>: Converts array to string</li>
        <li><code>Arrays.sort(array)</code>: Sorts the array</li>
        <li><code>Arrays.equals(arr1, arr2)</code>: Compares arrays</li>
        <li><code>array.length</code>: Returns size of the array</li>
      </ul>
      <pre><code className="language-java">
{`import java.util.Arrays;

int[] arr = {5, 3, 1};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr)); // Output: [1, 3, 5]`}
      </code></pre>

      <h2>8. Limitations of Arrays</h2>
      <ul>
        <li>Fixed size (once declared, cannot grow/shrink)</li>
        <li>Only stores elements of the same type</li>
      </ul>

      <h2>9. When to Use Arrays</h2>
      <ul>
        <li>When size is known and fixed</li>
        <li>When performance and memory efficiency is critical</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Arrays in Java are foundational for handling fixed-size data collections. Mastering arrays is crucial before moving on to more complex structures like <code>ArrayList</code> and <code>HashMap</code>.
      </p>
    </div>
  );
};

export default JavaArrays;
