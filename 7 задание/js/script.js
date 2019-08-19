'use strict'
let startCalc = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    exItems = document.getElementsByClassName('expenses-item'),
    exBtn = document.getElementsByTagName('button')[0],
    opExBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],


    opExItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIn = document.querySelector('.choose-income'),
    checkS = document.querySelector('#savings'),
    chooseS = document.querySelector('.choose-sum'),
    chooseP = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    // let money, time;
// function start() {
//     money = + prompt("Ваш бюджет на месяц?", "");
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");

//     while (isNaN(money) || money == "" || money == null) {
//         money = + prompt("Ваш бюджет на месяц?", "");
//     }
// }
// start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true,


//     chooseExpenses: function () {
//         for (let i = 0; i < 2; i++) {
//             let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//                 q2 = + prompt("Во сколько обойдется?", "");

//             if ((typeof (q1)) === 'string' && (typeof (q1)) != null && (typeof (q2)) != null
//                 && q1 != '' && q2 != '' && q1.length < 50) {
//                 console.log("done");
//                 appData.expenses[q1] = q2;
//             } else {
//                 console.log("Smth was wrong please try again!");
//                 i--;
//             }
//         }
//     },


//     detectDayBudget: function () {
//         appData.moneyPerDay = (appData.budget / 30).toFixed();
//         alert("Daily budget: " + appData.moneyPerDay);
//     },


//     detectLevel: function () {
//         if (appData.moneyPerDay < 100) {
//             alert("Min level of sufficiency");
//         } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//             alert("Ave level of sufficiency");
//         }
//         else if (appData.moneyPerDay > 2000) {
//             alert("High level of sufficiency");
//         }
//         else {
//             alert("Error please try again");
//         }
//     },


//     checkSavings: function () {
//         if (appData.savings == true) {
//             let save = + prompt("Какова сумма накопление?", ""),
//                 percent = +prompt("Под какой процент?", "");

//             appData.monthIncome = save / 100 / 12 * percent;
//             alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//         }
//     },
//     chooseOptExpenses: function () {
//         for (let i = 0; i < 3; i++) {
//             let c1 = prompt("Статья необязательных расходов?", "");

//             if ((typeof (c1)) === 'string' && (typeof (c1)) != null
//                 && c1 != '' && c1.length < 50) {
//                 console.log("done");
//                 appData.optionalExpenses[i] = c1;
//             } else {
//                 console.log("Smth was wrong please try again!");
//                 i--;
//             }
//         }
//     },
//     chooseIncome: function () {
//         let items = prompt("Что принесет доп. доход?(Перечислите черех запятую)", "");

//         if (items != null && typeof (items) === 'string' && items != '') {
//             appData.income = items.split(', ');
//             appData.income.push(prompt("Может что-то еще?", ""));
//             appData.income.sort();

//             appData.income.forEach(function (item, i) {
//                 alert("Способы доп. заработка: " + (i + 1) + " " + item);
//             });
//         } else {
//             alert("Smth was wrong please try again!");
//             appData.chooseIncome();
//         }
//     },
//     allData: function () {
//         for (let key in appData) {
//             console.log("Keys: " + key + " " + appData[key]);
//         }
//     }
// };




