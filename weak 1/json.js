const sampleJSONString =
'{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

const sampleJSONString1 = {
  name : "harshit",
  class : "nhi jata",
  profession : "berozgar"
}


function jsonMethods(jsonString) {
    console.log("Original JSON String:", jsonString);
  
    // Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);                                //it will take the string and parse the objects.
    console.log("After JSON.parse():", parsedObject);
  
    // Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(sampleJSONString1);                      //it will convert the object into string with doublecorts-" ".
    console.log("After JSON.stringify():", jsonStringified);
  }
  
jsonMethods(sampleJSONString);
  