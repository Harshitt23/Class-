function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumofsomething(a,b,callbackfunct){
    const val1 = callbackfunct(a);
    const val2 = callbackfunct(b);
    return val1 + val2;
}
 
console.log(sumofsomething(2,2,square));                                // 8                                                                            
console.log(sumofsomething(2,2,cube));                                  // 16