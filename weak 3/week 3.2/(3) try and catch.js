/*
try block: code that might fail (like network calls, token verification, DB queries).
catch block: handles the error instead of crashing the program.
Prevents server from breaking when something goes wrong.

✅ Used for:
Error handling in async/await
JWT verification
Fetch API calls
Database operations
*/

//---------------------Basic Example-----------------------

/*
try {
  let num = notDefined; // ❌ ReferenceError
  console.log(num);
} catch (err) {
  console.log("Caught error:", err.message);
}
*/

//---------example with JWT which u will use in real life, so learn it.------------

    // 🧩 Code that might throw an error
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET); // verify token
    const username = decoded.username;
    console.log("✅ Token verified for:", username);
  } catch (err) {
    // 🧩 If any error happens in try block, this runs
    console.log("❌ Error verifying token:", err.message);
  }
  
//----------------------Summary-------------------------

// try...catch = handle runtime errors safely
// try → run risky code
// catch → handle errors if they occur
