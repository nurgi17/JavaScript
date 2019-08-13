"use strict";

//TO DO Logic operation ––––––––––––––––––
// let num = 50;
// if (num < 49) {
//     console.log("not right");
// } else if (num > 100) {
//     console.log("too much");
// } else {
//     console.log("It's right bitch!!!");
// };

// (num == 50) ? console.log("It's right bitch!!!") : console.log("not right");

// switch (num) {
//     case num < 49:
//         console.log("not right");
//         break;

//     case num > 100:
//         console.log("too much");
//         break;

//     case num > 80:
//         console.log("too much");
//         break;

//     case 51:
//         console.log("It's right bitch!!!");
//         break;
//     default:
//         console.log("Smth was wrong dude!!!");
//         break;
// }
//Logic operation END ––––––––––––––––––

//Cycles  ––––––––––––––––––
// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num <= 55);

// for (let i = 0; i <= 8; i++) {
//     if (i == 5) {
//         continue;
//     }
//     if (i == 7) {
//         break;
//     }
//     console.log(i);
// }

let money = + prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");



var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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
};

// let i = 0;
// while (i < 2) {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         q2 = + prompt("Во сколько обойдется?", "");

//     if ((typeof (q1)) === 'string' && (typeof (q1)) != null && (typeof (q2)) != null
//         && q1 != '' && q2 != '' && q1.length < 50) {
//         console.log("done");
//         appData.expenses[q1] = q2;
//     } else {
// console.log("Smth was wrong please try again!");
//     i--;
//     }
//     i++;
// };



// let i = 0;
// do {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         q2 = + prompt("Во сколько обойдется?", "");

//     if ((typeof (q1)) === 'string' && (typeof (q1)) != null && (typeof (q2)) != null
//         && q1 != '' && q2 != '' && q1.length < 50) {
//         console.log("done");
//         appData.expenses[q1] = q2;
//     } else {
// console.log("Smth was wrong please try again!");
//     i--;
//     }
//     i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;


// alert("Ваши расходы на один день:" + " " + ((appData.budget - appData.expenses.q22) / 30) + "\n" + "Бюджет:" + " " + appData.budget + "\n" + "Дата:" + " " + appData.timeData + "\n" + "Расходы:" + " " + appData.expenses.q11 + "\n" + "Бюджет на расходы:" + " " + appData.expenses.q22);
alert("Daily budget: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log("Min level of sufficiency");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Ave level of sufficiency");
}
else if (appData.moneyPerDay > 2000) {
    console.log("High level of sufficiency");
}
else {
    console.log("Error please try again");
}












