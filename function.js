// //functions Example
// function getslice(str,start,end){
//     console.log("original string:", str);
//     console.log("after slice:", str.slice(start,end));   
// }
// getslice("hellokkkkk world",0,5);                           //only showing 0-5, thats what slice does = indecx- o,1,2,3,4

//                                                           //ans will be - original string: hellokkkkk world
//                                                           //              after slice: hello


// //or u can also write slice without function
// let ans = "harshit Sharma".slice(0,3)
// console.log(ans)                                         // ans will be - har





// //also there are substr , which are like slice but different
// const value = "harshit Sharma";
// let ans1 = value.substr(1,3)            //ans will be - ars
// let ans2 = value.slice(1,3)             //ans will be - ar

// console.log(ans1)
// console.log(ans2)


//also there is replace function too - 
// const str = "hello world";
// console.log(str.replace("world","javascript"))                      //it will replcae world with javascript
//                                                                     // ans will be - hello javascript  


//there is split function - 
const vlaue = "hello hy harshit"
const ans = vlaue.split(" ");
console.log(ans)
