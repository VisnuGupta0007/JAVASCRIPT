////////// DAY 4 //////////////////

// Interview Questions Day 1 //

// Q1. difference between "==" and "===" Operators.

// Ans : there are a few difference in "==" and "==="
// "==" : in this situation only we check the values , 
// "===" : in this situation we check the value and data type as well.

// Q2. what are the difference between var, const and let ?

// Ans : 
// *Var : it can be ReAssigned And Redeclear As Well.
// it Works in Function-scoped.
// Example :
//  var a = 20
//  var a = 20
//  console.log(a+a)

// *Const : it can not be ReAssigned And Redeclear As Well
// it works in block-scoped
// Example :
//          const a = 12
//          const a = 12 // Output : Error

// *let: it can not be ReAssigned but i can be Redeclear
// it works in block-scoped
// Example :
//          let a = 34
//          a = 20
//          console.log()



// Q3. what is the execution Context

// Ans:   Execution Context (EC) is an environment where JavaScript code is executed.
//        It determines how functions, variables, and objects are stored and accessed during runtime.



// Q4. what is creation phase and execution phase
// Ans: 
// creation phase :it is the first step to create A variable . JavaScript sets up memory for variables and functions before executing any code.

// execution phase: when we Compelete create the Variable , after that Execution Phase Start to run the code line by line.
// Q5. What is hoisting.
// Ans : it is a javasript Behave by which we can see how to work the  javasript Behind the seen.
//       javascript where all the and function declaration are moved on top.



// Q6. difference between undefined vs not defined vs NaN?
// Ans : (1) undefined : when we declear the variable but not Assigned the value.
// Example : 
// let x;
// console.log(x); // undefined


//       (2) not defined : when we Don`t Defined the Value.
// Example :  
//      let a = 20
//      console.log(a)
//      console.log(b + a) // Output : b is not defined

//       (3) NaN : it means when the value is not a Number.
// Example :
// const a = "Vishu"
// console.log(typeof a)
// Q7. how Many operators do we have in js?

// Ans :
//  comperision Operator : (==, ===, <, > , !=, !==, <= , >=)
//  increament and Decreament Operator : (++ , --)
//  ternary Operator : (value1 : value2)
//  Assignment Operator : (+= , -+ , *= , /= , %= ,  )
//  Logical Operator : (&& , || , !)

// Q8. Explain Local Scope, Block Scope
// Ans :
// Local Scope : When a variable is declared inside a function.
// Block Scope :  by the use of Function  we make a Block Scope element

// Q9. Functional Scope and Scope Chain in JavaScript

// Ans :
// Functional Scope : when we decleare the variable inside the function and it can be Accessible only under in function not Outside.
// Example :
// function value(){
//     var val1 = 2000
//     console.log(val1) 
// }
// value() // OutPut ; 9

// Scope Chain :  Scope Chain is how JavaScript looks for variables when they are accessed inside and Outside the functions.
//                First it will find the value inside the function if it coudl`n found the value current function, 
//                then javaScript looks outside the Scopes.

// let a = 20
// function value2(){
//     const name = "Vishu"
// }
// console.log(value2) // OutPut : [Function: value2] 
