

export default function AdvanceJs(){
    return(
        <>
         <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Promises</h1>
      <p className="text-xl mb-6">
        Promises are the basics of asynchronous programming in JavaScript, and
        are very important to master.
      </p>

      <h2 className="text-3xl font-semibold mb-3">What is Asynchronous Programming?</h2>
      <p className="text-xl mb-6">
        Asynchronous programming, or in short, async programming, is a method of
        programming which enables different parts of code to run at changing
        times, instead of immediately.
      </p>

      <p className="text-xl mb-6">
        This is mostly required when we want to fetch information from some
        remote server, and write code which does something with what the server
        returned:
      </p>

      <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
        <pre className="whitespace-pre-wrap">
          <code>
            {`function getServerStatus() {
    const result = fetch("/server/status");

    // THIS WILL NOT WORK!
    console.log("The status from the server is: ", result.ok);
}`}
          </code>
        </pre>
      </div>

      <p className="text-xl mb-6">
        In many programming languages such as Python, this approach would work,
        because functions are by default synchronous functions.
      </p>

      <p className="text-xl mb-6">
        In JavaScript, most APIs which require waiting for a function to do
        something, are asynchronous by default which means that this code will
        not do what we think it will do, since the fetch function is asynchronous,
        and therefore will return something which is not exactly the result, but
        will eventually be the result. This thing which is returned from the
        fetch function is called a Promise in JavaScript.
      </p>

      <h2 className="text-3xl font-semibold mb-3">The Promise Object</h2>
      <div className="text-xl mb-6">
        A Promise is a native JavaScript object which has two traits:
        <ol className="list-decimal ml-6">
          <li>It receives a single argument which is a function. This function needs to have two arguments, a resolve function and a reject function. The code written inside the promise needs to use one of these two functions.</li>
          <li>It can be waited on using the then method (and other similar methods), or the await statement.</li>
        </ol>
      </div>

      <p className="text-xl mb-6">
        An asynchronous function is defined by a function, which instead of
        returning the value it was supposed to return, it returns a Promise object,
        which will eventually resolve and give the user the answer.
      </p>

      <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
        <pre className="whitespace-pre-wrap">
          <code>
            {`function sumAsync(x, y) {
    const p = new Promise((resolve, reject) => {
        // this resolves the promise we just created with the output of x+y
        resolve(x + y);                         
    });

    // This returns the promise, not the value
    return p;
}`}

          </code>
        </pre>
      </div>

      <h2 className="text-3xl font-semibold mb-3">Rejecting promises</h2>
      <p className="text-xl mb-6">
        In a synchronous flow, if we want to tell the user that something went
        wrong so he can catch an exception, we throw an exception using the throw
        argument. When using promises, we need to trigger the reject function
        instead.
      </p>

      <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
        <pre className="whitespace-pre-wrap">
          <code>
            {`function sumAsync(x, y) {
    return new Promise((resolve, reject) => {
        // run this in 500ms from now
        setTimeout(() => {
            if (x < 0 || y < 0) {
                reject("Negative values received");
            } else {
                resolve(x + y);
            }
        }, 500);
    });
}

sumAsync(-5, 7).then((result) => {
    console.log("The result of the addition is:", result);
}).catch((error) => {
    console.log("Error received:", error);
});`}
          </code>
        </pre>
      </div>

      <h2 className="text-3xl font-semibold mb-3">Exercise</h2>
      <p className="text-xl mb-6">
        Write a function which receives a string, and returns a Promise. The
        promise should resolve with the uppercase version of the string, but should
        reject if the string is null.
      </p>

      <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
        <pre className="whitespace-pre-wrap">
          <code>
            {`function upperCaseAsync(s) {
    return new Promise((resolve, reject) => {
        if (s === null) {
            reject("No string received!");
        } else {
            resolve(s.toUpperCase());
        }
    });
}

// Test cases
upperCaseAsync("steve").then(console.log);  // Should print: "STEVE"
upperCaseAsync(null).catch((error) => {
    console.log(error);  // Should print: "No string received!"
});`}
          </code>
        </pre>
      </div>
    </div>

    <div className="p-6 bg-gray-50 text-gray-800 rounded-lg shadow-md">
  {/* Introduction Section */}
  <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">
    Async and Await
  </h1>
  <p className="text-xl mb-6">
    The <code className="bg-gray-200 px-2 py-1 rounded-md">async</code> and
    <code className="bg-gray-200 px-2 py-1 rounded-md">await</code> keywords
    in JavaScript are used to make asynchronous programming easy, by introducing
    something called coroutines. A coroutine is a function which can pause its
    execution and return control to the main loop until some event occurs. It is an
    alternative approach for using callback functions, which makes it easier to write,
    understand and maintain.
  </p>

  {/* The await Keyword */}
  <h2 className="text-3xl font-semibold mb-4 text-indigo-500">The await keyword</h2>
  <p className="text-lg mb-6">
    The <code className="bg-gray-200 px-2 py-1 rounded-md">await</code> keyword is
    a special command which tells JavaScript to stop the execution of the current
    function until a Promise resolves, and then return the promises value. It can be
    seen as an endless loop which checks if the promise has been resolved, and returns
    the value of the resolved promise when it does.
  </p>
  <p className="text-lg mb-6">
    The <code className="bg-gray-200 px-2 py-1 rounded-md">await</code> keyword
    only works inside <code className="bg-gray-200 px-2 py-1 rounded-md">async</code>
    functions (which are coroutines, as explained before). The tricky part about async
    functions is that they return a Promise, instead of a value. This means that every
    time we need to run an async function, we need to await on it if we want to get the
    return value.
  </p>

  {/* Example Code Section */}
  <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Example Code</h3>
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
    <code>
      {`function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      async function sumAsync(x, y) {
        // this code waits here for 500 milliseconds
        await sleep(500);
        // done waiting. let's calculate and return the value
        return x + y;
      }

      // sumAsync is an async function, which means it returns a Promise.
      sumAsync(5, 7).then((result) => {
        console.log("The result of the addition is:", result);
      });`}
    </code>
  </pre>

  <p className="text-lg mt-4 mb-6">
    We can make our code <code className="bg-gray-200 px-2 py-1 rounded-md">sumAsync</code>
    much nicer by simply using <code className="bg-gray-200 px-2 py-1 rounded-md">await</code>
    on the <code className="bg-gray-200 px-2 py-1 rounded-md">sleep</code> function and
    then returning the result.
  </p>

  {/* Exercise Section */}
  <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Exercise</h3>
  <p className="text-lg mb-6">
    Write an async function which waits 500 milliseconds and then returns the uppercase
    of a given string. Use the sleep function provided.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
    <code>
      {`function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      async function uppercaseString(s) {
        // your code goes here
        await sleep(500);
        return s.toUpperCase();
      }

      uppercaseString("edward").then(console.log);`}
    </code>
  </pre>

  {/* Output */}
  <div className="mt-6">
    <p className="text-lg">Expected output: EDWARD</p>
  </div>
</div>

<div className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
  {/* Introduction Section */}
  <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">
    Object Oriented JavaScript
  </h1>
  <p className="text-xl mb-6">
    JavaScript uses functions as classes to create objects using the <code className="bg-gray-200 px-2 py-1 rounded-md">new</code> keyword. Here is an example:
  </p>

  {/* Code Example 1 */}
  <h2 className="text-3xl font-semibold mb-4 text-indigo-500">Example 1: Using a Constructor Function</h2>
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
    <code>
      {`function Person(firstName, lastName) {
    // construct the object using the arguments
    this.firstName = firstName;
    this.lastName = lastName;

    // a method which returns the full name
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

var myPerson = new Person("John", "Smith");
console.log(myPerson.fullName());            // outputs "John Smith"`}
    </code>
  </pre>

  <p className="text-lg mb-6">
    Creating an object using the <code className="bg-gray-200 px-2 py-1 rounded-md">new</code> keyword is the same as writing the following code:
  </p>

  {/* Code Example 2 */}
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
    <code>
      {`var myPerson = {
    firstName : "John",
    lastName : "Smith",
    fullName : function()
    {
        return this.firstName + " " + this.lastName;
    }
}`}
    </code>
  </pre>

  <p className="text-lg mb-6">
    The difference between the two methods of creating objects is that the first method uses a class to define the object and then the <code className="bg-gray-200 px-2 py-1 rounded-md">new</code> keyword to instantiate it, and the second method immediately creates an instance of the object.
  </p>

  {/* Exercise Section */}
  <h2 className="text-3xl font-semibold mb-4 text-indigo-500">Exercise</h2>
  <p className="text-lg mb-6">
    Create a class called <code className="bg-gray-200 px-2 py-1 rounded-md">Person</code> which accepts the name of a person as a string, and his/her age as a number.
  </p>
  <p className="text-lg mb-6">
    The <code className="bg-gray-200 px-2 py-1 rounded-md">Person</code> class should have a method called <code className="bg-gray-200 px-2 py-1 rounded-md">describe</code> which returns a string with the following syntax:
    <br />
    <code className="bg-gray-200 px-2 py-1 rounded-md">name, age years old</code>. So for example, if John is 19 years old then the function <code className="bg-gray-200 px-2 py-1 rounded-md">describe</code> of his object will return <code className="bg-gray-200 px-2 py-1 rounded-md">John, 19 years old</code>.
  </p>

  {/* Code Example 3 */}
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
    <code>
      {`// TODO: create the Person class using a function

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.describe = function() {
    return this.name + ", " + this.age + " years old";
  };
}

var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());  // "Jack, 25 years old"
console.log(jill.describe());  // "Jill, 24 years old"`}
    </code>
  </pre>

  <p className="text-lg mt-6">
    Expected output for the above code:
  </p>
  <pre className="bg-gray-200 p-4 rounded-md mt-2">
    <code>
      Jack, 25 years old
      <br />
      Jill, 24 years old
    </code>
  </pre>
</div>

<div className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
  {/* Introduction Section */}
  <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">
    Function Context
  </h1>
  <p className="text-xl mb-6">
    Functions in JavaScript run in a specific context, and using the <code className="bg-gray-200 px-2 py-1 rounded-md">this</code> keyword, we have access to it.
  </p>
  <p className="text-lg mb-6">
    All standard functions in the browser run under the Window context. Functions defined under an object or a class (another function) will use the context of the object it was created in. However, we can also change the context of a function at runtime, either before or while executing the function.
  </p>

  {/* Binding a Method Section */}
  <h2 className="text-3xl font-semibold mb-4 text-indigo-500">Binding a Method to an Object</h2>
  <p className="text-lg mb-6">
    To bind a function to an object and make it an object method, we can use the <code className="bg-gray-200 px-2 py-1 rounded-md">bind</code> function. Here is a simple example:
  </p>

  {/* Code Example 1 */}
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
    <code>
      {`var person = {
  name : "John"
};

function printName() {
    console.log(this.name);
}

var boundPrintName = printName.bind(person);
boundPrintName();  // prints out "John"`}
    </code>
  </pre>

  <p className="text-lg mb-6">
    In this example, we create a <code className="bg-gray-200 px-2 py-1 rounded-md">boundPrintName</code> function that is bound to the <code className="bg-gray-200 px-2 py-1 rounded-md">person</code> object. When we call <code className="bg-gray-200 px-2 py-1 rounded-md">boundPrintName()</code>, it prints John as expected.
  </p>

  {/* Calling a Function with a Different Context */}
  <h2 className="text-3xl font-semibold mb-4 text-indigo-500">Calling a Function with a Different Context</h2>
  <p className="text-lg mb-6">
    We can use the <code className="bg-gray-200 px-2 py-1 rounded-md">call</code> and <code className="bg-gray-200 px-2 py-1 rounded-md">apply</code> functions to call a function as if it was bound to an object. The difference between the <code className="bg-gray-200 px-2 py-1 rounded-md">call</code> and <code className="bg-gray-200 px-2 py-1 rounded-md">apply</code> functions is only by how they receive their arguments:
  </p>
  <ul className="list-disc pl-6">
    <li>
      <strong className="font-semibold">call</strong>: Receives the <code className="bg-gray-200 px-2 py-1 rounded-md">this</code> argument first, followed by the function arguments.
    </li>
    <li>
      <strong className="font-semibold">apply</strong>: Receives the <code className="bg-gray-200 px-2 py-1 rounded-md">this</code> argument first, followed by an array of arguments to pass on to the function.
    </li>
  </ul>
  
  <h3 className="text-2xl font-semibold mt-4 mb-4 text-indigo-400">Example: Using call</h3>

  {/* Code Example 2 */}
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
    <code>
      {`printName.call(person);  // prints out "John"`}
    </code>
  </pre>

  <p className="text-lg mb-6">
    In the example above, we call the <code className="bg-gray-200 px-2 py-1 rounded-md">printName</code> function with the context set to <code className="bg-gray-200 px-2 py-1 rounded-md">person</code> using <code className="bg-gray-200 px-2 py-1 rounded-md">call</code>. This prints John.
  </p>

  {/* call/apply vs bind Section */}
  <h2 className="text-3xl font-semibold mb-4 text-indigo-500">call/apply vs bind</h2>
  <p className="text-lg mb-6">
    The difference between <code className="bg-gray-200 px-2 py-1 rounded-md">call</code>/<code className="bg-gray-200 px-2 py-1 rounded-md">apply</code> and <code className="bg-gray-200 px-2 py-1 rounded-md">bind</code> is that <code className="bg-gray-200 px-2 py-1 rounded-md">bind</code> returns a new function identical to the old function, except that the value of <code className="bg-gray-200 px-2 py-1 rounded-md">this</code> in the new function is now the object it was bound to. On the other hand, <code className="bg-gray-200 px-2 py-1 rounded-md">call</code>/<code className="bg-gray-200 px-2 py-1 rounded-md">apply</code> calls the function with <code className="bg-gray-200 px-2 py-1 rounded-md">this</code> being the bound object, but it does not return a new function or change the original.
  </p>

  {/* Code Example 3 */}
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
    <code>
      {`var boundPrintName = printName.call(person);  // boundPrintName gets printName's return value (null)
boundPrintName();  // doesn't work because it's not a function, it's null`}
    </code>
  </pre>

  <p className="text-lg mb-6">
    In the code above, we incorrectly assign the result of <code className="bg-gray-200 px-2 py-1 rounded-md">call</code> to <code className="bg-gray-200 px-2 py-1 rounded-md">boundPrintName</code>, causing it to be null instead of a callable function.
  </p>

  {/* Exercise Section */}
  <h2 className="text-3xl font-semibold mb-4 text-indigo-500">Exercise</h2>
  <p className="text-lg mb-6">
    Create bound copies of <code className="bg-gray-200 px-2 py-1 rounded-md">printFullName</code> and <code className="bg-gray-200 px-2 py-1 rounded-md">printDetails</code> to <code className="bg-gray-200 px-2 py-1 rounded-md">person</code> called <code className="bg-gray-200 px-2 py-1 rounded-md">boundPrintFullName</code> and <code className="bg-gray-200 px-2 py-1 rounded-md">boundPrintDetails</code>.
  </p>

  {/* Code Example 4 */}
  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
    <code>
      {`var person = {
  firstName: "John",
  lastName: "Smith",
  age: 23
};

function printFullName() {
  console.log(this.firstName + " " + this.lastName);
}

function printDetails() {
  console.log(this.firstName + " is " + this.age + " years old");
}

// TODO: create bound copies of printFullName and printDetails.
var boundPrintFullName;
var boundPrintDetails;

boundPrintFullName();
boundPrintDetails();`}
    </code>
  </pre>
</div>

<div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">JavaScript Destructuring</h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-2">Destructuring an Object</h2>
        <p className="text-xl text-gray-700 mb-4">
          Destructuring allows you to extract properties from an object into variables with a concise syntax.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          {`
const person = {
  head: {
    eyes: 'x',
    mouth: {
      teeth: 'x',
      tongue: 'x'
    }
  },
  body: {
    shoulders: 'x',
    chest: 'x',
    arms: 'x',
    hands: 'x',
    legs: 'x'
  }
};

let { head } = person;  // Extracting the head property

// Using destructuring with alias
let { head: myHead } = person;  
console.log(myHead);  // prints '{ eyes, mouth: { teeth, tongue } }'
          `}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-2">Destructuring an Array</h2>
        <p className="text-xl text-gray-700 mb-4">
          Destructuring can also be used with arrays to assign variables to specific positions.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          {`
let numbers = ['2', '3', '7'];

let [two, three] = numbers;  // Extracting values

console.log(two);  // prints '2'
console.log(three);  // prints '3'
          `}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-2">Destructuring with Functions</h2>
        <p className="text-xl text-gray-700 mb-4">
          You can also destructure function parameters to extract data directly in the function signature.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          {`
function getHeadAndBody({ head, body }) {
  return { head, body };
}

let personDetails = getHeadAndBody(person);
console.log(personDetails);  // { head: {...}, body: {...} }
          `}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-2">Deep Destructuring</h2>
        <p className="text-xl text-gray-700 mb-4">
          Destructuring can be done deeply to access nested properties in an object.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          {`
let computer = {
  processor: {
    transistor: {
      silicon: {
        thickness: '9nm'
      }
    }
  }
};

let { processor: { transistor: { silicon: { thickness } } } } = computer;

console.log(thickness);  // prints '9nm'
          `}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-2">Exercise: Destructure Legs and Third Position</h2>
        <p className="text-xl text-gray-700 mb-4">
          Use destructuring to get the legs property from the person object and the third position from the numbers array.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
          {`
const person = {
  head: {
    eyes: 'x',
    mouth: {
      teeth: 'x',
      tongue: 'x'
    }
  },
  body: {
    shoulders: 'x',
    chest: 'x',
    arms: 'x',
    hands: 'x',
    legs: 'x'
  }
};

const numbers = ['2', '3', '4'];

let { body: { legs: myLegs } } = person;
let [ , , thirdPosition] = numbers;

console.log(myLegs);  // prints 'x'
console.log(thirdPosition);  // prints '4'
          `}
        </pre>
      </section>
    </div>
        </>
    )
}