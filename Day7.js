//////////// Day 7 //////////////

// Q1. Write a JavaScript program to construct the following pattern, using a nested for loop.

// *
// * * 
// * * *
// * * * *
// * * * * *

let rows = 5
for (let i = 1; i <= rows; i++) {
    let pattern = " "

    for (let j = 1; j <= i; j++) {
        pattern += "*" + " "
    }

    console.log(pattern)
}

// Q2. Iterate through all numbers from 1 to 45. Print the following:

//    For multiples of 3 print “Fizz”
//    For multiples of 5 print “Buzz”
//    For multiples of 3 and 5 print “FizzBuzz”

// let num = 45
// for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzBuzz") // both statement are true.
//     }
//     else if (i % 3 === 0) {
//         console.log("fizz") // this Statement Also true, thas`s why it will print After the 3.
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz") // this Statement Also true, thas`s why it will print After the 5.
//     }
//     else {
//         console.log(i)  // it will print the number by itSelf. if else will not declare So, we will not get the numbers.
//     }
// }

// let num = 45
// let value;
// switch (num) {

//     case   ( num % 3 === 0 && num % 5 === 0):

//         value = "FizzBuzz";
//         break;
//     case (num % 3 === 0):
//         value = "Fizz";
//         break;
//     case (num % 5 === 0):
//         value = "Buzz";
//         break;
//     default:
//         value = num
// }
// console.log(value)


/////// STRING ////////

// which we write under un single cote and double cote we called String.

// Cheking Index
// var num = "I am developer and designer"
// let result = num.indexOf("developer")
// console.log(result)     //// Output: 5

// var str = "i am a frontend developer"
// let res1 = str.indexOf("frontend")
// console.log(res1)  // Output : 7

// var num = "I am developer and designer"
// let result = num.indexOf("Developer")
// console.log(result)     //// Output: -1  (if we don`t get any value and there is no similar value Then, we will get -1)


// Cheking Last Index
// var num = "I am developer and designer and designer"
// let result = num.lastIndexOf("designer")
// console.log(result)  //Output : 32 (if we put similar value then, it will check only last index. )


// var num = "I am developer and designer and designer"
// let result = num.indexOf("designer", 20)
// console.log(result)  // Output : 32 (if will Start After the 20 indexing because we have already defind)


// Strings concatenation  ////

// var str1 = "Visnu"
// var str2 = "Gupta"
// var str3 = str1 + " " + str2
// console.log(str3)  // Output : Visnu Gupta


// Concat Method  
// let str1 = "prep "
// let str2 = "Bytes"
// let res = str1.concat(str2)
// console.log(res)  // Output: prep Bytes


// Slice Method
// the slicce method() removes the parts of a String and return the extracted part of a new string.

// var num = "I am developer and designer and designer"
// let result = num.slice(9)
// console.log(result)  // Output : loper and designer and designer (it will given after the 9th string)



// var num = "I am developer and designer and designer"
// let result = num.slice(9, 20)
// console.log(result)  // Output : loper and d (it will start After the 9 and it will given under the 20 string (we have deside the Range))


// minus Indexing
// var num = "I am developer and designer and designer"
// let result = num.slice(9, -15)
// console.log(result)  // Output : loper and design (first it will start from 9th and second it will check -15 indexing)


// Substring 
// Substring Does`nt Support the negative index for substr  second  parameter is length.

// var num = "You will be an Amazing developer"
// var newMessage = num.substring(7, 20)
// console.log(newMessage)  // Output : l be an Amazi (it has a same work as a slice but it Avoid the negetive indexing)

// let num = "i am Programmer"
// let num2 = num.substring(2, 15)
// console.log(num2)  // Output : am Programmer

// Replace 

// var str1 = "You will be an Amazing developer"
// var res = str1.replace("d", "D")
// console.log(res)  // Output : You will be an Amazing Developer (it will find the first "d")

// var str1 = "You will be an Amazing developer and designer"
// var res = str1.replaceAll("d", "D")
// console.log(res)  // Output : You will be an Amazing Developer anD Designer (Now we replace all the indexing)


// Trim Method
// var str1 = "  You will be an Amazing developer  "
// var res = str1.trim()
// console.log(res)  // It will remove the first and last Space

// var str1 = "   I am From Faridabad"
// var str2 = str1.trim()
// console.log(str2)  // Output : I am From Faridabad


/////// Split 
// If we want the change the value String to Array Then, We have to use Split Method.

// let num = "1,2,3,4,5,6,7,8,9"
// let num2 = num.split(",")
// console.log(num2)  // Output: [1,2,3,4,5,6,7,8,9]


// let num = "1,2,3,4,5,6,7,8,9"
// let num2 = num.split("5")
// console.log(num2)  // Output :  [ '1,2,3,4,', ',6,7,8,9' ] (it will Split the 5th Indexing)


// Word.length 
// it will count the Wording length.

// let str = "You will be an Amazing developer and designer"
// console.log(str.length)

// // Output : 45 

// var msg = "I am Frontend Developer And Designer"
// console.log(msg.length)  // Output : 36