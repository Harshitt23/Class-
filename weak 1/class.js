//Now we will learn about classes -  but first we will see an example
//let there is a code - 
const dog3 = {
    name : "doggie",
    legscount : 2,
    speaks : "bhow bhow",
};

const cat3 = {
    name : "cattie",
    legscount : 2,
    speaks : "meoww",
};

console.log("animal:" + dog3["name"]+ " " + dog3["speaks"]);                        //    ans- animal:doggie bhow bhow
console.log("animal:" + cat3["name"]+ " " + cat3["speaks"]);                        //    ans- animal:cattie meoww





//or u can do it like function -- \
const dog1 = {
    name : "doggie",
    legscount : 2,
    speaks : "bhow bhow",
};

const cat1 = {
    name : "cattie",
    legscount : 2,
    speaks : "meoww",
};

function printstr(animal){
    console.log("animal:" + animal["name"]+ " " + animal["speaks"]);
}

(printstr(dog1));
(printstr(cat1));




//now forget about the easy o function way - we will do it with classes ---
class animal{  
    constructor(name, legcount, speaks){
        this.name = name;
        this.legcount = legcount;                       //we have created a blueprint for animals, now we can just add animals below 
        this.speaks = speaks;
    }
    speak(){
        console.log("hi there" + this.speaks);
    }
    names(){
        console.log("hi there" + this.name);
    }
    legcounts(){
        console.log("hi there" + this.legcount);
    }
}

let dog = new animal("dog", 4, "bhow bhow");
let cat = new animal("cat", 4, "meow meow");
console.log(dog);                              //it will return - animal { name: 'dog', legcount: 4, speaks: 'bhow bhow' } , we have created a
                                              // blueprint for animals and now we can just add our any animal like dog,cat 

cat.speak();                                  // it will print - hi there meow meow
cat.names();                                   // it will print - hi there cat
cat.legcounts();                              // it will print - hi there 4

