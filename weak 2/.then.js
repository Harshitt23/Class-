/* 
What .then() Does
➡️ .then() is used with Promises in JavaScript.
It tells the program what to do when a promise successfully completes (i.e., when it’s resolved).

In simple terms:

.then() = “When this async task is done, do this next.”

--------------------------------------------------------------------------------------------

⚙️ Example 1 — Basic Promise --
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Task completed!");
  }, 2000);
});

promise.then((result) => {
  console.log(result); // runs after 2 seconds
});


🧩 Output after 2 seconds:
✅ Task completed!



🧠 Explanation:
The promise takes 2 seconds to resolve.
When it’s done → .then() runs and prints the result.

------------------------------------------------------------------------------------------- 


⚙️ Example 2 — Using .then() with Fetch
fetch("https://api.github.com/users/harshit")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));


📓 Flow:

fetch() returns a promise (waiting for the server to respond).
First .then() runs when the response arrives.
Second .then() runs when JSON is parsed.
.catch() handles errors if anything goes wrong.

------------------------------------------------------------------------------------------ 


🧩 Example 3 — Chain multiple .then()
doTask()
  .then(() => console.log("Step 1 done"))
  .then(() => console.log("Step 2 done"))
  .then(() => console.log("All done ✅"));


Each .then() waits for the previous one to finish.

⚠️ Important Notes
.then() runs only when the promise resolves successfully.
.catch() runs when the promise fails (rejects).
.finally() runs no matter what (success or fail).

------------------------------------------------------------------------------------------

📓 Short Notes for You --
.then() → used with Promises to handle success results of async operations.

Syntax: promise.then(result => { * code * })

Use case: chaining async operations like API calls, database queries, etc.
Related: .catch() (for errors), .finally() (for cleanup).

*/