// Closures : Function along with its lexical scope bundled together is called Closure.

//  Function Bind together with in its lexical scope

function outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    return inner();
}
// outer();
//  STACK: LIFO - last in first out [654321] add: push  remove: pop
var xx = outer();
console.log(xx);
// .....................
xx();

