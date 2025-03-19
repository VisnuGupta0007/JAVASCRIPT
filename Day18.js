////////////////////////////  Day 18   ///////////////////////////////////////////////

// Promise Case :
// 1 . fullfilled(resolve)
// 2 . pending
// 3 . rejected


// normal setTimeout: 

// function timer(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//        setTimeout(() => console.log(data[0]), 1000)
//        setTimeout(() => console.log(data[1]), 2000)
//        setTimeout(() => console.log(data[2]), 3000)
//        setTimeout(() => console.log(data[3]), 4000)
//        setTimeout(() => console.log(data[4]), 5000)
//        setTimeout(() => console.log(data[5]), 6000)
//        setTimeout(() => console.log(data[6]), 7000)

//     })
//     .catch(err => {
//         console.log(err)
//     }
// )
// }
// timer()

// nested setTiomeout :

// const direct = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => {
//             setTimeout(() => {
//                 console.log(data[0])
//                 setTimeout(() => {
//                     console.log(data[1])
//                     setTimeout(() => {
//                         console.log(data[2])
//                         setTimeout(() => {
//                             console.log(data[3])
//                             setTimeout(() => {
//                                 console.log(data[4])
//                                 setTimeout(() => {
//                                     console.log(data[5])
//                                 }, 6000)
//                             }, 5000)
//                         }, 4000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)

//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// direct()


// in loop we try nested setTimeout

// let arr = [1,2,3,4,5,6,7]
// for(let i = 0 ; i < arr.length ; i++){}

// setTimeout(()=>{
//     console.log(arr[0])
//     setTimeout(()=>{
//         console.log(arr[1])
//         setTimeout(()=>{
//             console.log(arr[2])
//             setTimeout(()=>{
//                 console.log(arr[3])
//                 setTimeout(()=>{
//                     console.log(arr[4])
//                     setTimeout(()=>{
//                         console.log(arr[5])
//                         setTimeout(()=>{
//                             console.log(arr[6])
//                         },7000)
//                     },6000)
//                 },5000)
//             },4000)
//         },3000)
//     },2000)

// },1000)
