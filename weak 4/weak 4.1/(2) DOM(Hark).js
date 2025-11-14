/* ==================================================================
 🧠 DOM vs Backend – Adding Functionality to a Web Page
 Author: Harshit Sharma
 Topic: How DOM lets you build interactive features without a backend
 ================================================================== */

//-------------------------------------------------------------
// 💡 Scenario:
// Suppose we have a simple HTML page with two inputs and a button.
// Normally, to calculate a sum, you might think:
//   “We need a backend (like Express.js) to process the data...”
// But thanks to the DOM, we can do it right inside the browser!
//-------------------------------------------------------------

/*
📄 HTML CODE  (save as index.html)
-------------------------------------------------------------
<html>
  <body>
      <input id = "first number" type = "text" placeholder = "first number"></input>
      <input id = "Second number" type = "text" placeholder = "Second number"></input>
      <br></br>
      <button onClick="populateDIV()">Calculate Sum</button>
      <br></br>
      <div id = "finalsum"></div>
  </body>
</html>

-------------------------------------------------------------
*/

//-------------------------------------------------------------
// ⚙️ What This HTML Does:
// - Two input fields for entering numbers
// - A button that calls the `calculateSum()` function when clicked
// - A <p> tag where the result will be displayed
//-------------------------------------------------------------


//-------------------------------------------------------------
// 🧩Now we will just add this JS CODE using DOM– Power of DOM in Action
//-------------------------------------------------------------
//Using Sript we write js code inside HTML - 
/*
    <script>
        function populateDIV(){
            const a = document.getElementById("first number").value
            const b = document.getElementById("Second number").value
        const element = document.getElementById("finalsum")
        element.innerHTML = parseInt(a) + parseInt(b);
        }
        </script>
*/

// -------------------------------------------------------------
// 🧩 SO the whole code is --
// -------------------------------------------------------------
/*
<html>
    <script>
      function populateDIV(){
        const a = document.getElementById("first number").value
        const b = document.getElementById("Second number").value
       const element = document.getElementById("finalsum")
       element.innerHTML = parseInt(a) + parseInt(b);
      }
    </script>
  <body>
      <input id = "first number" type = "text" placeholder = "first number"></input>
      <input id = "Second number" type = "text" placeholder = "Second number"></input>
      <br></br>
      <button onClick="populateDIV()">Calculate Sum</button>
      <br></br>
      <div id = "finalsum"></div>
  </body>
</html>
*/


    //    🚀 Explanation:
    //   -------------------------------------------------------------
    //   Without DOM, you would need:
    //     - A form submission
    //     - A backend route (/calculate)
    //     - A server to handle POST request and return result
    
    //   With DOM + JS, we:
    //     ✅ Grab HTML elements (document.getElementById)
    //     ✅ Read and process their values
    //     ✅ Modify the page content dynamically (innerHTML)
    
    //   All this happens *inside the browser*, no backend required.
    //   -------------------------------------------------------------
    
    //-------------------------------------------------------------
    // 🧠 WHY DOM IS USEFUL
    //-------------------------------------------------------------
    // - Lets you build dynamic functionality without any server
    // - Instantly reacts to user input
    // - Makes web pages interactive (calculators, forms, games, etc.)
    // - Reduces load on the backend for small tasks
    
    //-------------------------------------------------------------
    // ⚡ Real-world Analogy
    //-------------------------------------------------------------
    // Backend = You send your data to someone else to calculate and reply
    // DOM + JS = You do the math yourself instantly — faster and simpler.
    
    //-------------------------------------------------------------
    // 🧾 TL;DR
    //-------------------------------------------------------------
    // ✅ Backend → Needed for saving, fetching, or processing data on server
    // ✅ DOM + JS → Perfect for instant UI-level interactivity
    // ✅ Both together → Complete full-stack magic 🧙‍♂️
    
    