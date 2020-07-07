//Standard ES5 ——————————————————————————————
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hello ' + this.name);
//     };
// }

// User.prototype.exit = function (name) {
//     console.log('User ' + this.name + ' left');
// };

// let ivan = new User('Ivan', 12),
//     alex = new User('Alex', 23);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

//Standard ES5 creating classes,constructors,methods——————————————————————————————

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

//Standard ES6 creating classes,constructors,methods——————————————————————————————
// 'use strict';
// class User1 {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log('Hello! ${this.name}');
//     }
//     exit() {
//         console.log('User! ${this.name} left');
//     }
// }

// let ivan1 = new User1('Ivan1', 13),
//     alex1 = new User1('Alex1', 24);
// console.log(ivan1);
// console.log(alex1);

// ivan1.hello();
// alex1.hello();

//Standard ES6 creating classes,constructors,methods——————————————————————————————

// 'use strict';
// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// let user = {
//     name: 'John'
// };
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }
// console.log(sayName.call(user, 'Newman'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

// let btn = document.querySelector('button');
// btn.addEventListener('click', function (e) {
//     console.log(this);
//     this.style.backgroundColor = 'red';
//     function showThis() {
//         console.log(this);
//     }
//     showThis();
// });

//1-> Просто вызов функции вывод:-> window or undefined
//2-> Метод объекта - this = объекту
//3-> Конструктор (new) - this = новый созданный объект
//4-> Указание конкретнего контекста - call(), apply(), bind()




let age = document.getElementById('age');

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ['Ussen', 'Nurgissa']);