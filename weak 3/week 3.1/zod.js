// Definition:------------
// Zod is a TypeScript-first schema validation library used to validate and parse user input (like request body, query, params) in Node.js or frontend apps.
// Basically — it’s a modern, cleaner way to do input validation 🔍

// Why use Zod:-----------
// Automatically checks if input matches your schema
// Gives custom error messages
// Works with both JavaScript & TypeScript
// Makes your API safer and easier to debug

//installation -----------
//write     ->     npm install zod                     in terminl
//and write ->     const zod = require("zod");         in code

//already initialized in expressclass - so just copy paste like before and run the code locally there , NP!
//exampe of zod ---
const zod = require("zod");

function validateinput(arr){                        

    const schema = zod.array(zod.number());         //Creates a validation schema that says: “The input must be an array of numbers.”

    const response = schema.safeParse(arr);         //This line checks the input against the schema. safeParse() returns an object, not an error — so it won’t crash your program.
    console.log(response); 
}
validateinput([1,2,3]);                             //ans will be displayed as   -   {sucess: true, data: [1,2,3] }

//so zod is an independent library , which we can use without any express require
//if the input was - ["1",2,3] - then it will show -  {sucess: false, data: [1,2,3] }

//-----------------------------------------------------------------------------------------------------------------------------------
//another example - 
const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

// ✅ Function to validate input using Zod
function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),  // must be a valid email
    password: zod.string().min(8) // must be at least 8 chars long
  });

  const response = schema.safeParse(obj);
  return response;
}

// ✅ Express route with validation
app.post("/login", function (req, res) {
  const response = validateInput(req.body);

  // ❌ If validation fails
  if (!response.success) {
    res.status(400).json({
      msg: "Your inputs are invalid",
      errors: response.error.errors
    });
    return;
}

// ✅ If validation passes
res.json({
  msg: "Login input validated successfully!"
});
});

// ✅ Start the server
app.listen(8000, "0.0.0.0", () => {
console.log("Server running on port 8000");
});
  

/*                       Explanation (Line by Line)
Code	                                                             Meaning
const schema = zod.object({...})	                  Creates a schema for expected input object
email: zod.string().email()	                           Email must be a valid email format
password: zod.string().min(8)	                     Password must be at least 8 characters long
safeParse(obj)                      	          Validates safely and returns { success: true/false }
if (!response.success)	                               If input is invalid, send error message
res.json({...})	                                     Sends success message if validation passes       
*/

//-------------------------------------------------------------------------------------------

//Now if we go to Postman - 
/* POST → http://localhost:8000/login
Body → raw → JSON
--------------------------------
{
  "email": "hjarkirat@gmail.com",
  "password": "12345678"
}
-------------------------------
✅ Response:
{
  "msg": "Login input validated successfully!"
}
--------------------------------
❌ If invalid:
{
  "msg": "Your inputs are invalid",
  "errors": [
    { "message": "Invalid email" },
    { "message": "String must contain at least 8 character(s)" }
  ]
} 
*/

//-------------------------------------------------------------------------------------------

/*
🧠 Primitive Types in Zod
Type                        Description	                   Example
z.string()	           Validates a string value 	     "Harshit" ✅
z.number()	            Validates a number	                23 ✅
z.boolean()	        Validates a true/false value	       true ✅
z.null()	             Accepts only null	               null ✅
z.undefined()	      Accepts only undefined          	undefined ✅
z.bigint()	          Validates BigInt values	           123n ✅
z.symbol()	         Validates Symbol() type            Symbol("id") ✅
z.date()	      Validates JavaScript Date objects	     new Date() ✅
z.nan()              Checks specifically for NaN	       NaN ✅
*/
