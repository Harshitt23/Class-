/* 📝 Assignment — JWTs

1️⃣ Write a function that takes in a username and password, and returns a JWT token with the username encoded inside the object.
Should return null if the username is not a valid email, or if the password is less than 6 characters.
Try using the Zod library for validation.
2️⃣ Write a function that takes a JWT as input and returns true if the JWT can be decoded (not verified). Return false otherwise.
3️⃣ Write a function that takes a JWT as input and returns true if the JWT can be verified. Return false otherwise.*/

//-------------------------------------------------------ANS------------------------------------------------------

const jwt = require("jsonwebtoken");
const zod = require("zod");
const JWT_SECRET = "harshit_secret";

// 🧩 1️⃣ Function: Create JWT with username encoded
function signJwt(username, password) {
  // Validation schema using Zod
  const schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
  });

  // Validate input
  const result = schema.safeParse({ username, password });
  if (!result.success) {
    return null; // Invalid username or password
  }

  // Username encoded inside JWT object
  const payload = { username };
  const token = jwt.sign(payload, JWT_SECRET);

  return token;
}



// 🧩 2️⃣ Function: Decode JWT (not verified)
function decodeJwt(token) {
  try {
    const decoded = jwt.decode(token);
    return !!decoded; // Returns true if decodable
  } catch {
    return false;
  }
}

// ( !!decoded → converts any value into true or false. )
// If token decoded successfully → returns true
// If not decoded (null or error) → returns false
// u can use simple ifelse, imstead of this try , catch , !!decoded - 
/*
if (decoded) {
  return true;
} else {
  return false;
} 
*/



// 🧩 3️⃣ Function: Verify JWT (checks authenticity)
function verifyJwt(token) {
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

// 🧪 Manual Test
const token = signJwt("harshit@gmail.com", "123456");
console.log("Generated Token:", token);
console.log("Decoded:", decodeJwt(token));
console.log("Verified:", verifyJwt(token));

module.exports = { signJwt, decodeJwt, verifyJwt };


