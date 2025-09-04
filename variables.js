var a = 10;
console.log(a); // 10

let b = 20;
console.log(b); // 20

const c = 30;
console.log(c); // 30


// Scope of var

var x = 100; // Global scope
console.log("Global x:", x); // 100
{
    var x = 200; // Same variable, re-declared in the same scope
    console.log("Block x:", x); // 200
}
console.log("Global x after block:", x); // 200
console.log("--------------------------------------------------");
// Scope of let
let y = 100; // Global scope
console.log("Global y:", y); // 100
{
    let y = 200; // New variable, block scope
    console.log("Block y:", y); // 200
}   
console.log("Global y after block:", y); // 100
console.log("--------------------------------------------------");
// Scope of const
const z = 100; // Global scope
console.log("Global z:", z); // 100
{
    const z = 200; // New variable, block scope
    console.log("Block z:", z); // 200
}   
console.log("Global z after block:", z); // 100
console.log("--------------------------------------------------");
// Re-declaration and Re-assignment
var p = 10;
console.log("Initial var p:", p); // 10
var p = 20; // Re-declaration
console.log("Re-declared var p:", p); // 20
p = 30; // Re-assignment
console.log("Re-assigned var p:", p); // 30
console.log("--------------------------------------------------");
let q = 10;
console.log("Initial let q:", q); // 10
// let q = 20; // Error: Identifier 'q' has already been declared
q = 20; // Re-assignment
console.log("Re-assigned let q:", q); // 20
console.log("--------------------------------------------------");
const r = 10;   
console.log("Initial const r:", r); // 10
// const r = 20; // Error: Identifier 'r' has already been declared
// r = 20; // Error: Assignment to constant variable.
console.log("--------------------------------------------------");