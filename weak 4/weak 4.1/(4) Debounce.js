/* ==================================================================
🧠 Debounce in JavaScript (DOM + Fetch Example)
Author: Harshit Sharma
Topic: Using debounce to delay function execution (100ms)
================================================================== */

// 💡 Scenario:
// We previously made a simple DOM + Fetch calculator.
// Now, we’ll add DEBOUNCE — so if user keeps typing fast,
// the API won’t be called repeatedly.

//-------------------------------------------------------------

/*
<html>
  <body>
    <input id="firstNumber" type="text" placeholder="First number" /><br />
    <input id="secondNumber" type="text" placeholder="Second number" /><br /><br />
    <button onclick="populateDiv()">Calculate Sum</button>
    <p id="finalSum"></p>

    <script>
      let timeout;

      function debouncePopulateDiv() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          populateDiv();
        }, 1000);
      }

      function populateDiv() {
        const a = document.getElementById("firstNumber").value;
        const b = document.getElementById("secondNumber").value;

        fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
          .then((response) => response.text())
          .then((ans) => {
            document.getElementById("finalSum").innerHTML = "Sum = " + ans;
          });
      }

      document
        .getElementById("firstNumber")
        .addEventListener("input", debouncePopulateDiv);
      document
        .getElementById("secondNumber")
        .addEventListener("input", debouncePopulateDiv);
    </script>
  </body>
</html>
*/

//------------------------------------------------------------------------

// What’s Happening:
// let timeout; → a single timer variable stored outside.
// Each time you type (or call debouncePopulateDiv()):
    // It clears any previous timer (clearTimeout(timeout)).
    // It sets a new timer for 100 ms.
    // If the user keeps typing within that 100 ms, timer resets.
    // Only after 100 ms of no typing → populateDiv() actually executes.
// ✅ That’s exactly how debouncing works — minimal version, clean and effective.

