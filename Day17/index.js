///////////////////////////////////   Day 17   ///////////////////////////////////////////////////////////

/////////// API`s  /////////////////////////////////

// fetch:

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data)
//         const userName = data.map(user => user.username)
//         console.log(userName)  // Only we fatch usernames
//     })
//     .catch(err => {
//         console.log(err)
//     })   


// When we use Async and Await Then we use try and catch function.
// async function showData() {
//     console.log("I am Developer")
//     const res = await fetch("https://jsonplaceholder.typicode.com/users",
//         console.log("Response is Recived"))

//     const user = await res.json()
//     console.log("Users Data is Here")
//     return user
// }
// showData()

show('https://jsonplaceholder.typicode.com/users')
async function show(file) {
    let a = await fetch(file)
    let b =await a.text()

    document.getElementById("Param").innerHTML = b
}
