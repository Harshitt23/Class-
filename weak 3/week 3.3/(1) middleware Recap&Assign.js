/*🧠 Middleware (Express.js) — Notes

📘 Definition : Express is a routing and middleware web framework that handles requests through a series of middleware function calls.
A middleware function is a function that has access to the:
1. Request object (req)
2. Response object (res)
3. Next middleware function (next)


⚙️ What Middleware Can Do
Middleware functions can perform the following tasks:

1. Execute any code
    → e.g. log the time, check token, validate input

2. Modify the req or res objects
    → e.g. attach req.user = decodedData

3. End the request–response cycle
    → e.g. send a response directly inside middleware

4. Call the next middleware in the stack
    → using next() to continue processing. */

//----------------------------------------------------------------------------------------------

/*🧩 Assignment — Middlewares

You have to create:
A middleware to log the number of requests made to the server
A middleware to rate-limit users based on their username passed in headers
A middleware to log the number of errors that happen on the server.  */


//✅ Full Solution Code
const express = require("express");
const app = express();

// 🧠 1️⃣ Middleware for counting total requests
let totalRequests = 0;

function countRequests(req, res, next) {
  totalRequests++;
  console.log(`📨 Total Requests so far: ${totalRequests}`);
  next();
}

// 🧠 2️⃣ Middleware for rate limiting per username
const userRequestCount = {}; // store count per user

function rateLimit(req, res, next) {
  const username = req.headers["username"];
  if (!username) {
    return res.status(400).json({ msg: "Username header missing" });
  }

  if (!userRequestCount[username]) {
    userRequestCount[username] = 1;
  } else {
    userRequestCount[username]++;
  }

  if (userRequestCount[username] > 5) {
    return res.status(429).json({ msg: "Too many requests. Slow down!" });
  }

  console.log(`👤 ${username} → Request #${userRequestCount[username]}`);
  next();
}

// 🧠 3️⃣ Middleware for logging number of errors
let errorCount = 0;

function errorLogger(err, req, res, next) {
  errorCount++;
  console.log(`❌ Total Errors so far: ${errorCount}`);
  res.status(500).json({ msg: "Something went wrong!", error: err.message });
}

// 🧩 Use middlewares
app.use(countRequests);
app.use(rateLimit);

// 🧠 Sample routes
app.get("/", (req, res) => {
  res.send("✅ Server is running fine!");
});

app.get("/error", (req, res) => {
  throw new Error("Intentional error triggered!");
});

// 🧠 Global error handler (must be last)
app.use(errorLogger);

// 🧩 Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
