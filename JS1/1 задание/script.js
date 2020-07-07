"use strict";

// var number = 5;
// var string = "Hello world!";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};
// console.log(4 / 0);
// console.log('string' * 9);
// let smth;
// console.log(smth);

// var person = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
// console.log(person["name"]);

// let arr = ['plum.png', 'hey.jpg', 'apple.bmp'];
// console.log(arr[1]);
// alert("Hello World!");
// let answer = confirm("R u ok?");
// let answer1 = prompt("R u ok?", "yeah");
// console.log(typeof (null));

// console.log("hey"+"\n"+"\tno");

// let incr = 10, decr = 10;
// incr++; decr--;
// console.log((5 % 2) + "\t" + ("2" === 2));
// let a = true, b = false;
// console.log(a && !b + "\n" + a || b);

let money = + prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    q2 = + prompt("Во сколько обойдется?", "");


var appData = {
    budget: money,
    timeData: time,
    expenses: {
        q11: q1,
        q22: q2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert("Ваши расходы на один день:" + " " + ((appData.budget - appData.expenses.q22) / 30) + "\n" + "Бюджет:" + " " + appData.budget + "\n" + "Дата:" + " " + appData.timeData + "\n" + "Расходы:" + " " + appData.expenses.q11 + "\n" + "Бюджет на расходы:" + " " + appData.expenses.q22);










