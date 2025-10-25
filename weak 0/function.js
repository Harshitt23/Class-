//functions Example
function getslice(str,start,end){
    console.log("original string:", str);
    console.log("after slice:", str.slice(start,end));   
}
getslice("hellokkkkk world",0,5);                           //only showing 0-5, thats what slice does = indecx- o,1,2,3,4

                                                          //ans will be - original string: hellokkkkk world
                                                          //              after slice: hello







//or u can also write slice without function
let ans4 = "harshit Sharma".slice(0,3)
console.log(ans4)                                         // ans will be - har










//also there are substr , which are like slice but different
const value = "harshit Sharma";
let ans1 = value.substr(1,3)            //ans will be - ars
let ans2 = value.slice(1,3)             //ans will be - ar

console.log(ans1)
console.log(ans2)







//also there is replace function too - 
const str = "hello world";
console.log(str.replace("world","javascript"))                      //it will replcae world with javascript
                                                                    // ans will be - hello javascript  










//there is split function - 
const vlaue = "hello hy harshit"
const ans = vlaue.split(" ");                              //it will give - [ 'hello', 'hy', 'harshit' ]
console.log(ans)









//there is toupper and tolower - that make smallcase and bigcase words -
// toUpperCase
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");
  









//there is parseInt , its also a global function - 
console.log(parseInt("421"));            //ans will be - 421
console.log(parseInt("42paxxx"));        //              42
console.log(parseInt("3.154"));          //               3


console.log(parseFloat("421"));         // ans will be - 421
console.log(parseFloat("42paxxx"));     //               42
console.log(parseFloat("3.154"));       //              3.154                       //parseFloat can give decimal ans too.












//there is push and pop - just write push(2),pop(2) - it wioll push or pop in that array - 
const array5 = [1,2,3];
array.push(2);
console.log(array5)















//there is shift ands unshift to push or pull something from the front-
// shift()
function shiftExample(arr) {
    console.log("Original Array:", arr);
  
    arr.shift();
    console.log("After shift:", arr);
  }
  shiftExample([1, 2, 3]);
  
  // unshift()
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 0);











//there is concat - 
const array = [1,2,3,4];
const array2 = [5,6,7,8];                    //it is different from push bcz in push second alphabet is a no. and in this its an array

const finalarray = array.concat(array2);
console.log(finalarray)








// trim
function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");
  