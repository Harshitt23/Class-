
//Sbki api ki request postman pe mil jaeygi -- 
//plus agr chl nhi rha to port no. change krke dekho.

const express = require("express");
const app1 = express();

// ❌ Ugly repetitive code (no middleware)
app1.get("/health-checkup", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (username === "harshit" && password === "123456") {
    res.json({
      msg: "Health checkup successful ✅"
    });
  } else {
    res.json({
      msg: "Invalid username or password ❌"
    });
  }
});

app1.get("/kidney-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;

  if (username === "harshit" && password === "123456") {
    res.json({
      msg: "Health checkup successful ✅"
    });
  } else {
    res.json({
      msg: "Invalid username or password ❌"
    });
  }
});

app1.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000 fine 🚀");
});


// Concept:
// This is an example of how not to structure authentication logic.
// If we need to protect multiple routes (like /health-checkup, /kidney-checkup, etc.), repeating the same username–password check in every route is messy and inefficient.


// ⚠️ Why It’s “Ugly”:
// ❌ Repeated authentication logic in every route.
// ❌ Difficult to update (if password changes, every route must be edited).
// ❌ Harder to maintain as app grows.
// ✅ Next Step (Better Way – Middleware)
// In the clean version, we’ll move the authentication check into a middleware function and reuse it for any route.

//------------------------------------------------------------------------------------------------------------------------------------

// Express Authentication Using Middleware
// 🧠 Concept:
// Instead of writing the same username/password validation inside every route (like /health-checkup, /kidney-checkup, etc.),
// we create a middleware function that does authentication once, and then attach it to all routes that need it.

// 🧩 Code Example:
const express = require("express");
const app = express();

// ✅ Middleware for authentication
function userMiddleware(req, res, next) {
  const username = req.query.username;
  const password = req.query.password;

  if (username === "harshit" && password === "123456") {
    next(); // allow the request to continue to the route
  } else {
    res.json({
      msg: "Invalid username or password"
    });
  }
}

// ✅ Routes using the middleware
app.get("/health-checkup", userMiddleware, (req, res) => {
  res.json({
    msg: "Health checkup done ✅"
  });
});

app.get("/kidney-checkup", userMiddleware, (req, res) => {
  res.json({
    msg: "Kidney checkup done ✅"
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on port 3000 fine");
});


/*Notes Summary:
Topic	Description
Old Way (Ugly)           	Authentication written inside every route → repetitive and hard to maintain.
New Way (Clean)          	Using middleware to handle authentication once → reusable and scalable.
Middleware Function	        A function that runs before the main route handler; it can allow or block access.
next()	                    Moves to the next middleware or route if authentication passes.
When to Use              	When multiple routes need the same logic (auth, logging, validation, etc.). */
