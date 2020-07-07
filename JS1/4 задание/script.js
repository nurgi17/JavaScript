"use strict";

//-------------- Objects ---------------------
// let option = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(option.name);
// option.bool = false;
// option.colors = {
//     border: "black",
//     bg: "red"
// };
// delete option.bool;

// console.log(option);

// for (let key in option) {
//     console.log('Свойство ' + key + ' имеет значение ' + option[key]);
// }
// console.log(Object.keys(option).length);
//-------------- Objects ---------------------

//-------------- Arrays ---------------------

// arr.pop();//delete from end
// arr.push("5");// add from end
// arr.shift();// delete from beginning
// arr.unshift("1");// add from beginning
// let arr = [1, 2, 3, 4, 5];
// let len = arr.length;

// Cycle ForEach----------------------------------------------------
// arr.forEach(function (item, i, arr1) { 
//     console.log(i + ': ' + item + " (массив: " + arr1 + ')');
// });
// Cycle ForEach----------------------------------------------------

// console.log(arr);

// let mass = [1,3,4,5,7];

// for (let key of mass){
//     console.log(key);
// }
// Split()----------------------------------------------------
// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);

// Join()----------------------------------------------------
// let arr = ["awawsw", "asdsadsa", "cvcxv"],
//     i = arr.join(', ');
// console.log(i);

// Sort()----------------------------------------------------
// let arr = ["awawsw", "asdsadsa", "cvcxv"],
//     i = arr.sort();
// console.log(i);

// Sort() for numbers----------------------------------------------------
// let arr = [1, 19, 3, 6],
//     i = arr.sort(compareNum);
// function compareNum(a, b) {
//     return a - b;
// }
// console.log(arr);




//-------------- Call back function ---------------------
// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) { // callback function
//     console.log("Я учу " + lang);
//     callback();
// }
// function done() {
//     console.log("Я прошел 3й урок");
// }
// learnJS("JavaScript", done);

//-------------- Call back function ---------------------


//OOP -> Object Oriented Programming -----------------------
//Inheritance-----------------------------------------------
// let soldier = {
//     health: 400,
//     armor: 100
// };
// let john = {
//     health: 100
// };

// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);
//Inheritance-----------------------------------------------




let money, time;
function start() {
    money = + prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = + prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,


    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
                q2 = + prompt("Во сколько обойдется?", "");

            if ((typeof (q1)) === 'string' && (typeof (q1)) != null && (typeof (q2)) != null
                && q1 != '' && q2 != '' && q1.length < 50) {
                console.log("done");
                appData.expenses[q1] = q2;
            } else {
                console.log("Smth was wrong please try again!");
                i--;
            }
        }
    },


    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Daily budget: " + appData.moneyPerDay);
    },


    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            alert("Min level of sufficiency");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert("Ave level of sufficiency");
        }
        else if (appData.moneyPerDay > 2000) {
            alert("High level of sufficiency");
        }
        else {
            alert("Error please try again");
        }
    },


    checkSavings: function () {
        if (appData.savings == true) {
            let save = + prompt("Какова сумма накопление?", ""),
                percent = +prompt("Под какой процент?", "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let c1 = prompt("Статья необязательных расходов?", "");

            if ((typeof (c1)) === 'string' && (typeof (c1)) != null
                && c1 != '' && c1.length < 50) {
                console.log("done");
                appData.optionalExpenses[i] = c1;
            } else {
                console.log("Smth was wrong please try again!");
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет доп. доход?(Перечислите черех запятую)", "");

        if (items != null && typeof (items) === 'string' && items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?", ""));
            appData.income.sort();

            appData.income.forEach(function (item, i) {
                alert("Способы доп. заработка: " + (i + 1) + " " + item);
            });
        } else {
            alert("Smth was wrong please try again!");
            appData.chooseIncome();
        }
    },
    allData: function () {
        for (let key in appData) {
            console.log("Keys: " + key + " " + appData[key]);
        }
    }
};

