//global catches -- A global catch is an error-handling middleware in Express that catches all errors from any route or middleware and prevents the server from crashing.
// Must have 4 parameters → (err, req, res, next)

const express = require('express');

const app = express();

app.use(express.json());

app.post("/health-checkup", function(req,res){
    const kidney = req.body.kidney;
    const kidneylength = kidney.length;
    
    res.send("you have " + kidneylength + " kidneys");
});

//global catches
app.use(function(err,req,res,next){
    res.json({
        msg: "sorry somehing is messing up ur server"
    })
})

app.listen(8000, "0.0.0.0", () => {
    console.log("Server running on port 8000");
  });