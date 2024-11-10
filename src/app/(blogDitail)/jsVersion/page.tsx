

export default function JsVersion(){
    return(
        <>
           <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">JavaScript Versions</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">Last Updated: 14 Aug, 2024</h2>
        <p className="text-xl text-gray-700 mb-4">
          JavaScript is a popular programming language used by developers all over the world. It’s a lightweight and easy-to-learn language that can run on both the client-side (in your browser) and the server-side (on the server). JavaScript was created in 1995 by Brendan Eich.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">JavaScript Evolution</h2>
        <p className="text-xl text-gray-700 mb-4">
          In 1997, JavaScript became a standard, known as ECMAScript. Since then, there have been many versions of ECMAScript, with new features added over the years. Each version after 2016 is named after the year it was released, such as ECMAScript 2016, ECMAScript 2017, and so on.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Notable Versions of JavaScript</h3>
        <ul className="list-disc pl-6 space-y-2 text-xl text-gray-700">
          <li>ECMAScript 2015 (ES6) – Introduced classes, modules, and arrow functions.</li>
          <li>ECMAScript 2016 – Introduced Array.prototype.includes and the exponentiation operator.</li>
          <li>ECMAScript 2017 – Introduced async/await and Object.entries()/Object.values().</li>
          <li>ECMAScript 2018 – Introduced asynchronous iteration and Promise.finally().</li>
          <li>ECMAScript 2019 – Introduced Array.prototype.flat(), flatMap(), and Object.fromEntries().</li>
          <li>ECMAScript 2020 – Introduced BigInt, Promise.allSettled(), and dynamic imports.</li>
          <li>ECMAScript 2021 – Introduced logical assignment operators and String.prototype.replaceAll().</li>
        </ul>
      </section>
    </div>

    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">ECMAScript Versions and Features</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">Overview</h2>
        <p className="text-xl text-gray-700 mb-4">
          Lets take a look at the different versions of ECMAScript, their release years, and the key features they introduced:
        </p>
      </section>

      <section className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Version</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Release Year</th>
              <th className="px-4 py-2 text-left">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">ES1</td>
              <td className="px-4 py-2">ECMAScript 1</td>
              <td className="px-4 py-2">1997</td>
              <td className="px-4 py-2">Initial Release</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES2</td>
              <td className="px-4 py-2">ECMAScript 2</td>
              <td className="px-4 py-2">1998</td>
              <td className="px-4 py-2">Minor Editorial Changes</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES3</td>
              <td className="px-4 py-2">ECMAScript 3</td>
              <td className="px-4 py-2">1999</td>
              <td className="px-4 py-2">Added Regular Expressions, try/catch, exception handling, switch case, and do-while</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES4</td>
              <td className="px-4 py-2">ECMAScript 4</td>
              <td className="px-4 py-2">Abandoned</td>
              <td className="px-4 py-2">Abandoned due to conflicts</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES5</td>
              <td className="px-4 py-2">ECMAScript 5</td>
              <td className="px-4 py-2">2009</td>
              <td className="px-4 py-2">Introduced JavaScript strict mode, JSON support, getters and setters</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES6</td>
              <td className="px-4 py-2">ECMAScript 2015</td>
              <td className="px-4 py-2">2015</td>
              <td className="px-4 py-2">Introduced let and const, class declaration, import/export, for..of loop, and arrow functions</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES7</td>
              <td className="px-4 py-2">ECMAScript 2016</td>
              <td className="px-4 py-2">2016</td>
              <td className="px-4 py-2">Added block scope for variables, async/await, Array.includes, exponentiation operator</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES8</td>
              <td className="px-4 py-2">ECMAScript 2017</td>
              <td className="px-4 py-2">2017</td>
              <td className="px-4 py-2">Added Object.values, Object.entries, and Object.getOwnPropertyDescriptors</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES9</td>
              <td className="px-4 py-2">ECMAScript 2018</td>
              <td className="px-4 py-2">2018</td>
              <td className="px-4 py-2">Added spread operator, rest parameters</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES10</td>
              <td className="px-4 py-2">ECMAScript 2019</td>
              <td className="px-4 py-2">2019</td>
              <td className="px-4 py-2">Added Array.flat(), Array.flatMap(), Array.sort is now stable</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES11</td>
              <td className="px-4 py-2">ECMAScript 2020</td>
              <td className="px-4 py-2">2020</td>
              <td className="px-4 py-2">Added BigInt primitive type, nullish coalescing operator</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES12</td>
              <td className="px-4 py-2">ECMAScript 2021</td>
              <td className="px-4 py-2">2021</td>
              <td className="px-4 py-2">Added String.replaceAll(), Promise.any()</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES13</td>
              <td className="px-4 py-2">ECMAScript 2022</td>
              <td className="px-4 py-2">2022</td>
              <td className="px-4 py-2">Added Top-level await, new class elements, static blocks inside classes</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">ES14</td>
              <td className="px-4 py-2">ECMAScript 2023</td>
              <td className="px-4 py-2">2023</td>
              <td className="px-4 py-2">Added toSorted(), toReversed(), findLast(), findLastIndex() methods on Array and TypedArray prototypes</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">JavaScript Versions – FAQs</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">What is ECMAScript?</h2>
        <p className="text-xl text-gray-700">
          ECMAScript (ES) is the standardized scripting language specification upon which JavaScript is based. It standardizes the core features and functionalities of JavaScript.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">What is ES6?</h2>
        <p className="text-xl text-gray-700">
          ES6, also known as ECMAScript 2015, is the sixth edition of the ECMAScript standard. It introduced significant improvements and new features to JavaScript, including arrow functions, classes, template literals, and more.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">What are some key features introduced in ES6 (ECMAScript 2015)?</h2>
        <ul className="list-disc pl-6 text-xl text-gray-700">
          <li>Arrow functions</li>
          <li>Classes</li>
          <li>Template literals</li>
          <li>Default parameters</li>
          <li>Destructuring assignment</li>
          <li>Modules</li>
          <li>Promises</li>
          <li>let and const keywords</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">What is ES5?</h2>
        <p className="text-xl text-gray-700">
          ES5, or ECMAScript 5, is the fifth edition of the ECMAScript standard, released in 2009. It added new features to the language, including strict mode, JSON support, and new array methods.
        </p>
      </section>
    </div>
        </>
    )
}