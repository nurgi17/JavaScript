//Encapsulation–––––––––––––––––––––––––––––––––––

// function User(name, age) {
//     this.name = name;
//     // this.age = age;
//     let userAge = age;

//     this.say = function () {
//         console.log(`Name of user ${this.name}, age: ${userAge}`);
//     };
//     this.getAge = function () {
//         return userAge;
//     };
//     this.setAge = function (age) {
//         if (typeof (age) === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log("NaN");
//         }
//     };
// }
// let ivan = new User('Ivan', 29);
// console.log(ivan.name);
// console.log(ivan.age);
// console.log(ivan.getAge());
// ivan.setAge(35);
// console.log(ivan.getAge());
// ivan.say();
//Encapsulation END–––––––––––––––––––––––––––––––––––


//Modals–––––––––––––––––––––––––––––––––––––––

//1 version
// let number = 1;

// (function () { // Moduls creating anonym function 
//     let number = 2;
//     console.log(number);

//     return console.log(number + 3);
// }())

// console.log(number);


// //2 version
// let user = (function () {// Moduls object interface
//     let private = function () {
//         console.log("I'm private");
//     };
//     return {
//         sayHello: function () {
//             console.log('Hello!');
//         }
//     };
// }())
// console.log(user);
// console.log(user.sayHello());

// //3 version

// let user1 = (function () {
//     let private = function () {
//         console.log("I'm private");
//     };
//     let sayHello = function () {
//         console.log('Hello!');
//     };
//     return {
//         sayHello: sayHello
//     };
// }())
// console.log(user1);
// console.log(user1.sayHello());

//Modals END–––––––––––––––––––––––––––––––––––––––