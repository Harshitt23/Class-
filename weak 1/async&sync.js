//example of async. function - setTimeout
function findsum(n){
    let ans = 0;
    for (let i = 0;i<n; i++){
        ans = ans + i;
    }
    return ans;
}
function findsumtill100(){
    console.log(findsum(1000));
}

setTimeout(findsumtill100, 1000)
console.log("hello world")

/*first hello worold will print and then findsumtill100 will print asynchronously, even though settimeout is above than console.log(hello world),
but then also , hello world will print first, bcz setTimeout is an asynch. function.
set timeout is halting the operation for a second. , so asynchronously hello world is printing first , and then finsumtill100.*/







//but if u want to do it synchronously - then there is a function - syncsleep().
function findsum(n){
    let ans = 0;
    for (let i = 0;i<n; i++){
        ans = ans + i;
    }
    return ans;
}
function findsumtill100(){
    console.log(findsum(1000));
}

//busy waiting
function syncsleep(){
    let a = 1;
    for( let i = 0; i<100000000; i++){
        a++;
    }
}

syncsleep()                                     //now findsumtill100(), will print here first and then hello world will print.
findsumtill100()                                //bcz. syncsleep(), is an synchronous function.
console.log("hello world")

