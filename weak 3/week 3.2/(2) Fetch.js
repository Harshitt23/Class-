// Notes: Fetch Data — .then() vs async/await

// ⚙️ 1. Using .then() (old way)-------------
function getAnimalData() {
  fetch("https://fakerapi.it/api/v1/persons")
    .then(function (response) {
      return response.json();
    })
    .then(function (finalData) {
      console.log(finalData);
    });
}


//➡️ Explanation:
// fetch() returns a Promise.
// .then() handles the resolved value (the response).
// Another .then() is needed to handle the parsed JSON.


// 📉 Drawback:
// Code becomes nested and messy if you chain many .then() calls (called “callback hell”).

//------------------------------------------------------------------------------------------------

// ⚡ 2. Using async/await (modern, clean way)--------------
async function getAnimalData() {
  const response = await fetch("https://fakerapi.it/api/v1/persons");
  const finalData = await response.json();
  console.log(finalData);
}


// ➡️ Explanation:
// async keyword makes the function asynchronous.
// await pauses execution until the Promise resolves.
// Looks like normal top-to-bottom code but runs asynchronously.


// ✅ Advantages:
// Clean and readable
// Easier debugging
// No chaining of .then() needed
// Error handling done easily with try...catch


// 🧩 3. Example with Error Handling-----------------
async function getAnimalData() {
  try {
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const finalData = await response.json();
    console.log(finalData);
  } catch (err) {
    console.log("Error fetching data:", err);
  }
}

//-------------------------------------------------------------------------------------------

// How to Run It
// Open VS Code
// Create a file named index.html
// Paste this code inside
// Right-click → “Open with Live Server” (or just open in your browser)
// Click the buttons and check your browser console (Ctrl + Shift + J)
// You’ll see data fetched from fakerapi.it in both methods.



// 📓 Notes to Write Along
// .then() method:
// Uses chained promises to handle async results
// Code looks nested and harder to read
// async/await method:
// Cleaner, modern syntax
// await waits for promise resolution
// Easy error handling with try...catch



// 🧠 Summary:
// .then() = old promise style
// async/await = modern readable async code

//-------------------------------------------------------------------------------------------
//full HTML code--

/*
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fetch Data Example</title>
</head>

<body>
  <h2>🐾 Fetch Data Example (then() vs async/await)</h2>

  <button onclick="getAnimalDataOld()">Get Data (Old .then Method)</button>
  <button onclick="getAnimalDataNew()">Get Data (Async/Await)</button>

  <script>


// Method 1: Using .then() (older way) 
    function getAnimalDataOld() {
      fetch("https://fakerapi.it/api/v1/persons")
        .then(function (response) {
          return response.json(); // parse the response
        })
        .then(function (finalData) {
          console.log("📦 Old Method Data:", finalData);
        })
        .catch(function (error) {
          console.log("❌ Error fetching data:", error);
        });
    }


// Method 2: Using async/await (modern way) 
    async function getAnimalDataNew() {
      try {
        const response = await fetch("https://fakerapi.it/api/v1/persons");
        const finalData = await response.json();
        console.log("🚀 Async/Await Data:", finalData);
      } catch (error) {
        console.log("❌ Error fetching data:", error);
      }
    }
  </script>
</body>

</html>
*/

//to run this code , i have created Index.html in expressClass .. Run it there if u want bitch ass copy paste nigga 