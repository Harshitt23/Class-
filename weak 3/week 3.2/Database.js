/* Untill now we have been stroing data in memory. which is bad.
(1) - Data can't be dynamic, if u updqte in memory objects, the update are lost ifthe process restarts
(2) - There are multiple servers in the real-world. */

/* there are various types of DB-
Graph, Vector, No SQL, Sql DB's   */

//---------------------------------------------------------------------------------------------------------------

/*  MongoDB — Quick Notes
1️⃣ Definition:
MongoDB is a NoSQL database that stores data in JSON-like documents instead of tables.

2️⃣ Key Features:
Data is stored as collections of documents (like arrays of JSON objects).
Schema-less: You can store flexible data structures (no fixed columns).
Scalable & fast: Designed for high-performance apps and large data.

3️⃣ Usage in Node.js:
Used with the Mongoose library for easy CRUD operations (create, read, update, delete).
Commonly used for Express + MongoDB backend stacks (like MERN).
*/
//about mongoose - npm install mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));





//example code with mongo DB connection --
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "your url from mongo db",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  // should check in the database
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(7000);