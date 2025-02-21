////////////////// Day 6 ///////////////

// LOOP : When we want to excute the code many times in one method
// for loop
// for-in loop
// for-of loop
// while
// do-while loop

// (1) : for loop: loop a block of code no. of times.

// const n = 3
// for (let i = 1; i <= n; i++) {
//     console.log("i Am Programmer")
// }
// Output : 
//          i Am Programmer
//          i Am Programmer
//          i Am Programmer
// 

// for(let i = 0; i < 500 ; i++){
//     console.log(i+1)
// }
// Output : 1 to 500.

// Trail : Additon of natural Number

// let sum = 0
// let n = prompt("Enter the Value of n")
// n = Number.parseInt(n)
// for(let i = 0; i <= n; i++){
// sum += (i)
// }
// console.log("sum of first " + n + " natural number is " + sum )

// Output : program to add first n natural number 
//       Example : 6 = 6+5+4+3+2+1


// (let i = 1) :it will run only one time, it will run before cheking condition.
// (i <= n) : it is condition it will run until condition will not be false. After the condition false Loop will be stoped.
//  And it will check before excute the body.
// (i++) : is can be anything increament or decreament, it depends on work what we want.



// (2): for-in loop: Used for looping over object properties.

// const student = {
//     name: " vishu",
//     age: 12,
//     class: 1
// }
// for (let key in student) {
//     console.log(`${key} = ${student[key]}`)
// }

// Output :
// name = vishu
// age = 12
// class = 1
//  (`$`) : it is template lit.

// Example:
// let numbers = {
//     vishu : 40, 
//     tushar : 33,
//     niharika : 45,
//     laxmi : 66
// }
// for(let a in numbers){
// console.log("Marks of " + a + " are " + numbers[a])
// }

// Output : 
// Marks of vishu are 40
// Marks of tushar are 33
// Marks of niharika are 45
// Marks of laxmi are 66

// let input = prompt("Enter a Value ")
// for(let i = 1; i<= 10; i++){
//     console.log(`${input} * ${i} = ${input * i}`)
// }

// (3) : for-of loop : loops through the values of an Array.
////////////////////////////////

// While loop : Used when the number of iterations is unknown and based on a condition.
// let i = 4
// while(i<10){
//     console.log(i +1);
//     i++
// } 


// Output : after the 4 because we have mention the value of i. that`s why it is given value of i.
// 5
// 6
// 7
// 8
// 9
// 10



// Do-while loop : first it will run after that it will check the condition.( it runs at least One Times )
// (Note : we have to put increament and decreament otherwise it will go to infinity value)
// let i = 1
// do {
//     console.log("Value is ", i++)
// } while (i <= 10)
//  Output :
// Value is  1
// Value is  2
// Value is  3
// Value is  4
// Value is  5
// Value is  6
// Value is  7
// Value is  8
// Value is  9
// Value is  10
