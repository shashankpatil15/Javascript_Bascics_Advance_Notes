
// var p = 800;

// function a(){
//     let p = 900;
//     console.log(p);
//     let sum = p + 1;
//     console.log(sum);
//     return sum;
// }
// a();

// console.log(p);
// Block: A block is a chunk of code bounded by {}, set of statements or group of statements which 
// can return a value or single statement.

// Block scope: Variables declared inside a block cannot be accessed from outside the block

// function a(){
//     console.log(b);
//     var b = 10;
// }
// a();

//scope chaining:- To find Variable in local or its lexical environment
// function a(){
//     function b(){
//         function d(){
//             console.log(c);
//         }
//         d();
//     }
//     var c = 20;
//     b();
// }
// a();

(function(){
    function a(){
        function b(){
        console.log(c);
        }
        b();
        var c =20;
    }
    a();
}());