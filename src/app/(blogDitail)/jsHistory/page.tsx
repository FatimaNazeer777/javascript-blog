

export default function JsHistory(){
    return(
        <>
         <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md space-y-6">
  {/* Heading */}
  <h1 className="text-4xl font-bold text-gray-800">JavaScript / ECMAScript</h1>

  {/* Paragraphs */}
  <p className="text-xl text-gray-700">
    JavaScript was invented by Brendan Eich in 1995.
  </p>
  <p className="text-xl text-gray-700">
    It was developed for Netscape 2, and became the ECMA-262 standard in 1997.
  </p>
  <p className="text-xl text-gray-700">
    After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser. Mozillas latest version was 1.8.5. (Identical to ES5).
  </p>
  <p className="text-xl text-gray-700">
    Internet Explorer (IE4) was the first browser to support ECMA-262 Edition 1 (ES1).
  </p>
</div>

<div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
  <h1 className="text-4xl font-bold text-gray-800 mb-6">JavaScript / ECMAScript Evolution</h1>
  <table className="min-w-full border border-gray-200">
    <thead>
      <tr className="bg-gray-200 text-left">
        <th className="py-3 px-4 font-semibold text-gray-700 border-b">Year</th>
        <th className="py-3 px-4 font-semibold text-gray-700 border-b">ECMA</th>
        <th className="py-3 px-4 font-semibold text-gray-700 border-b">Browser</th>
      </tr>
    </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="py-3 px-4 border-b">1995</td>
        <td className="py-3 px-4 border-b"></td>
        <td className="py-3 px-4 border-b">JavaScript was invented by Brendan Eich</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">1996</td>
        <td className="py-3 px-4 border-b"></td>
        <td className="py-3 px-4 border-b">Netscape 2 was released with JavaScript 1.0</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">1997</td>
        <td className="py-3 px-4 border-b"></td>
        <td className="py-3 px-4 border-b">JavaScript became an ECMA standard (ECMA-262)</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">1997</td>
        <td className="py-3 px-4 border-b">ES1</td>
        <td className="py-3 px-4 border-b">ECMAScript 1 was released</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">1997</td>
        <td className="py-3 px-4 border-b">ES1</td>
        <td className="py-3 px-4 border-b">IE 4 was the first browser to support ES1</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">1998</td>
        <td className="py-3 px-4 border-b">ES2</td>
        <td className="py-3 px-4 border-b">ECMAScript 2 was released</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">1998</td>
        <td className="py-3 px-4 border-b"></td>
        <td className="py-3 px-4 border-b">Netscape 42 was released with JavaScript 1.3</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">1999</td>
        <td className="py-3 px-4 border-b">ES2</td>
        <td className="py-3 px-4 border-b">IE 5 was the first browser to support ES2</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">1999</td>
        <td className="py-3 px-4 border-b">ES3</td>
        <td className="py-3 px-4 border-b">ECMAScript 3 was released</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2000</td>
        <td className="py-3 px-4 border-b">ES3</td>
        <td className="py-3 px-4 border-b">IE 5.5 was the first browser to support ES3</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2000</td>
        <td className="py-3 px-4 border-b"></td>
        <td className="py-3 px-4 border-b">Netscape 62 was released with JavaScript 1.5</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2000</td>
        <td className="py-3 px-4 border-b"></td>
        <td className="py-3 px-4 border-b">Firefox 1 was released with JavaScript 1.5</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2008</td>
        <td className="py-3 px-4 border-b">ES4</td>
        <td className="py-3 px-4 border-b">ECMAScript 4 was abandoned</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2009</td>
        <td className="py-3 px-4 border-b">ES5</td>
        <td className="py-3 px-4 border-b">ECMAScript 5 was released</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2011</td>
        <td className="py-3 px-4 border-b">ES5</td>
        <td className="py-3 px-4 border-b">IE 9 was the first browser to support ES5 *</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2011</td>
        <td className="py-3 px-4 border-b">ES5</td>
        <td className="py-3 px-4 border-b">Firefox 4 was released with JavaScript 1.8.5</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2012</td>
        <td className="py-3 px-4 border-b">ES5</td>
        <td className="py-3 px-4 border-b">Full support for ES5 in Safari 6</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2012</td>
        <td className="py-3 px-4 border-b">ES5</td>
        <td className="py-3 px-4 border-b">Full support for ES5 in IE 10</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2012</td>
        <td className="py-3 px-4 border-b">ES5</td>
        <td className="py-3 px-4 border-b">Full support for ES5 in Chrome 23</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2013</td>
        <td className="py-3 px-4 border-b">ES5</td>
        <td className="py-3 px-4 border-b">Full support for ES5 in Firefox 21</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2013</td>
        <td className="py-3 px-4 border-b">ES5</td>
        <td className="py-3 px-4 border-b">Full support for ES5 in Opera 15</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2014</td>
        <td className="py-3 px-4 border-b">ES5</td>
        <td className="py-3 px-4 border-b">Full support for ES5 in all browsers</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2015</td>
        <td className="py-3 px-4 border-b">ES6</td>
        <td className="py-3 px-4 border-b">ECMAScript 6 was released</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2016</td>
        <td className="py-3 px-4 border-b">ES6</td>
        <td className="py-3 px-4 border-b">Full support for ES6 in Chrome 51</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2016</td>
        <td className="py-3 px-4 border-b">ES6</td>
        <td className="py-3 px-4 border-b">Full support for ES6 in Opera 38</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2016</td>
        <td className="py-3 px-4 border-b">ES6</td>
        <td className="py-3 px-4 border-b">Full support for ES6 in Safari 10</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2017</td>
        <td className="py-3 px-4 border-b">ES6</td>
        <td className="py-3 px-4 border-b">Full support for ES6 in Firefox 54</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2017</td>
        <td className="py-3 px-4 border-b">ES6</td>
        <td className="py-3 px-4 border-b">Full support for ES6 in Edge 15</td>
      </tr>
      <tr>
        <td className="py-3 px-4 border-b">2018</td>
        <td className="py-3 px-4 border-b">ES6</td>
        <td className="py-3 px-4 border-b">Full support for ES6 in all browsers **</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
  <h1 className="text-4xl font-bold text-gray-800 mb-6">From ES4 to ES6</h1>
  <p className="text-lg text-gray-700 mb-4">
    When the TC39 committee convened in Oslo in 2008 to discuss ECMAScript 4, there was a notable division within the group:
  </p>
  <div className="bg-gray-100 p-4 rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">The Camps</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li><span className="font-bold">ECMAScript 3.1 Camp:</span> Microsoft and Yahoo, who favored an incremental upgrade from ES3.</li>
      <li><span className="font-bold">ECMAScript 4 Camp:</span> Adobe, Mozilla, Opera, and Google, who pushed for a substantial ES4 update.</li>
    </ul>
  </div>
  <div className="bg-gray-50 p-4 rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Brendan Eich’s Announcement</h2>
    <p className="text-gray-700 mb-4">
      On August 13, 2008, Brendan Eich wrote:
    </p>
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
      It is no secret that the JavaScript standards body, Ecma Technical Committee 39, has been split for over a year, with some members favoring ES4... and others advocating ES3.1... Now, I am happy to report, the split is over.
    </blockquote>
  </div>
  <div className="bg-gray-100 p-4 rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">The Resolution</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>ECMAScript 4 was redefined as ES5, making it an incremental upgrade of ECMAScript 3.</li>
      <li>Key ES4 features were planned for inclusion in future versions.</li>
      <li>TC39 committed to developing a major update, larger in scope than ES5.</li>
    </ul>
  </div>
  <div className="bg-gray-50 p-4 rounded-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">The Harmony Project (ES6)</h2>
    <p className="text-gray-700">
      The new major release was codenamed <span className="font-bold">Harmony</span>—perhaps a nod to the resolution of past differences.
    </p>
  </div>
</div>

<div className="bg-gray-900 text-white p-8 space-y-8">
  {/* ES5 Section */}
  <div>
    <h2 className="text-xl font-bold mb-4">
      ES5 was a huge success. It was released in 2009, and all major browsers (including Internet Explorer) were fully compliant by July 2013:
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 rounded-lg shadow-md">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="px-4 py-3">
              {/* <img src="chrome-logo.png" alt="Chrome Logo" className="h-6 mx-auto mb-1" /> */}
              Chrome 23
            </th>
            <th className="px-4 py-3">
              {/* <img src="edge-logo.png" alt="IE10 / Edge Logo" className="h-6 mx-auto mb-1" /> */}
              IE10 / Edge
            </th>
            <th className="px-4 py-3">
              {/* <img src="firefox-logo.png" alt="Firefox Logo" className="h-6 mx-auto mb-1" /> */}
              Firefox 21
            </th>
            <th className="px-4 py-3">
              {/* <img src="safari-logo.png" alt="Safari Logo" className="h-6 mx-auto mb-1" /> */}
              Safari 6
            </th>
            <th className="px-4 py-3">
              {/* <img src="opera-logo.png" alt="Opera Logo" className="h-6 mx-auto mb-1" /> */}
              Opera 15
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">Nov 2012</td>
            <td className="px-4 py-2 text-center">Sep 2012</td>
            <td className="px-4 py-2 text-center">May 2013</td>
            <td className="px-4 py-2 text-center">Jul 2012</td>
            <td className="px-4 py-2 text-center">Jul 2013</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* ES6 Section */}
  <div>
    <h2 className="text-xl font-bold mb-4">
      ES6 was also a huge success. It was released in 2015, and all major browsers were fully compliant by March 2017:
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 rounded-lg shadow-md">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="px-4 py-3">
              {/* <img src="chrome-logo.png" alt="Chrome Logo" className="h-6 mx-auto mb-1" /> */}
              Chrome 51
            </th>
            <th className="px-4 py-3">
              {/* <img src="edge-logo.png" alt="Edge Logo" className="h-6 mx-auto mb-1" /> */}
              Edge 14
            </th>
            <th className="px-4 py-3">
              {/* <img src="firefox-logo.png" alt="Firefox Logo" className="h-6 mx-auto mb-1" /> */}
              Firefox 52
            </th>
            <th className="px-4 py-3">
              {/* <img src="safari-logo.png" alt="Safari Logo" className="h-6 mx-auto mb-1" /> */}
              Safari 10
            </th>
            <th className="px-4 py-3">
              {/* <img src="opera-logo.png" alt="Opera Logo" className="h-6 mx-auto mb-1" /> */}
              Opera 38
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">May 2016</td>
            <td className="px-4 py-2 text-center">Aug 2016</td>
            <td className="px-4 py-2 text-center">Mar 2017</td>
            <td className="px-4 py-2 text-center">Sep 2016</td>
            <td className="px-4 py-2 text-center">Jun 2016</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

        </>
    )
}