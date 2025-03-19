///////////////////////////////// Day 15 /////////////////////////////////////////////

// Create Objects using with function cunstructor

// This : it will take the argument values and it will make the new object

// function car(make, model, year){
// this.make = make;
// this.model = model;
// this.year = year
// }
// var car1 = new car("Eagle", "Talon TSI" , 1993)
// console.log(car1)  // Output : car { make: 'Eagle', model: 'Talon TSI', year: 1993 }

// Create Objects using with Class cunstructor

// class Ractangle{
//     constructor(height, width){
//         this.height = height;
//         this.width = width
//     }

// }
// const square = new Ractangle(10,10)
// console.log(square)  // Output : Ractangle { height: 10, width: 10 }

// *Object.Keys
// const user = {
//     a : "student",
//     b : 42
// }
// console.log(Object.keys(user))  // Output : [ 'a', 'b' ]



// *Object.Values
// const user = {
//     a : "student",
//     b : 42
// }
// console.log(Object.values(user))   // Output : [ 'student', 42 ]
// console.log(user.b)  // Output : 42 (Only particular value )


//////////////  Call , Apply and Bind in Js-Apply   ///////////////////

// *Call : Call invokes the function and allow you to pass in arguments one by one.
// var person1 = {
//     firstName : "Vishu",
//     lastName : "Gupta"
// }
// function test(greeting , year){
// console.log(greeting + " " + this.firstName + " "+ this.lastName + " " + year)
// }
// test.call(person1, 'Hello')   // Output : Hello Vishu Gupta undefined (we can`t pass the above the 1 argument)


// *Apply : Apply invokes the function and allow you to pass in arguments as an array

// var person1 = {
//     firstName : "Vishu",
//     lastName : "Gupta"
// }
// function test(greeting , year){
// console.log(greeting + " " + this.firstName + " "+ this.lastName + " " + year)
// }
// test.apply(person1,['Hello', 2025] ) // Output : Hello Vishu Gupta 2025 (when wnat want to add another argument then we will have to use apply keyWord)


// *Bind : returns a new function, allowing you to pass in a this array and any number of arguments

// var person1 = {
//     firstName : "Vishu",
//     lastName : "Gupta"
// }
// function test(greeting , year){
// console.log(greeting + " " + this.firstName + " "+ this.lastName + " " + year)
// }

// var  user = test.bind(person1)
// user("Hello", 2025)  // Output : Hello Vishu Gupta 2025


// Question : Create a object using function and class constructor both, and give two properties to it name and age

// 1st Answer: by the use class

// class about {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }
// var about1 = new about("Vishu", 20)
// console.log(about1)  // Output : about { name: 'Vishu', age: 20 }

// 2nd Answer:   by the use function
// function about3(name, age) {
//     this.name = name
//     this.age = age
// }
// let about4 = new about3("Vishu", 20)
// console.log(about4)  // Output : about3 { name: 'Vishu', age: 20 }


///////////////   Class in Object    ///////////////////////////////////////////////////////////

// class info{

//     submit(){
//         alert(this.name + " "+ ":Your Form is Submitted with this Train No.:" +" "+ this.trainInfo)
//     }
//     Cancel(){
//         alert(this.name+" "+":Your Form is Cancelled with this Train No.:"+" "+ this.trainInfo)
//     }
// fill(name, trainInfo){
// this.name = name
// this.trainInfo = trainInfo
// }
// }

// // Create a Info
// let vishuForm = new info()

// // Fill the form with Vishu Details
// vishuForm.fill("Vishu", 12423)

// let kishanForm = new info()
// let kishanForm2 = new info()

// // Fill the form with Vishu Details
// kishanForm.fill("Kishan", 143256)
// kishanForm.fill("Kishan", 12423)

//  vishuForm.submit()
//  kishanForm.submit()
//  kishanForm.Cancel()
//  kishanForm2.submit()
