// //////////////////////////////////// Day 13 //////////////////////////////////


// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// find the largest number

// Example 1 (using the Math.max())
// let number = [23,43,44,21,299]
// let num = Math.max(...number)
// console.log(num)   // Output : 299

// Example2 (Using the Loop)

// let numbers = [3,45,2,60,34,556,345]
// let largest = numbers[0]
// for(let i = 0; i <numbers.length;i++){
// if(numbers[i]> largest){
// largest = numbers[i]
// }
// }
// console.log(largest)   // Output : 556

// Q. Find the Smallest number

// let numbers = [3,45,2,60,34,556,345]
// let smallest = numbers[0]
// for(let i = 0; i <numbers.length;i++){
// if(numbers[i]< smallest){
// smallest = numbers[i]
// }
// }
// console.log(smallest)   // Outpuf : 2

// Q. Find the Unique Color

// function finduniqueColor(N, colors){
// const colorSet = new Set(colors)
// return colorSet.values()
// }
// let N = 6
// const colors = [3,2,4,1,2,3]
// console.log(finduniqueColor(N, colors))   // Output : [Set Iterator] { 3, 2, 4, 1 }


// Q. Odd and Even Sum..
// let num = [2, 54, 54, 32, 11, 23, 75]
// let odd = 0
// let even = 0
// let evenSum = 0;
// let oddSum = 0;
// function number() {
//     for (let res of num) {
//         if (res % 2 == 0) {
//             even++
//         }
//         else {
//             odd++
//         }
//     }
//     return { odd, even }
// }
// console.log(number())


// function sumOddEven() {
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] % 2 == 0) {
//             evenSum += num[i];
//         } if (num[i] % 2 != 0) {
//             oddSum += num[i];
//         }
//     }
//     return { oddSum, evenSum };
// }
// console.log(sumOddEven());

// ///////////////////

// Map : Creates a New Array by performing Some operation on Each array element.(when we want to make a new Array)
// example (what does it take as a argument)
// const arr = [1,2,3]
// arr.map((value , index, array)=>{
// return value
// })
// console.log(arr)

// (only we have put the value)
// const arr = [33,23,43,55]
// const arr2 = arr.map((value)=>{
// return value +1
// })
// console.log(arr2)   // Output : [ 34, 24, 44, 56 ]

// (Now we have put the value and index As well)
// const arr = [33, 23, 43, 55]
// const arr2 = arr.map((value, index) => {
//     console.log(value, index)
//     return value + 1
// })
// Output: 33 (0), 23 (1), 43 (2), 55 (3)


// (We have put the value , indexing and Array)
// const arr = [33, 23, 43, 55]
// const arr2 = arr.map((value, index, Array) => {
//     console.log(value, index, Array)
//     return value + 1
// })

// Output : 
// 33 0 [ 33, 23, 43, 55 ]
// 23 1 [ 33, 23, 43, 55 ]
// 43 2 [ 33, 23, 43, 55 ]
// 55 3 [ 33, 23, 43, 55 ]


// Filter : Filter an Array with values that passes a test create a New Array. 
// (when we want to filter the values )

// let arr = [ 22,32,43,55,21,5,11,9]
// let arr2 = arr.filter((res)=>{
//     return res > 20})
// console.log(arr2)   // Output : [ 22, 32, 43, 55, 21 ]