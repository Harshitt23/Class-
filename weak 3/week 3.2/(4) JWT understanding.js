const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const JWT_SECRET = "harshit_secret"; // secret key

// 🧩 1️⃣ Login route → creates token
app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (username !== "harshit" || password !== "123") {
    return res.status(403).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// 🧩 2️⃣ Protected route → verifies token
app.get("/profile", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const username = decoded.username;                         // ✅ extract username from token payload
    res.json({ msg: `Welcome ${decoded.username} 🎉` });
  } catch (err) {
    res.status(403).json({ msg: "Invalid or expired token" });
  }
});

app.listen(3000, () => console.log("✅ Server running on 3000"));

//----------------------------------------------------------------------------------------

/*
🧠 jwt.sign(payload, secret)
-> Creates a token with given data (payload) signed by your secret key

🧠 jwt.verify(token, secret)
-> Checks if token is genuine (created with the same secret)
-> Returns decoded payload (e.g. { username: "harshit", iat: 123, exp: 456 })

decoded = { username: "harshit", ... }
decoded.username gives you the username
*/

//----------------------------------------------------------------------------------------

//what does decoded adn JWT ssecret do 
/*
When we create a token:
jwt.sign({ username }, JWT_SECRET);


we put { username } inside it (that’s the payload). Later, when we verify it with:
const decoded = jwt.verify(token, JWT_SECRET);


the variable decoded becomes that same payload object again. Example:

{ username: "harshit", iat: 1731216745, exp: 1731220345 }


So decoded.username = "harshit" ✅
That’s why you can now show it in the response or use it in DB queries.

*/