// ///////////// Day 10  /////////////////////////////////////////////

// Q. find the number of similar values
// let str = [0,0,0,0,1,0,1,1,1,0] 

// let str = [0,0,0,0,1,0,1,1,1,0]
// let count0 = 0
// let count1 = 0

// for(let res of str){
// if(res == 0){
// count1++
// }else{
// count0++
// }
// }
// console.log(count0)  // 4
// console.log(count1)  // 6


// Q. find the largest number
//  let str = [50, 16, 80, 70, 10]

// Ans 
//  let str2 = [50, 16, 80, 70, 10]
//  let str3 = str2.sort()
//  console.log(str3.slice(-1)[0])  // 80

// Example2:
// let str = [50, 16, 80, 70, 10]
// let str2 = Math.max(...str)
// console.log(str2)   // Output : 80


// Q . find the Smallest number 
// let str2 = [50, 16, 80, 70, 10]
// let str3 = str2.sort()
// console.log(str3.slice()[0])  // 10 


// Q. Secound Smallest number.
// let str2 = [50, 16, 80, 70, 10]
// let str3 = str2.sort()
// console.log(str3.slice()[1])  // 16


// Q. find the odd And even.
// let str = [2,1,3,8,4,6,5]
// let odd = 0
// let even = 0
// for(let num of str){
// if(num % 2 === 0){
// even++
// }
// else{
//     odd++
// }
// }

// console.log(odd) // Output : 3
// console.log(even)  // Output : 4


// Q. vowels and cons.

// let str = "I am programmer"
// let str2 = str.toLowerCase()
// vowels = 0
// cons = 0
// for(let res of str2){
// if(res == "a" || res == "e" || res== "i"  || res == "o" || res == "u"){
// vowels++
// }else{
//     cons++
// }

// }
// console.log(vowels)
// console.log(cons)

// // Q. reverse the string.
// let str3 = "Vishu"
// console.log(str3.split('').reverse('').join(''))
