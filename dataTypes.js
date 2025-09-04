// Number
// String
// Boolean
// Null
// Undefined

var num = 42; // Number
var str = "Hello, World!"; // String
var bool = true; // Boolean
var emptyValue = null; // Null
var notDefined; // Undefined    

console.log("Data Type of num:",typeof num); // "number"
console.log("Data Type of str:",typeof str); // "string"
console.log("Data Type of bool:",typeof bool); // "boolean"
console.log("Data Type of emptyValue:",typeof emptyValue); // "object" (this is a known quirk in JavaScript)
console.log("Data Type of notDefined:",typeof notDefined); // "undefined"
console.log("--------------------------------------------------");

// Object
var obj = {
    name: "Alice",
    age: 25
};
console.log("Data Type of obj:",typeof obj); // "object"
console.log(obj);
console.log("--------------------------------------------------");