// Function Statement or Function Declaration
function abc(){
    console.log("Function Statement or Function Declaration");
}
abc();

// Function expression

var xyz = function(){
    console.log("Function expression");
}
xyz();

//  Anonymous Function - show error but if you want to access then you need to add into IIFE
// function(){
//     console.log("Anonymous Function");
// }

(function(){
    console.log("Anonymous Function");
})();

// Named Function Expression
var pqr = function def(){
    console.log("Named Function Expression");
}
pqr();
// def(); // Error 

// First Class Function : A function take input as a parameter or return function as a output

var uat = function (){
    return function(){
        console.log("First Class Function");
    }
}
uat()();

//  Hiher order function: A function which takes another function as a parameter or return function as a output

// function higherOrderFunction(fn){
//     fn();
// }

function x(){
    console.log("some operation");
}
function y(x){
    console.log("y function");
    x();
}
console.log(y);
y(x);