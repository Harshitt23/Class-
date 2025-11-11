// 🧠 Goal:
// Catch any exception in the server and respond with status code 404
// Maintain a global counter errorCount which increments every time an error occurs

//✅ Solution
const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// 🧩 Routes
app.get('/user', function(req, res) {
  throw new Error("User not found"); // intentional error
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// 🧠 Global Error Handling Middleware
app.use((err, req, res, next) => {
  errorCount++; // increase count every time an exception occurs
  res.status(404).json({ msg: "Something went wrong!", error: err.message });
});

module.exports = app;


//---------------------------⚙️ How It Works---------------------------

//🔹 1️⃣ The Global Error Middleware
// app.use((err, req, res, next) => {
//   errorCount++;
//   res.status(404).json({ msg: "Something went wrong!", error: err.message });
// });


// ✅ Key points:
// It has 4 parameters → (err, req, res, next)
// That’s how Express knows it’s an error-handling middleware.
// Whenever any route throw new Error(...), Express automatically passes it here.
// Increments the errorCount variable.
// Sends back a 404 response with a JSON message.


// 🔹 2️⃣ /errorCount route
// Just returns the current number of errors that occurred:
// { "errorCount": 3 }

//------------------------------🧪 Example-----------------------------

// Hit /user → this throws an error
// Response:
    // {
    //   "msg": "Something went wrong!",
    //   "error": "User not found"
    // }


// Terminal log (if you log errorCount):
    // Error count: 1


// Hit /errorCount →
// Response:
    // { "errorCount": 1 }

//---------------------------📓 Short Notes-----------------------------

// Express error middleware signature: (err, req, res, next)
// Automatically catches thrown errors
// Always define it after all routes
// Increments errorCount and sends 404 response

//----------------------------✅ Summary--------------------------------

// Route	Action	Result
// /user	Throws error	404 + increments errorCount
// /user (POST)	Works normally	200
// /errorCount	Shows error count	✅

//-----------------------------Testing----------------------------------

// So now if you run:
// npx jest ./tests
// or just test manually in Postman,
// your code will pass all test cases 💪