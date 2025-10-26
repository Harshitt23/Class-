//using callBack - Ugly Good - A callback is just a function you give to another function,so that it can “call you back” later when it’s finished.
// fs - ou’re importing Node.js’s file system tool.It lets you read files like a.txt
const fs = require("fs") // It reads a file asynchronously (non-blocking).When the file is done loading, it calls the callback function you gave it.

//my own asynchronous function
function Readfile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){                          
        cb(data);                     //the data from a.txt is stored in data, inside cb function
    })
}

//callback funciton to call
function onDone(data){           //So cb = onDone here, bcz. we do ondone(data) which is equal to cb(data).  Which means cb(data) → onDone(data) 
    console.log(data)                  //data from a.txt is printed now
}
Readfile(onDone)           //above ondone function is called to print data - a.txt

//Hey Readfile, here’s a function. Don’t run it now. Run it later when the file is ready, and give it the file’s data.”
//Why not just call onDone() directly?
/*1️⃣ onDone() runs immediately

If you wrote:
onDone();

JS would just run it right now, before the file is read. At that point, there’s no data yet, because fs.readFile hasn’t finished.
So you’d get undefined or an error.

so-----we want it to run later, when file reading is done ,That’s exactly what callbacks do. By passing onDone to Readfile like this:
Readfile(onDone)

you are saying:
“Hey Readfile, here’s a function. Don’t run it now. Run it later when the file is ready, and give it the file’s data*/









//----------Promises->----------------------------------------------------------------------------------------------------------------------------------

//now this is an example of async function using CallBack. but there is a way to write it more better, not this ugly way above--
//the way is to write it using Promises. - pretty good


const fs = require("fs")
function Readfile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){                           
        resolve(data);
    })
  })
}

function onDone(data){
    console.log(data)
}
Readfile().then(onDone)

//using promises , it is  a cleaner way to write ur code. , hence optimizing the entire code and readability.








