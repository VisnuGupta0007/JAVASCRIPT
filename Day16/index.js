//////////////////////// Day 16  ////////////////////////////////////////

///////////// Promise:  

// let myPizza = new Promise(function (resolve, reject) {
//     let success = true;
//     if (success) {
//         resolve("Pizza is made")
//     }
//     else {
//         reject("Pizza is not made")
//     }
// })

// myPizza
//     .then(function (res) {
//         console.log(res)

//     }).catch(function (err) {
//         console.log(err)
//     })                          // Output : Pizza is made (it is being resolve)


//////////////////// Promises, Async, Await in Js   ///////////////

// async  function res(){
// let myPromise = new Promise(function(resolve, reject){
// resolve("Hello World")
// })
// const result = await myPromise;
// return result


// }
// console.log(res())   // Output : Promise { <pending> } (Because we have defined the paremeter but we did`t decleare the value True or False)


// //// Dom  /////



function showTime() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ampm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12

    document.getElementById("display-1").innerHTML = h
    document.getElementById("display-2").innerHTML = m
    document.getElementById("display-3").innerHTML = s
    document.getElementById("display-4").innerHTML = ampm
}
setInterval(showTime, 1000)
showTime()

function printer() {
    const res = document.getElementById("about")
    const res2 = res.value
    document.querySelector("#print").append(res2)
}