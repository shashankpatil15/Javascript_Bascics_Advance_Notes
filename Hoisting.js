// Hoisting in Javascript : By Accessing the variables and functions before initialization
getMyName();
console.log(x);

var x = 10;
function getMyName(){
    console.log("shashank");
}

// getMyName();
// console.log(x);
// console.log(getMyName);

//  Undefined and not defined
// undefined: variable is declared but not initialized
// console.log("before",y);
// var y;
// console.log("after",y);
// console.log(z); // not defined error

getMyAge();
console.log(a);
console.log(getMyAge);

var a =10;

var getMyAge = () => {
    console.log("33");
}
// Hoisting for arrow function does not work
