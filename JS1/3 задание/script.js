"use strict";

// function showFirstMessage(text) {
//     alert(text);

// }

// showFirstMessage("Hello World!");

// let calc = function(a, b) { // function expression
//     return (a + b);
// }
// let calc = (a, b) => a + b;// new function standard ES6

// console.log(calc(5, 15));

// function retVar() { // function declaration
//     let num = 50;
//     return num;
// }
// let another = retVar();
// console.log(another);

// let str = "tEsT";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));
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
    savings: true
};

function chooseExpenses() {
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
}
chooseExpenses();

function chooseOptExpenses() {
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
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    return appData.moneyPerDay;
}
alert("Daily budget: " + detectDayBudget());

function detectLevel() {
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
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = + prompt("Какова сумма накопление?", ""),
            percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();