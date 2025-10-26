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
console.log("the animal is:", dog3["name"], dog3["speaks"])                         //    ans- the animal is: doggie bhow bhow 
console.log("the animal is:", dog3["name"] + dog3["speaks"])                        //    ans- the animal is: doggiebhow bhow
console.log("the animal is:", dog3["name"], ", and he says:", dog3["speaks"])       //    ans- the animal is: doggie , and he says: bhow bhow



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

printstr(dog1);
printstr(cat1);




//now forget about the easy o function way - we will do it with classes ---
class animal{                                   //This defines a blueprint for creating animal objects.Each animal has name, legcount, and speaks properties.
    constructor(name, legcount, speaks){     //The constructor() method,Called automatically when you create a new animal using new animal(...). It assigns the values to that specific instance (object).
        this.name = name;
        this.legcount = legcount;                       //we have created a blueprint for animals, now we can just add animals below 
        this.speaks = speaks;
    }
    speak(){                                              //Methods inside the class - speaks(),legcounts(),names()
        console.log("hi there" + this.speaks);          //These are instance methods, meaning they belong to each object created from the class. 
    }
    names(){
        console.log("hi there" + this.name);
    }
    legcounts(){
        console.log("hi there" + this.legcount);
    }
}

let dog = new animal("dog", 4, "bhow bhow");       //object created
let cat = new animal("cat", 4, "meow meow");
console.log(dog);                              //it will return - animal { name: 'dog', legcount: 4, speaks: 'bhow bhow' } , we have created a
                                            
cat.speak();                //object called , // it will print - hi there meow meow
cat.names();                                  // it will print - hi there cat
cat.legcounts();                              // it will print - hi there 4





//You just created a class-based OOP structure in JavaScript where:
// class = blueprint
// constructor = setup function
// this = refers to the current object
// new = creates a new instance from the class