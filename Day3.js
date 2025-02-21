/////// Day 3 //////////////////////

// Increament, Decrement Oprator

// 1. Increament : (a++ :) post increament , (++a): pre increament

// let a = 10
// let b = 30

// console.log(a++) // Output : 10
// console.log(++a)  // Output : 11
// console.log(a)  // Output : 11 (when we use A again then we get +1 value)

// 2. Decreament : (  a--): post Decreament, (--a) : pre Decreament

// let a = 33
// let b = 22

// console.log(b--) // Output : 22
// console.log(b) // Output :  21 (Now it will given -1 value)
// console.log(--b) // Output : 21

// Trail
// let a = 20
// console.log(++a)   // 21
// console.log(--a)    //20
// console.log(a)      //20
// console.log(a++)    //20
// console.log(a--)    //21

// Examples:
// let a = 20
// console.log(a--, a, --a, --a, a--, a, a, a,--a, a--, --a) // output : 20 19 18 17 17 16 16 16 15 15 13

// let a = 20
// console.log(++a, a, --a, a--, a--, a, a, a--, a++, ++a, ++a, a++, --a)

//  Output: 21 21 20 20 19 18 18 18 17 19 20 20 20


// Assigment Oprator

// Example:
// =  (x = y)
// += (x = x+y)
// -= (x= x-y)
// *= (x = x*y)
// /= (x = x/y )
// %= (x = x % y ) 
// **= (x = x**y)

// Examples:
// let b = 26
// b += 5
// console.log(b) // 31

// let c = 27
// c %= 5
// console.log(c)  // 2


// // Logical Oprator 

// && :  and :
// True && True = True
// True && false = false
// false && false = false


// let a = 12
// let b = 12
// console.log(a == b && a!=b) // Output : False bcz One Condition is false 

// Examples 
// 1.
// let a = 15
// let b = 20
// console.log(a>b && b<a) // false

// 2.
// let a = 20
// let b = 20
// console.log(a === b && b == a) // Output : true

// 3.
// let a = 20
// let b = 20
// console.log(a!=b && b!=a) // Output : false

// 4. 
// let a = 20
// let b = "20"
// console.log(a !== b && b == a) // Output : true (bcz first check not Equal to and type as well)


////////////////////////////////////////////


// || :  Or : If one condition Will be True then, We will get true

// Example:
// let a = 6
// let b = 12
// console.log(a>b || b>a) // Output : True 

// Examples :
// 1.
// let a = 20
// let b = "20" 
// console.log(a === b || b == a) // Output : True

// Ans : it is A javascript behave by which execution happend
// ! :  Not  
// Example:

// console.log(!true) // Output : false

////////////////////////////////

// Ternary Oprator :

// condition ? val1 : val2 : If One condition Will be true So, We will get value1 otherwish We will get value2
// console.log(5 === 6 ? "Right":"Wrong") // Output : Wrong

// let a = 5
// let b = 5
// console.log(a === b ? "You Are right":"Somthing Wrong") // You Are right

//let a = 20
// let b = 16
// console.log(a > b ? "you are Above the 18":"you are under in 18")  

// //
// let a = 0
// console.log(!a) // Zero Always Will be False
