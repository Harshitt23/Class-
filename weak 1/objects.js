const obj = {
key1 : "value 1",
key2 : "value 2",
key3 : "value 3",
}

function objectsmethod(){
    console.log("original object is:", obj)
}
objectsmethod()

let keys = Object.keys(obj)
console.log("after object keys:", keys)

let values = Object.values(obj)
console.log("after object values:", values)

let entries = Object.entries(obj)
console.log("after object enteries:", entries)

let hasProp = Object.hasOwnProperty(obj)
console.log("after object hasProp:", hasProp)

let newObj = Object.assign(obj)
console.log("after object newObj:", newObj)

