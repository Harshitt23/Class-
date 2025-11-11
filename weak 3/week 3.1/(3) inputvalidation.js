// Input validation -- means checking if the data sent by the user (input) is correct, complete, and in the expected format before using it in your backend logic.

const express = require('express');

const app = express();

app.use(express.json());

app.post("/health-checkup", function(req,res){
    const kidney = req.body.kidney;
    const kidneylength = kidney.length;
    
    res.send("you have " + kidneylength + " kidneys");

});

app.listen(5000);
console.log("working");

// Input Validation:
// Process of checking if the user’s input is correct and safe before using it.
// Example: verifying that kidney exists and is an array before using .length.