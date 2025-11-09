function firstfunction(){
    return new Promise(function(resolve){
        resolve(function(){
            return new Promise(function(resolve){
                resolve();
            })
        })
    })
}

firstfunction().then(function(result){
    return result();
}).then(function(){console.log("all done")})



/*
firstfunction()
↓
Creates and returns a new Promise object → which immediately resolves and returns [a function()]
↓
That function (when called) again returns a new Promise → which resolves (but doesn’t return any value)
↓
.then(result) → receives that inner function as 'result' and calls it
↓
That inner function returns a Promise → which resolves
↓
.then(...) → executes after that inner Promise is done → logs "all done"
*/