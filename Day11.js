// ////////////////////////// Day 11.    //////////////////////////////////////////

// // Object: data Always in a Object Form, In a object data Always Store as a Key and Value Pairs.
// //         Objects are used to store and organize data in a structured way.
//              (An Object is a collection of related data and/or functionality (which usually
//               consists of several variables and functions which are called properties and methods when they are inside Objects.))

// // Create a Object

// let student = {
//     name: "Vishu",
//     age: 20,
//     gender: "Male"
// }

// console.log(student.name)  // Vishu
// // console.log(student.age)   // 20
// // console.log(student.gender) // Male



// // Spread Operator :  in JavaScript is used to expand elements of an iterable (like an array, string, or object) into individual elements. 
// //                    It is useful for making copies, merging, and passing elements to functions.

// // Spread Operator in String :

// let str = "Vishu"
// console.log(...str)
// // Output : V i s h u 


// // Spread Operator in Object :

// let obj = {
//     Name: "Vishu",
//     age: 20

// }

// let obj1 = {
//     id: 9,
//     insituteName : "CETPA Info Pvt Ltd"
// }

// let about = {
//     ...obj,
//     ...obj1,
//     gender: "Male"  //(Now we Add another Property in the Object )
// }

// console.log(about)     // Output : { Name: 'Vishu', age: 20, id: 9,  insituteName: 'CETPA Info Pvt Ltd', gender: 'Male' }
// //(Here we have merged the variables)
