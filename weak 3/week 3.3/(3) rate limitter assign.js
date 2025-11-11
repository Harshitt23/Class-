/* 🧠 Goal:
Allow max 5 requests per second per user
If a user sends more than 5 requests in one second, return 404
Identify user from header → 'user-id'
numberOfRequestsForUser resets every 1 second via the given setInterval().  */

//solution --
const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {}; // clears counts every second
}, 1000);

// 🧩 Global Middleware — Rate Limiter
app.use((req, res, next) => {
  const userId = req.headers["user-id"];

  if (!userId) {
    return res.status(400).json({ msg: "User ID header missing" });
  }

  // If user not in object, initialize count
  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 1;
  } else {
    numberOfRequestsForUser[userId]++;
  }

  // If user exceeds 5 requests within 1 second
  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(404).json({ msg: "Too many requests" });
  }

  next(); // continue to next route
});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;

//---------------------------------⚙️ How It Works---------------------------------------------

/*  🔹 Step-by-step:
(1) app.use() — applies middleware globally to all routes.
(2) Each user is identified by:
    const userId = req.headers["user-id"];
(3) Every request from that user increments their count:
    numberOfRequestsForUser[userId]++;
(4) If count exceeds 5 in one second → block with 404.
(5) Every second, setInterval() clears the object, resetting the limits.  */

//-------------------------------Example-------------------------------------------------------

// Request #	                      Time (s)	                      Result
// 1–5	                         within same second	               ✅ allowed
// 6th	                            same second	                     ❌ 404
// next second                    counter resets	            ✅ allowed again.  
 
//-------------------------Short Note----------------------------------------------------------

// Middleware: app.use()
// Header key: 'user-id'
// Limit: 5 requests/second per user
// If >5 → res.status(404)
// Counter resets every 1 sec with setInterval()

//------------------------Testing--------------------------------------------------------------

// use Postman:
// Add Header → user-id: harshit
// Hit /user more than 5 times within a second → you’ll get a 404.

//                             or

// Use jest

