/*🧠 Goal
You need to:
Create a global middleware using app.use()
Increment requestCount every time any route (/user, /requestCount, etc.) is hit.*/

// ✅ Working Solution
const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

// 🧩 Global Middleware — counts every incoming request
app.use((req, res, next) => {
  requestCount++;   // increase on every hit
  next();          // move to next route handler
});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;


//-------------------------------------------------------------------------
/* ⚙️ Explanation-----

1️⃣ The Global Middleware:
app.use((req, res, next) => {
  requestCount++;
  next();
});


app.use() applies the middleware to all routes in the app.
Every time a request (GET, POST, etc.) comes in:
requestCount increments by 1
next() passes control to the next route handler


2️⃣ The /requestCount Route:
app.get('/requestCount', (req, res) => {
  res.status(200).json({ requestCount });
});

Simply returns the number of requests handled so far.

--------------------------------------------------------------------------

🧪 Testing Example

If you hit these in order:

GET /user
POST /user
GET /requestCount


The final response will be:
{ "requestCount": 3 }


✅ Works perfectly with Jest or Supertest too — because it tests whether your middleware correctly increments the count on each request.

📓 Short Notes
app.use() → global middleware for all routes
requestCount++ → increments for every incoming request
next() → moves to next route handler. */