//fs = filesystem - node.js library - it lest u read any file.
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("hi there")

let a = 0;
for(let i = 0; i<1000000; i++){
    a++;
}

console.log("hi there 2")


/*fs.readFile() is asynchronous — it reads the file(a.txt) in the background and doesn’t stop the rest of the code.
So:-- It starts reading the file 🔄
Moves on → prints "hi there" and runs the loop 💨
Prints "hi there 2"
When the file is ready 📂 → callback runs → prints a.txt content - Hyy
That’s why file data comes last — Node.js doesn’t wait, it keeps going 🧠⚡*/