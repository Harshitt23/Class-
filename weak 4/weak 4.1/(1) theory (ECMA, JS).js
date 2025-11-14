/* ==============================================================
 🧠 ECMAScript, JavaScript, Browser APIs & Node.js
 Author: Harshit Sharma
 Purpose: Understanding how JS works under the hood
 ============================================================== */

// --------------------------------------------------------------
// ⚙️ 1. ECMAScript (The Base Language)
// --------------------------------------------------------------
// ECMAScript (often shortened to "ES") is the official specification
// that defines how JavaScript behaves.
//
// Think of it as the *blueprint* — it defines:
//  - Syntax (var, let, const, if, for, etc.)
//  - Data types (String, Number, Boolean, Object)
//  - Functions, classes, prototypes
//  - Promises, async/await, modules, etc.
//
// 🧩 ECMAScript = the rules of the game (no direct access to browser or files).

// Example (pure ECMAScript, no browser or Node.js stuff here):
let name = "Harshit";
function greet(user) {
  return `Hello, ${user}!`;
}
console.log(greet(name)); // ✅ Works anywhere JS runs


// --------------------------------------------------------------
// ⚡ 2. JavaScript (The Implementation of ECMAScript)
// --------------------------------------------------------------
// JavaScript is *ECMAScript + extra features* added by environments.
//
// The *browser* or *Node.js* adds these extra features through APIs.
// These APIs let you interact with the outside world.
//
// So JavaScript = ECMAScript + Environment APIs


// --------------------------------------------------------------
// 🌐 3. Browser Environment (Client-Side JS)
// --------------------------------------------------------------
// When you run JS in a browser, it gives you *Web APIs* like:
//
// ✅ DOM (Document Object Model)
// → lets JS interact with HTML and CSS
document.body.style.backgroundColor = "lightblue";

// ✅ Fetch API
// → allows network requests (HTTP calls)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data));

// ✅ setInterval / setTimeout
// → allows timers and repeated code execution
setInterval(() => console.log("Running every second..."), 1000);

// ✅ alert, prompt, confirm
// → simple browser dialog boxes
alert("Hey Harshit! Browser JS is working!");

// ✅ console, window, localStorage, etc.
// → all these are *provided by the browser*, not ECMAScript.


// --------------------------------------------------------------
// 🖥️ 4. Node.js Environment (Server-Side JS)
// --------------------------------------------------------------
// Node.js also uses ECMAScript as the core language,
// but instead of browser APIs, it provides *server-side APIs*.
//
// ✅ Example Features:
//  - File System (fs)
//  - Path utilities
//  - OS, HTTP server modules
//  - process, Buffer, etc.

const fs = require("fs");

// Writing to a file using Node.js (not possible in browser!)
fs.writeFileSync("example.txt", "Hello from Node.js, Harshit! 🚀");

// ✅ Node.js doesn’t have DOM, alert, or window
// because those are *browser-only* features.


// --------------------------------------------------------------
// 🔄 5. Summary Table
// --------------------------------------------------------------
/*
| Feature / API        | ECMAScript | Browser JS | Node.js |
|-----------------------|-------------|-------------|----------|
| Variables, loops, fn  | ✅ Yes      | ✅ Yes      | ✅ Yes   |
| DOM (document, window)| ❌ No       | ✅ Yes      | ❌ No    |
| fetch()               | ❌ No       | ✅ Yes      | ✅ (v18+)|
| setTimeout / Interval | ❌ No       | ✅ Yes      | ✅ Yes   |
| fs (File System)      | ❌ No       | ❌ No       | ✅ Yes   |
| console.log()         | ✅ Yes      | ✅ Yes      | ✅ Yes   |
*/


// --------------------------------------------------------------
// 💬 6. Simple Analogy
// --------------------------------------------------------------
// - ECMAScript → The language grammar (rules and syntax)
// - JavaScript → The spoken language following those rules
// - Browser → Gives JS a "remote control" to interact with the web page
// - Node.js → Gives JS a "toolbox" to interact with your computer/server


// --------------------------------------------------------------
// 🧩 TL;DR
// --------------------------------------------------------------
// ✅ ECMAScript → Defines core JS syntax and behavior
// ✅ JavaScript → Uses ECMAScript + adds environment-specific features
// ✅ Browser JS → Adds web features like DOM, fetch, alert, etc.
// ✅ Node.js → Adds backend features like fs, http, path, etc.

