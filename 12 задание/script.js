/*
    ES6 FORMAT
*/

//Интерполяция –––––––––––––––––––––––––––––––––––––––––––––––––––
let name = 'Ivan',
    age = 30,
    mail = 'ex@mail.ru';

document.write(`User ${name} ${age} years. Mail: ${mail}`);

//–––––––––––––––––––––––––––––––––––––––––––––––––––

//Var let const ––––––––––––––––––––––––––––––––––
function makeArray() {
    var items = [];
    for (let i = 0; i < 10; i++) {
        var item = function () {// if use (var) in cycle (var) created one time than let but this (var) get last result
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

//–––––––––––––––––––––––––––––––––––––––––––––––––––

//Narrow function–––––––––––––––––––––––––––––––––––––––––––––––––––


let fun = () => {
    console.log(this);
};
//fun();


let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => { //hasn't context it's take from parent
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();


let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    };
    show();
});
//–––––––––––––––––––––––––––––––––––––––––––––––––––

//Default values in function–––––––––––––––––––––––––––––––––––––––––––––––––––
function calcOrDouble(number, basis = 2) {
    //basis = basis || 2;// Check the element nothing or smth in variable// ES5 format
    console.log(number * basis);
}
calcOrDouble(3, 5);
calcOrDouble(6);
//–––––––––––––––––––––––––––––––––––––––––––––––––––

//Classes–––––––––––––––––––––––––––––––––––––––––––––––––––
class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10);
console.log(`Area of square = ${square.calcArea()}`);
//–––––––––––––––––––––––––––––––––––––––––––––––––––

//Spread operators it's three dots front of array ...

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'bloger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2, 5, 7];
log(...numbers);
