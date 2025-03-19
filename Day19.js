//////////////////////////////////////////////////  Day 19  ////////////////////////////////////////////////////////////////

// Clousure : A clousure gives access to variable or other properties of outer function or parent to inner function or child function by creating a lexical environment.

// function father(){
//     let name = "Vishu"  // name is a local variable defined inside father.

//     function child(){   // child() is the inner function, a clousure 
//         console.log(name)  // use variable declared in the parent function
//     }
//     child()
// }
// father()   // Output : Vishu


// Event loop : 

// function onClick() {
//     setTimeout(function timer() {
//         console.log('You clicked the button!');    
//     }, 2000);
// };
// onClick()

// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 5000);

// console.log("Welcome to loupe.");
