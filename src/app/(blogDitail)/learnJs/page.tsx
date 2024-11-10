

export default function learnJs(){
    return(
        <>
          <div className="bg-gray-100 text-gray-800 font-sans p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Hello, World!</h1>
      
      {/* Tutorial Content Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-xl mb-4">Welcome to the first tutorial. In this tutorial, you will learn how to write your first line of code.</p>
        
        <p className="text-xl mb-4">
          <strong>JavaScript</strong> is a very powerful language. It can be used within any browser in the world. On top of that, it can be used to write server-side code using <strong>Node.js</strong>.
        </p>

        <p className="text-xl mb-4">
          When using JavaScript inside the browser, we can change how the page looks and behaves. In this tutorial, we will only focus on learning the language itself. Therefore, we will use only one function to print our results: <code className="bg-gray-200 px-1 rounded">console.log</code>.
        </p>
      </div>

      {/* Exercise Section */}
      <div className="max-w-3xl mx-auto bg-yellow-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Exercise</h2>
        <p className="text-xl mb-4">
          You must print out to the console the sentence <code className="bg-gray-200 px-1 rounded">Hello, World!</code>
        </p>
        
        <pre className="bg-gray-800 text-white p-4 rounded-lg"><code>console.log(Goodbye, World!);</code></pre>
      </div>
    </div>

    <div className="bg-gray-100 text-gray-800 font-sans p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Variables and Types</h1>
      
      {/* Content Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-xl mb-4">
          Like almost every dynamic language, JavaScript is a duck-typed language, and therefore every variable is defined using the <code className="bg-gray-200 px-1 rounded">var</code> keyword, and can contain all types of variables.
        </p>

        <p className="text-xl mb-4">We can define several types of variables to use in our code:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <code>
            const myNumber = 3;                   // a number{'\n'}
            const myString = Hello, World!;     // a string{'\n'}
            const myBoolean = true;               // a boolean
          </code>
        </pre>

        <p className="text-xl mb-4">A few notes about variable types in JavaScript:</p>
        <ul className="list-disc list-inside text-xl mb-4">
          <li>The <strong>Number</strong> type can be both a floating point number and an integer.</li>
          <li><strong>Boolean</strong> variables can only be equal to either <code className="bg-gray-200 px-1 rounded">true</code> or <code className="bg-gray-200 px-1 rounded">false</code>.</li>
          <li>There are two more advanced types in JavaScript: an <strong>array</strong> and an <strong>object</strong>.</li>
        </ul>

        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <code>
            const myArray = [];                    // an array{'\n'}
            const myObject = {};                   // an object
          </code>
        </pre>

        <p className="text-xl mb-4">
          On top of that, there are two special types called <strong>undefined</strong> and <strong>null</strong>.
        </p>

        <p className="text-xl mb-4">
          When a variable is used without first defining a value for it, it is equal to <code className="bg-gray-200 px-1 rounded">undefined</code>. For example:
        </p>

        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <code>
            const newVariable;{'\n'}
            console.log(newVariable); // prints undefined
          </code>
        </pre>

        <p className="text-xl mb-4">
          The <code className="bg-gray-200 px-1 rounded">null</code> value is used to mark a variable as empty, whereas <code className="bg-gray-200 px-1 rounded">undefined</code> should not be used for this purpose.
        </p>

        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <code>
            const emptyVariable = null;{'\n'}
            console.log(emptyVariable); // prints null
          </code>
        </pre>
      </div>

      {/* Exercise Section */}
      <div className="max-w-3xl mx-auto bg-yellow-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Exercise</h2>
        <p className="text-xl mb-4">
          You must define the following variables:
        </p>
        <ul className="list-disc list-inside text-xl mb-4">
          <li>A number called <code className="bg-gray-200 px-1 rounded">myNumber</code> which contains the number 4;</li>
          <li>A string called <code className="bg-gray-200 px-1 rounded">myString</code> which contains the sentence <strong>Variables are great.</strong>;</li>
          <li>A boolean called <code className="bg-gray-200 px-1 rounded">myBoolean</code> which contains the value <code className="bg-gray-200 px-1 rounded">false</code>.</li>
        </ul>

        <pre className="bg-gray-800 text-white p-4 rounded-lg">
          <code>
            console.log(myNumber is equal to + myNumber);{'\n'}
            console.log(myString is equal to + myString);{'\n'}
            console.log(myBoolean is equal to + myBoolean);
          </code>
        </pre>
      </div>
    </div>

    <div className="bg-gray-100 text-gray-800 font-sans p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Arrays in JavaScript</h1>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-xl mb-4">
          JavaScript can hold an array of variables in an Array object. In JavaScript, an array also functions as a list, a stack, or a queue.
        </p>

        <p className="text-xl mb-4">To define an array, either use the brackets notation or the Array object notation:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <code>
            var myArray = [1, 2, 3];{'\n'}
            var theSameArray = new Array(1, 2, 3);
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Addressing</h2>
        <p className="text-xl mb-4">
          We can use the brackets <code className="bg-gray-200 px-1 rounded">[]</code> operator to address a specific cell in our array. Addressing uses zero-based indices, so for example, in <code className="bg-gray-200 px-1 rounded">myArray</code>, the 2nd member can be addressed with index 1.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <code>
            console.log(myArray[1]); // prints out 2
          </code>
        </pre>

        <p className="text-xl mb-4">
          Arrays in JavaScript are sparse, meaning that we can also assign variables to random locations even though previous cells were undefined.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <code>
            var myArray = []{'\n'}
            myArray[3] = hello{'\n'}
            console.log(myArray);
          </code>
        </pre>
        <p className="text-xl mb-4">Will print out:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <code>[undefined, undefined, undefined, hello]</code>
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Array Elements</h2>
        <p className="text-xl mb-4">
          Because JavaScript Arrays are just special kinds of objects, you can have elements of different types stored together in the same array.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
          <code>var myArray = [string, 10, {}]</code>
        </pre>
      </div>

      {/* Exercise Section */}
      <div className="max-w-3xl mx-auto bg-yellow-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Exercise</h2>
        <p className="text-xl mb-4">
          You must define an array with the following three variables:
        </p>
        <ul className="list-disc list-inside text-xl mb-4">
          <li>A string with the value <strong>What is the meaning of life?</strong></li>
          <li>A number with the value <strong>42</strong></li>
          <li>A boolean with the value <strong>true</strong></li>
        </ul>
        <pre className="bg-gray-800 text-white p-4 rounded-lg">
          <code>
            {/* // TODO: change myArray to contain the variables{'\n'} */}
            var myArray = [];{'\n'}
            console.log(myArray[0]);{'\n'}
            console.log(myArray[1]);{'\n'}
            console.log(myArray[2]);
          </code>
        </pre>
      </div>
    </div>

    <div className="bg-gray-100 p-6">
      {/* Tutorial Container */}
      <div className="container max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Manipulating Arrays</h1>

        {/* Introduction Text */}
        <p className="text-lg text-gray-700 mb-6">
          Arrays can function as a stack or a queue in JavaScript. This tutorial explains methods like
          <span className="text-blue-600 font-semibold"> push</span>, 
          <span className="text-blue-600 font-semibold"> pop</span>, 
          <span className="text-blue-600 font-semibold"> shift</span>, and 
          <span className="text-blue-600 font-semibold"> unshift</span> for array manipulation.
        </p>

        {/* Pushing and Popping Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pushing and Popping</h2>
          <p className="text-lg text-gray-700 mb-4">
            Arrays can also function as a stack. The <span className="font-semibold">push</span> and <span className="font-semibold">pop</span> methods insert and remove variables from the end of an array.
          </p>
          
          {/* Code Example */}
          <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
            <pre>
              <code>
                {`
const myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack); // [1, 2, 3]
console.log(myStack.pop()); // 3
console.log(myStack); // [1, 2]
                `}
              </code>
            </pre>
          </div>
        </div>

        {/* Queues Using Shifting and Unshifting Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Queues using Shifting and Unshifting</h2>
          <p className="text-lg text-gray-700 mb-4">
            The <span className="font-semibold">shift</span> and <span className="font-semibold">unshift</span> methods are used for manipulating arrays from the beginning.
          </p>

          {/* Code Example */}
          <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
            <pre>
              <code>
                {`
const myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
console.log(myQueue.shift()); // 1
console.log(myQueue.shift()); // 2
console.log(myQueue.shift()); // 3
                `}
              </code>
            </pre>
          </div>
        </div>

        {/* Splicing Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Splicing Arrays</h2>
          <p className="text-lg text-gray-700 mb-4">
            The <span className="font-semibold">splice</span> method removes a section of the array and returns it.
          </p>

          {/* Code Example */}
          <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
            <pre>
              <code>
                {`
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const splice = myArray.splice(3, 5);
console.log(splice); // [3, 4, 5, 6, 7]
console.log(myArray); // [0, 1, 2, 8, 9]
                `}
              </code>
            </pre>
          </div>
        </div>

        {/* Exercise Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Exercise</h2>
          <p className="text-lg text-gray-700 mb-4">
            Manipulate the array <code>myArray</code> by pushing the number 42 to the end and shifting a variable from the beginning.
          </p>

          {/* Code Example */}
          <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
            <pre>
              <code>
                {`
let myArray = [true, "What is the meaning of life?"];
myArray.push(42); // Push 42 to the end
myArray.shift();  // Remove the first element
console.log(myArray); // Output will be the updated array
                `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto p-6">
      {/* Heading 1 */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        JavaScript Operators
      </h1>

      {/* Paragraph */}
      <p className="text-xl text-gray-700 leading-relaxed mb-4">
        Every variable in JavaScript is casted automatically, so any operator between two variables will always give some kind of result.
      </p>

      {/* Subheading */}
      <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">
        The Addition Operator
      </h2>

      {/* Paragraph */}
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        The + (addition) operator is used for both addition and concatenation of strings. For example, adding two variables is easy:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg font-mono mb-6">
        <code className="text-sm text-red-500">var a = 1; var b = 2; var c = a + b; // c is now equal to 3</code>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        The addition operator is also used for concatenating strings to strings, strings to numbers, and numbers to strings:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg font-mono mb-6">
        <code className="text-sm text-yellow-500">
          console.log(Hello + John + !);<br />
          console.log(The meaning of life is + 42);<br />
          console.log(42 + is the meaning of life);
        </code>
      </div>

      {/* Subheading */}
      <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">
        Mathematical Operators
      </h2>

      {/* Paragraph */}
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        To subtract, multiply, and divide two numbers, use the minus (-), asterisk (*), and slash (/) signs.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg font-mono mb-6">
        <code className="text-sm text-green-500">
          console.log(3 - 5);     // outputs -2<br />
          console.log(3 * 5);     // outputs 15<br />
          console.log(3 / 5);     // outputs 0.6
        </code>
      </div>

      {/* Subheading */}
      <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">
        Advanced Mathematical Operators
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        JavaScript supports the modulus operator (%) which calculates the remainder of a division operation.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg font-mono mb-6">
        <code className="text-sm text-purple-500">
          console.log(5 % 3);     // outputs 2
        </code>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        JavaScript also supports combined assignment and operation operators. So, instead of typing myNumber = myNumber / 2, you can type myNumber /= 2.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg font-mono mb-6">
        <code className="text-sm text-blue-500">
          myNumber /= 2;<br />
          myNumber *= 2;<br />
          myNumber += 2;<br />
          myNumber -= 2;<br />
          myNumber %= 2;
        </code>
      </div>

      {/* Subheading */}
      <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">
        Math Module Functions
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        JavaScript has a Math module that contains advanced functions like <code className="text-yellow-500">Math.abs()</code>, <code className="text-yellow-500">Math.pow(x, y)</code>, and more.
      </p>
    </div>

    <div className="container mx-auto p-4">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Conditions in JavaScript</h1>

  <p className="text-xl text-gray-700 mb-4">
    The <code className="bg-gray-200 p-1 rounded">if</code> statement allows us to check if an expression is equal to true or false, and execute different code according to the result.
  </p>
  <p className="text-xl text-gray-700 mb-4">
    For example, if we want to ask the user whether his name is John, we can use the <code className="bg-gray-200 p-1 rounded">confirm</code> function.
  </p>

  <pre className="bg-gray-800 text-white p-4 rounded mb-6">
    {`if (confirm("Are you John Smith?")) {
        console.log("Hello John, how are you?");
    } else {
        console.log("Then what is your name?");
    }`}
  </pre>

  <p className="text-xl text-gray-700 mb-4">
    It is also possible to omit the <code className="bg-gray-200 p-1 rounded">else</code> keyword if we only want to execute a block of code only if a certain expression is true.
  </p>
  <p className="text-xl text-gray-700 mb-4">
    To evaluate whether two variables are equal, the <code className="bg-gray-200 p-1 rounded">==</code> operator is used. There is also another equality operator in JavaScript, <code className="bg-gray-200 p-1 rounded">===</code>, which does a strict comparison. This means that it will be true only if the two things you are comparing are the same type as well as same content.
  </p>

  <pre className="bg-gray-800 text-white p-4 rounded mb-6">
    {`console.log("1" == 1); // true
    console.log("1" === 1); // false`}
  </pre>

  <p className="text-xl text-gray-700 mb-4">
    For example:
  </p>
  
  <pre className="bg-gray-800 text-white p-4 rounded mb-6">
    {`var myNumber = 42;
    if (myNumber == 42) {
        console.log("The number is correct.");
    }`}
  </pre>

  <p className="text-xl text-gray-700 mb-4">
    Inequality operators can also be used to evaluate expressions. For example:
  </p>

  <pre className="bg-gray-800 text-white p-4 rounded mb-6">
    {`var foo = 1;
    var bar = 2;

    if (foo < bar) {
        console.log("foo is smaller than bar.");
    }`}
  </pre>

  <p className="text-xl text-gray-700 mb-4">
    Two or more expressions can be evaluated together using logical operators to check if two expressions evaluate to true together, or at least one of them. To check if two expressions both evaluate to true, use the AND operator <code className="bg-gray-200 p-1 rounded">&&</code>. To check if at least one of the expressions evaluate to true, use the OR operator <code className="bg-gray-200 p-1 rounded">||</code>.
  </p>

  <pre className="bg-gray-800 text-white p-4 rounded mb-6">
    {`var foo = 1;
    var bar = 2;
    var moo = 3;

    if (foo < bar && moo > bar) {
        console.log("foo is smaller than bar AND moo is larger than bar.");
    }

    if (foo < bar || moo > bar) {
        console.log("foo is smaller than bar OR moo is larger than bar.");
    }`}
  </pre>

  <p className="text-xl text-gray-700 mb-4">
    The <code className="bg-gray-200 p-1 rounded">NOT</code> operator <code className="bg-gray-200 p-1 rounded">!</code> can also be used likewise:
  </p>

  <pre className="bg-gray-800 text-white p-4 rounded mb-6">
    {`var notTrue = false;
    if (!notTrue) {
        console.log("not not true is true!");
    }`}
  </pre>

  <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6">The switch statement</h2>
  <p className="text-xl text-gray-700 mb-4">
    The <code className="bg-gray-200 p-1 rounded">switch</code> statement is used to select between more than two different options, and to run the same code for more than one option.
  </p>
  <p className="text-xl text-gray-700 mb-4">
    For example:
  </p>

  <pre className="bg-gray-800 text-white p-4 rounded mb-6">
    {`var rank = "Commander";
    switch(rank) {
        case "Private":
        case "Sergeant":
            console.log("You are not authorized.");
            break;
        case "Commander":
            console.log("Hello commander! What can I do for you today?");
            break;
        case "Captain":
            console.log("Hello captain! I will do anything you wish.");
            break;
        default:
            console.log("I don't know what your rank is.");
            break;
    }`}
  </pre>

  <p className="text-xl text-gray-700 mb-4">
    In this example, Private and Sergeant both trigger the first sentence, Commander triggers the second sentence, and Captain triggers the third. If an unknown rank was evaluated, the default keyword defines the action for this case (optional). We must use the <code className="bg-gray-200 p-1 rounded">break</code> statement between every code block to avoid the switch from executing the next code block.
  </p>

  <p className="text-xl text-gray-700 mb-4">
    Using the switch statement in general is not recommended, because forgetting the <code className="bg-gray-200 p-1 rounded">break</code> keyword causes very confusing results.
  </p>

  <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6">Exercise</h2>
  <p className="text-xl text-gray-700 mb-4">
    In this exercise, you must construct an <code className="bg-gray-200 p-1 rounded">if</code> statement inside the <code className="bg-gray-200 p-1 rounded">checkNumber</code> function that checks if the number <code className="bg-gray-200 p-1 rounded">myNumber</code> is equal to 42. If that is the case, the function must print out using <code className="bg-gray-200 p-1 rounded">console.log</code> the word <strong className="text-blue-600">correct</strong>. If <code className="bg-gray-200 p-1 rounded">myNumber</code> is not equal to 42, the function must print out using <code className="bg-gray-200 p-1 rounded">console.log</code> the word <strong className="text-red-600">incorrect</strong>.
  </p>

  <pre className="bg-gray-800 text-white p-4 rounded mb-6">
    {`function checkNumber(myNumber) {
        // TODO: write your code here
    }

    checkNumber(3);
    checkNumber(7);
    checkNumber(42);`}
  </pre>
</div>

<div className="p-6 bg-gray-100 rounded-lg">
  <h2 className="text-4xl font-bold text-center mb-4">Loops</h2>

  <h3 className="text-3xl font-semibold mb-4">The for statement</h3>
  <p className="text-xl mb-4">
    JavaScript has two methods for running the same code several times. It is mainly used for iterating over arrays or objects. Lets see an example:
  </p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      var i;
      for (i = 0; i &lt; 3; i = i + 1)
      &#123;
        console.log(i);
      &#125;
    </code>
  </pre>
  <p className="text-xl mb-4">This will print out the following:</p>
  <pre className="bg-gray-200 p-4 rounded-lg">
    <code className="text-lg text-gray-700">
      0
      1
      2
    </code>
  </pre>

  <p className="text-xl mb-4">
    The for statement in JavaScript has the same syntax as in Java and C. It has three parts:
  </p>
  <ul className="list-disc pl-6 text-xl mb-4">
    <li>Initialization - Initializes the iterator variable i. In this example, we initialize i to 0.</li>
    <li>Condition - As long as the condition is met, the loop continues to execute. In this example, we check that i is less than 3.</li>
    <li>Increment - A directive which increments the iterator. In our case, we increment it by 1 on every loop.</li>
  </ul>

  <p className="text-xl mb-4">
    We can also write a shorter notation for the statement by inserting the variable definition inside the for loop and incrementing using the ++ operator.
  </p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      for (var i = 0; i &lt; 3; i++) &#123;
        console.log(i);
      &#125;
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Iterating over an array</h3>
  <p className="text-xl mb-4">
    To iterate over an array and print out all of its members, we usually use the for statement. Heres an example:
  </p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      var myArray = [A, B, C];
      for (var i = 0; i &lt; myArray.length; i++) &#123;
        console.log(The member of myArray in index  + i +  is  + myArray[i]);
      &#125;
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">The while statement</h3>
  <p className="text-xl mb-4">
    The while statement is a more simple version of the for statement which checks if an expression evaluates to true and runs as long as it says true.
  </p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      var i = 99;
      while (i &gt; 0) &#123;
        console.log(i + bottles of beer on the wall);
        i -= 1;
      &#125;
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Break and continue statements</h3>
  <p className="text-xl mb-4">
    The break statement allows stopping the execution of a loop. For example, we can create a loop that loops forever using while(true) and use the break statement to break inside the loop when a certain condition is met.
  </p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      var i = 99;
      while (true) &#123;
        console.log(i + bottles of beer on the wall);
        i -= 1;
        if (i == 0) &#123;
          break;
        &#125;
      &#125;
    </code>
  </pre>

  <p className="text-xl mb-4">
    The continue statement skips the rest of the loop and jumps back to the beginning of the loop. For example, if we would want to print only odd numbers using a for statement, we can do the following:
  </p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      for (var i = 0; i &lt; 100; i++) &#123;
        if (i % 2 == 0) &#123;
          continue;
        &#125;
        console.log(i + is an odd number.);
      &#125;
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Exercise</h3>
  <p className="text-xl mb-4">
    In this exercise, you must write a for loop that iterates on the myArray variable and prints out all of its members.
  </p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      var myArray = [What is the meaning of life?, The meaning of life is, 42];
       TODO: modify this code
      for (var i = 0; i &lt; myArray.length; i++) &#123;
        console.log(myArray[i]);
      &#125;
    </code>
  </pre>
</div>

<div className="p-6 bg-gray-100 rounded-lg">
  <h2 className="text-4xl font-bold text-center mb-4">Objects</h2>

  <p className="text-xl mb-4">
    JavaScript is a functional language, and for object-oriented programming, it uses both objects and functions, but objects are usually used as a data structure, similar to a dictionary in Python or a map in Java. In this tutorial, we will learn how to use objects as a data structure. The advanced tutorials explain more about object-oriented JavaScript.
  </p>

  <h3 className="text-3xl font-semibold mb-4">Initializing an Object</h3>
  <p className="text-xl mb-4">
    To initialize an object, use curly braces:
  </p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      var emptyObject = &#123;&#125;;
      var personObject = &#123;
          firstName : John,
          lastName : Smith
      &#125;
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Member Addressing</h3>
  <p className="text-xl mb-4">
    Members of objects can be addressed using the brackets operator [], very much like arrays, but just like many other object-oriented languages, the period . operator can also be used. They are very similar, except for the fact that brackets return a member by using a string, in contrast to the period operator, which requires the member to be a simple word (the word should not contain spaces, start with a number, or use illegal characters).
  </p>

  <p className="text-xl mb-4">
    For example, we can continue to fill the person object with more details:
  </p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      var personObject = &#123;
          firstName : John,
          lastName : Smith
      &#125;
      personObject.age = 23;
      personObject[salary] = 14000;
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Iteration</h3>
  <p className="text-xl mb-4">
    Iterating over members of a dictionary is not a trivial task, since iterating over objects can also yield members who don not actually belong to an object. Therefore, we must use the hasOwnProperty method to check that the member in fact belongs to the object.
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      for (var member in personObject) &#123;
          if (personObject.hasOwnProperty(member)) &#123;
              console.log(the member + member + of personObject is + personObject[member])
          &#125;
      &#125;
    </code>
  </pre>

  <p className="text-xl mb-4">This will eventually print out:</p>
  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      the member firstName of personObject is John
      the member lastName of personObject is Smith
      the member age of personObject is 23
      the member salary of personObject is 14000
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Exercise</h3>
  <p className="text-xl mb-4">
    You must define an object called person with the following members:
  </p>
  <ul className="list-disc pl-6 text-xl mb-4">
    <li>The member firstName of the person is Jack</li>
    <li>The member lastName of the person is Smith</li>
    <li>The member age of the person is 19</li>
    <li>The member employed of the person is true</li>
  </ul>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
       TODO: change this code
      var person = &#123;
          firstName: Jack,
          lastName: Smith,
          age: 19,
          employed: true
      &#125;

      console.log(person.firstName);
      console.log(person.lastName);
      console.log(person.age);
      console.log(person.employed);
    </code>
  </pre>
</div>

<div className="p-6 bg-gray-100 rounded-lg">
  <h2 className="text-4xl font-bold text-center mb-4">Functions</h2>

  <p className="text-xl mb-4">
    Functions are code blocks that can have arguments, and functions have their own scope. In JavaScript, functions are a very important feature of the program, and especially the fact that they can access local variables of a parent function (this is called a closure).
  </p>

  <p className="text-xl mb-4">
    There are two ways to define functions in JavaScript - named functions and anonymous functions.
  </p>

  <h3 className="text-3xl font-semibold mb-4">Named Function</h3>
  <p className="text-xl mb-4">
    To define a named function, we use the function statement as follows:
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      function greet(name) &#123;
          return Hello + name + !;
      &#125;

      console.log(greet(Eric));      
    </code>
  </pre>

  <p className="text-xl mb-4">
    In this function, the <code className="font-bold">name</code> argument to the greet function is used inside the function to construct a new string and return it using the return statement.
  </p>

  <h3 className="text-3xl font-semibold mb-4">Anonymous Function</h3>
  <p className="text-xl mb-4">
    To define an anonymous function, we can alternatively use the following syntax:
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      var greet = function(name) &#123;
          return Hello + name + !;
      &#125;

      console.log(greet(Eric));      // prints out Hello Eric!
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Exercise</h3>
  <p className="text-xl mb-4">
    Define a function called <code className="font-bold">multiplyFive</code> which accepts a number and returns that number multiplied by 5.
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
       TODO: define the function multiplyFive here
      var multiplyFive = function(number) &#123;
          return number * 5;
      &#125;

      console.log(multiplyFive(3));
      console.log(multiplyFive(4));
      console.log(multiplyFive(5));
      console.log(multiplyFive(6));
    </code>
  </pre>
</div>

<div className="p-6 bg-gray-100 rounded-lg">
  <h2 className="text-4xl font-bold text-center mb-4">Pop-up Boxes</h2>

  <p className="text-xl mb-4">
    There are three types of pop-up boxes in JavaScript: <strong>confirm</strong>, <strong>alert</strong>, and <strong>prompt</strong>. To use any of them, type:
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      confirm(Hi!);<br />
      prompt(Bye!);<br />
      alert(Hello);
    </code>
  </pre>

  <p className="text-xl mb-4">
    <strong>Confirm</strong> boxes will return true if OK is selected, and return false if Cancel is selected.
  </p>
  <p className="text-xl mb-4">
    <strong>Alert</strong> boxes will not return anything.
  </p>
  <p className="text-xl mb-4">
    <strong>Prompt</strong> boxes will return whatever is in the text box. Note: prompt boxes also have an optional second parameter, which is the text that will already be in the text box.
  </p>

  <h3 className="text-3xl font-semibold mb-4">Exercise</h3>
  <p className="text-xl mb-4">
    Make a variable <code className="font-bold">test</code> set it equal to a prompt box, and type Hi! in it (without the quotes) when it pops up. 
    <strong>Note:</strong> your pop-up blocker must not be enabled.
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-lg text-gray-700">
      var test = prompt(Hi!); // The prompt box will appear with Hi! in it
    </code>
  </pre>
</div>

<div className="p-6 bg-gray-100 rounded-lg">
  <h2 className="text-4xl font-bold text-center mb-4">Callbacks in JavaScript</h2>

  <p className="text-xl mb-4">
    Callbacks in JavaScript are functions that are passed as arguments to other functions. This is a very important feature of asynchronous programming, and it enables the function that receives the callback to call our code when it finishes a long task, while allowing us to continue the execution of the code.
  </p>

  <h3 className="text-3xl font-semibold mb-4">Example</h3>

  <p className="text-xl mb-4">
    For example:
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
    <code className="text-lg text-gray-700">
      var callback = function() {'{'}<br />
        console.log(Done!);<br />
      {'}'}<br />
      setTimeout(callback, 5000);
    </code>
  </pre>

  <p className="text-xl mb-4">
    This code waits 5 seconds and prints out Done! when the 5 seconds are up. Note that this code will not work in the interpreter because it is not designed for handling callbacks.
  </p>

  <p className="text-xl mb-4">
    It is also possible to define callbacks as anonymous functions, like so:
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
    <code className="text-lg text-gray-700">
      setTimeout(function() {'{'}<br />
        console.log(Done!);<br />
      {'}'}, 5000);
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Exercise</h3>
  <p className="text-xl mb-4">
    Define a function called <code className="font-bold">callback</code> which receives an argument and prints it out.
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
    <code className="text-lg text-gray-700">
      function useCallback(callback) {'{'}<br />
        callback(1);<br />
        callback(2);<br />
        callback(3);<br />
      {'}'}<br /><br />

      function callback(sentence) {'{'}<br />
        console.log(sentence);<br />
      {'}'}<br /><br />

      useCallback(callback); // Execute useCallback with the callback as the argument
    </code>
  </pre>

  <p className="text-xl mb-4">
    The <code className="font-bold">useCallback</code> function will execute the <code className="font-bold">callback</code> function with three different arguments: 1, 2, and 3. The output will be the printed sentences from the callback function.
  </p>
</div>

<div className="p-6 bg-gray-100 rounded-lg">
  <h2 className="text-4xl font-bold text-center mb-4">Arrow Functions in JavaScript</h2>

  <p className="text-xl mb-4">
    Arrow functions are a feature of ES6, their behavior is generally the same as a regular function. These are anonymous functions with a special syntax. They do not have their own <code className="font-bold">this</code>, <code className="font-bold">arguments</code>, or <code className="font-bold">super</code>, and they ca not be used as constructors.
  </p>

  <p className="text-xl mb-4">
    Arrow functions are often used as callbacks of native JS functions like <code className="font-bold">map</code>, <code className="font-bold">filter</code>, or <code className="font-bold">sort</code>. The reason for their name is due to the use of <code className="font-bold">={">"}</code> in the syntax.
  </p>

  <h3 className="text-3xl font-semibold mb-4">Example</h3>

  <p className="text-xl mb-4">
    To define an arrow function, we use the <code className="font-bold">() ={">"} {}</code> structure as follows:
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
    <code className="text-lg text-gray-700">
      const greet = (name) ={">"} {'{'}<br />
        return Hello + name + !;<br />
      {'}'}<br /><br />

      console.log(greet(Eric)); // prints out Hello Eric!
    </code>
  </pre>

  <p className="text-xl mb-4">
    In this function, the <code className="font-bold">name</code> argument to the <code className="font-bold">greet</code> function is used inside the function to construct a new string and return it using the <code className="font-bold">return</code> statement.
  </p>

  <h3 className="text-3xl font-semibold mb-4">Shortened Syntax</h3>

  <p className="text-xl mb-4">
    In case that the function only receives one argument, we can omit the parentheses:
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
    <code className="text-lg text-gray-700">
      const greet = name ={">"} Hello + name + !;<br /><br />

      console.log(greet(Eric)); // prints out Hello Eric!
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Even Shorter Syntax</h3>

  <p className="text-xl mb-4">
    If we want to do an explicit return of the function and have only one line of code, we can avoid the <code className="font-bold">return</code> statement and omit the curly brackets too:
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
    <code className="text-lg text-gray-700">
      const greet = name ={">"} Hello + name + !;<br /><br />

      console.log(greet(Eric)); // prints out Hello Eric!
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Using Arrow Functions as Callbacks</h3>

  <p className="text-xl mb-4">
    Here’s an example of how to use an arrow function as a callback with the <code className="font-bold">map</code> method:
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
    <code className="text-lg text-gray-700">
      let numbers = [3, 5, 8, 9, 2];<br /><br />

       Using ES6 arrow functions<br />
      const multiplyByTwo = number ={">"} number * 2;<br /><br />

      let multipliedNumbers = numbers.map(multiplyByTwo);<br />
      console.log(multipliedNumbers); // prints out: 6, 10, 16, 18, 4
    </code>
  </pre>

  <h3 className="text-3xl font-semibold mb-4">Exercise</h3>
  <p className="text-xl mb-4">
    Define an arrow function <code className="font-bold">divideByTwo</code> which accepts a number and returns that number divided by 2.
  </p>

  <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
    <code className="text-lg text-gray-700">
      const divideByTwo = number = number / 2;<br /><br />

      console.log(divideByTwo(4)); // prints out 2
      console.log(divideByTwo(8)); // prints out 4
      console.log(divideByTwo(12)); // prints out 6
      console.log(divideByTwo(6)); // prints out 3
    </code>
  </pre>
</div>

        </>
    )
}