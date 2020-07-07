"use strict";

// console.log(typeof (String(4)));// old version to String

// console.log(typeof ("" + false));// concatenation
// console.log('https://vk.com/catalog/' + 5);

// // to Number 
// // 1)
// console.log(typeof (Number('5')));
// console.log(typeof (+'5'));
// console.log(typeof (parseInt('15px', 10)));

// let ans = +prompt("Hello", "");

// //0, '', null, undefined, NaN -> false

// let switcher = null;

// if (switcher) {
//     console.log("Working..");
// }
// switcher = 1;

// if (switcher) {
//     console.log("Working..");
// }
// // to Boolean
// console.log(typeof (Boolean('5')));
// console.log(typeof ((!!'5')));

//--------------------------------------------------------------------------------------------------------------------------------
//Action with tags in page
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = '#2bc405';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function (item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });


let div = document.createElement('div'),
    text = document.createTextNode('I was there');

div.classList.add('black');
// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello World!</h1>';
div.textContent = 'Hello world!';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);
console.log(div);
//--------------------------------------------------------------------------------------------------------------------------------





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




