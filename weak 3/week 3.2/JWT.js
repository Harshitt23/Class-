//--------------------------------------JWT WEB TOKENS--------------------------------------------
// JWT (JSON Web Token) is a secure, compact way to send data between a client and a server — usually used for user authentication.

// How JWT Works (Step-by-Step)--
// 1️⃣ User logs in - User sends credentials 
// 2️⃣Server verifies and creates a token - If login is correct → server creates a JWT that contains user info and sends it back.
// 3️⃣ Client stores the token - The frontend (React, mobile app, etc.) saves it in localStorage or cookies.
// 4️⃣ Next time user makes a request - The token is sent in the Authorization header
// 5️⃣ Server verifies the token - If valid ✅ → allows access .If invalid ❌ → denies request (unauthorized)


// A JWT has 3 parts (separated by dots .):

// xxxxx.yyyyy.zzzzz

// Part           	Name	                      Description
// 1️⃣	           Header	            Info about token type and algorithm
// 2️⃣	           Payload	          Actual user data (e.g., id, email, role)
// 3️⃣	          Signature	      A secret key-based signature to verify authenticity

//-----------------------------------------------------------------------------------------------
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json()); // ✅ to read JSON body from requests

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "Harkirat Singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman Singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya Kumari",
  },
];

// ✅ Check if user exists
function userExists(username, password) {
  const user = ALL_USERS.find(
    (u) => u.username === username && u.password === password
  );
  return user !== undefined;
}

// ✅ Sign-in route
app.post("/signin", function (req, res) {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our DB",
    });
  }

  const token = jwt.sign({ username: username }, jwtPassword);
  return res.json({ token });
});

// ✅ Protected route
app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // Return all users except the logged-in one
    const otherUsers = ALL_USERS.filter((u) => u.username !== username);
    return res.json(otherUsers);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid or expired token",
    });
  }
});

app.listen(3000, () => console.log("✅ Server running on port 3000"));


// 🔹 POSTMAN TEST NOTES 🔹
//
// 1️⃣  /signin  →  POST request
//     - URL: http://localhost:3000/signin
//     - Go to Body → raw → JSON
//     - Send:
//       {
//         "username": "harkirat@gmail.com",
//         "password": "123"
//       }
//     - Copy the "token" from the response ✅
//
// 2️⃣  /users  →  GET request
//     - URL: http://localhost:3000/users
//     - Go to Headers tab
//     - Add:
//         Key: Authorization
//         Value: Bearer <paste your token here you got from the post request before>
//     - Hit Send ✅
//     - You’ll get all users except the one who signed in
//
// 3️⃣  If token invalid or missing → "Invalid token" error ❌
