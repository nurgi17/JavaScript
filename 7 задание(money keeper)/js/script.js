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


let money, time;
startCalc.addEventListener('click', function (e) {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = + prompt("Ваш бюджет на месяц?", "");


    while (isNaN(money) || money == "" || money == null) {
        money = + prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    exBtn.disabled = false;
    opExBtn.disabled = false;
    countBtn.disabled = false;
});

exBtn.addEventListener('click', function (e) {
    let sum = 0;
    for (let i = 0; i < exItems.length; i++) {
        let q1 = exItems[i].value,
            q2 = exItems[++i].value;

        if ((typeof (q1)) === 'string' && (typeof (q1)) != null && (typeof (q2)) != null
            && q1 != '' && q2 != '' && q1.length < 50) {
            console.log("done");
            appData.expenses[q1] = q2;
            sum += +q2;
        } else {
            console.log("Smth was wrong please try again!");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

opExBtn.addEventListener('click', function (e) {
    for (let i = 0; i < opExItems.length; i++) {
        let c1 = opExItems[i].value;
        appData.optionalExpenses[i] = c1;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function (e) {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Min level of sufficiency";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Ave level of sufficiency";
        }
        else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "High level of sufficiency";
        }
        else {
            levelValue.textContent = "Error please try again";
        }
    } else {
        dayBudgetValue.textContent = "Error please press the count";
    }
});

chooseIn.addEventListener('input', function (e) {
    let items = chooseIn.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkS.addEventListener('click', function (e) {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseS.addEventListener('input', function (e) {
    if (appData.savings == true) {
        calculus();
    }
});

chooseP.addEventListener('input', function (e) {
    if (appData.savings == true) {
        calculus();
    }
});

function calculus() {
    let sum = +chooseS.value,
        percent = +chooseP.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};




