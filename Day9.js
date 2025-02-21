/////////////////  Day 9  ////////////

// Function 

// there are three ways to create a function.

// 1. Regular Function

// function a(){
//     console.log("Hello World")
// }
// a()  (Function Calling/ Invocation)


// 2. Arrow function  : A shorter syntax for writing functions.

// const arrow = () => {
//     console.log("This is Arrow function")
// }
// arrow()    // Output : This is Arrow function

// 3. Function expression : A function assigned to a variable.

// const a = function (){
//  console.log("Hello ")
// }
// console.log(a("World"))


// Examples...

// function parameter with console.

// function para(x, y){   // (in the parameter we can`t pass the numbers)
//     console.log(x, y)
// }
// para(22,65) //(it is Agruements) // Value is a Arguements


// function with the alert.

// function msg(){
//     alert("Alert Hai jiiiiii....")
// }
// msg()

// Q : You are provided with a string you hae to slice the name from the string. and print the sliced string.

// input : Hi Prepbytes
// Output : Prepbytes

// let str = "Hi Prepbytes"
// console.log(str.slice(3))  // Output : [ 'Prepbytes' ]


// Q : you are provided an Array to integer yoou have to print the sum of Array.
// input 1,2,3,4
// Output : 10

// let arr = [1, 2, 3, 4]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)