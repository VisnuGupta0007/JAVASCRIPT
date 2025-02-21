/////////////////  Day 8  /////////////////

// Array /////

// An Array is and ordered list of values that you refer to with a name and an index.
// it takes an element 

// Create a Arrays

// let arr = [22,3,56,43]
// console.log(arr.length)  // find length

// push : Add the new element and of the Array.

// const arr = ["I", "Am", "a"]
// arr.push("Developer")
// console.log(arr)  // Output :  [ 'I', 'Am', 'a', 'Developer' ]

// const arr2 = ["I", "Am", "From"]
// arr2.push("Faridabad")
// console.log(arr2)  // Output: [ 'I', 'Am', 'From', 'Faridabad' ]


// Slice : select a part of an array and returns new Array. (it Doesn`t change the same variable)

// const str = ["Noida","India", "Cetpa"];
// const str2 = str.slice(0,1)
// console.log(str2)   // Output : [ 'Noida' ]



// ToString : Convert and array to a String, and return the result.

// const arr = ["Hello", "We", "Are", "in", "Cetpa"]
// const arr2 =arr.toString()
// console.log(arr2)   // Output : Hello,We,Are,in,Cetpa.


// Shift : Removes the first element of an Array, and return that element.

// let arr = ["Hello", "We", "Are", "in", "Cetpa"]
// arr.shift()
// console.log(arr)    // Output: [ 'We', 'Are', 'in', 'Cetpa' ]

// let arr2 = ["Hello", "Today", "is", "Wed"]
// arr2.shift()
// console.log(arr2)   // Output: [ 'Today', 'is', 'Wed' ]


// Map : Create a new Array with the result of calling a function for every element.

// let arr = [9,8,7,6,5,4]
// let arr2 = arr.map((a)=> a * 2)
// console.log(arr2)    // Output: [ 18, 16, 14, 12, 10, 8 ]

// let num = [32,45,67,54]
//  console.log(num.map((b)=> b +10))   // Output : [ 42, 55, 77, 64 ]


// const num = [23,43,54]
// function dbl(x){
//     return x*3
// }
// console.log(num.map(dbl))   // Output : [ 69, 129, 162 ]


//  Pop : it will remove an last element.
// let num = [32,45,67,54]
// console.log(num.pop())  // 54



// Filter : creates an array filled  with all array elements that pass a test(provided as a function)

// const arr = ["faridabad", "del", "india", "noida"]
// console.log(arr.filter(word => word.length > 3))  // Output : [ 'faridabad', 'india', 'noida' ] 




// Find : it will given value.

// const arr = [12,34,56,43]
// console.log(arr.find(fnd => fnd == 34))  // Output : 34

// const arr2 = [22,32,32,12]
// const arr3 = arr2.find(b => b == 12)
// console.log(arr3)   // Output : 12



// findIndex  : it will given index number.

// const arr2 = [22,32,35,12]
// const arr3 = arr2.findIndex(b => b == 12)
// console.log(arr3)  // Output: 3

// let num = [88,21,31,33]
// let num2 = num.findIndex(b => b == 31)
// console.log(num2)   // Output : 2


// Reverse  : it reverse the elements.

// let num = [1,2,3,4,5,6,7,8]
// let num2 = num.reverse()
// console.log(num2)   // Output : [8,7,6,5,4,3,2,1]

// const str = ["Hello", "World"]
// const str2 = str.reverse()
// console.log(str2)   // Output : [ 'World', 'Hello' ]


// Short : it arrange the variable in Assending Order.

// const arr = [22,12,44,64,32]
// console.log(arr.sort())   // Output : [ 12, 22, 32, 44, 64 ]

// const arr2 = [3,21,33,23,54]
// arr2.sort()
// console.log(arr2)   // Output : [ 21, 23, 3, 33, 54 ]


// UnShift : it Add the first of the element. and return the length

// const str = [21,32,44,54,32]
// const str2 = str.unshift("20")
// console.log(str)   // Output : [ '20', 21, 32, 44, 54, 32 ]

// console.log(str2) // Output : 6 (Length)

// Delete : Delete the indexing.

// const arr = [22,32,43,12,18]
// const arr2 = delete(arr[2])

// console.log(arr)  // Output : [ 22, 32, <1 empty item>, 12, 18 ]

// console.log(arr2) // Output : True (Means it has been deleted Succesfully)
