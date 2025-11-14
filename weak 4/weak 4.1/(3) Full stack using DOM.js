/* ==================================================================
 🧠 DOM + Fetch – Connecting Frontend to Backend
 Author: Harshit Sharma
 Topic: How to connect frontend DOM logic with a backend API using Fetch
 ================================================================== */

//-------------------------------------------------------------
// 💡 Scenario:
// Earlier, we used DOM alone to calculate the sum of two numbers
// directly in the browser (using parseInt and innerHTML).
//
// Now — let’s go one step further!
// We’ll use the DOM to get input values, but the SUM will be
// calculated on the BACKEND via an API call using `fetch()`.
//
// This shows how the DOM (frontend) communicates with the Backend.
//-------------------------------------------------------------

/*
📄 HTML CODE (index.html)
-------------------------------------------------------------
<html>
  <body>
      <input id="firstNumber" type="text" placeholder="First number" /><br>
      <input id="secondNumber" type="text" placeholder="Second number" /><br><br>

      <button onclick="populateDiv()">Calculate Sum (Using .then)</button>
      <button onclick="populateDiv2()">Calculate Sum (Using async/await)</button>

      <p id="finalSum"></p>

      <script src="script.js"></script>
  </body>
</html>
-------------------------------------------------------------
*/

//-------------------------------------------------------------
// 🧩 Version 1: Using Fetch with .then()
//-------------------------------------------------------------
function populateDiv() {
    const a = document.getElementById("firstNumber").value;
    const b = document.getElementById("secondNumber").value;
  
    // 🔗 Using fetch() to call the backend sum API
    fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
      .then(function (response) {
        // Step 1️⃣: Convert response to text
        response.text().then(function (ans) {
          // Step 2️⃣: Update the DOM dynamically
          document.getElementById("finalSum").innerHTML = ans;
        });
      });
  }
  
  //-------------------------------------------------------------
  // 🧩 Version 2: Using Fetch with async/await (Cleaner Syntax)
  //-------------------------------------------------------------
  async function populateDiv2() {
    const a = document.getElementById("firstNumber").value;
    const b = document.getElementById("secondNumber").value;
  
    // Step 1️⃣: Make a request and wait for the response
    const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b);
  
    // Step 2️⃣: Extract text result
    const ans = await response.text();
  
    // Step 3️⃣: Display result using DOM
    document.getElementById("finalSum").innerHTML = ans;
  }
  
  //-------------------------------------------------------------
  // 🚀 Explanation:
  //-------------------------------------------------------------
  /*
  Without Fetch (old way):
    ✅ We did: element.innerHTML = parseInt(a) + parseInt(b);
    ❌ No backend communication — everything happened in the browser.
  
  With Fetch (new way):
    ✅ DOM collects input (document.getElementById)
    ✅ Fetch sends data to the backend (API call)
    ✅ Backend calculates the sum and returns the result
    ✅ JS updates the DOM dynamically with the response
  
  So now the work is shared:
    - Browser (Frontend DOM) = UI + Input Handling
    - Server (Backend) = Logic + Processing
  -------------------------------------------------------------
  */
  
  //-------------------------------------------------------------
  // ⚙️ How Fetch Works
  //-------------------------------------------------------------
  //
  // fetch("URL") → sends a GET request to that endpoint
  // response.text() → converts the response into readable text
  // document.getElementById("id").innerHTML → updates the page dynamically
  //
  // Both `populateDiv()` and `populateDiv2()` do the same job,
  // but async/await syntax is more modern and readable.
  //
  //-------------------------------------------------------------
  
  //-------------------------------------------------------------
  // ⚡ Real-world Analogy
  //-------------------------------------------------------------
  //
  // 🧮 DOM-only version:
  // You do the math right in your head (instant, local).
  //
  // 🌐 DOM + Fetch version:
  // You ask an online calculator (the backend server) to do the math,
  // and it sends you the result back via the internet.
  //
  //-------------------------------------------------------------
  
  //-------------------------------------------------------------
  // 🧠 Why This Matters
  //-------------------------------------------------------------
  //
  // - Shows how frontend interacts with backend seamlessly
  // - Demonstrates the use of Fetch API (modern replacement of XMLHttpRequest)
  // - Keeps DOM as the UI bridge while backend handles the logic
  // - Forms the foundation of FULL STACK communication
  //
  //-------------------------------------------------------------
  
  //-------------------------------------------------------------
  // 🧾 TL;DR
  //-------------------------------------------------------------
  //
  // ✅ DOM Alone → Handles input + logic in the browser
  // ✅ DOM + Fetch → Sends/receives data from backend server
  // ✅ async/await → Cleaner, more readable fetch handling
  // ✅ Together → True Frontend + Backend synergy ⚙️
  //


  //---------------------------WHole Code----------------------------------
  /*

<html>
  <body>
    <script>
      async function populateDiv2() {
        const a = document.getElementById("firstNumber").value;
        const b = document.getElementById("secondNumber").value;

         Step 1️⃣: Make a request and wait for the response
        const response = await fetch(
          "https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b
        );

         Step 2️⃣: Extract text result
        const ans = await response.text();

         Step 3️⃣: Display result using DOM
        document.getElementById("finalSum").innerHTML = ans;
      }
    </script>

    <input id="firstNumber" type="text" placeholder="First number" /><br />
    <input id="secondNumber" type="text" placeholder="Second number" /><br /><br />

    <button onclick="populateDiv2()">Calculate Sum (Using async/await)</button>

    <p id="finalSum"></p>
  </body>
</html>

*/