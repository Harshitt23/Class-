const allusers = [{    
    firstname: "harshit",
    gender: "male"
},{
    firstname: "Rahul",
    gender: "male"
},{
    firstname: "Harsh",
    gender: "female"
}]

for(let i = 0; i<allusers.length ; i++){
    if(allusers[i]["gender"] == "male"){
        console.log(allusers[i]["firstname"])
    }
}


