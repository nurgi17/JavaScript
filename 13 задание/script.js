// //AJAX
'use strict'
// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// function aajax() {
//     let request = new XMLHttpRequest();

//     //------------method, url,          async,         login, password
//     request.open('GET', 'current.json');//default->true
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
//     return request;
// }
// function calc(request, currency) {
//     if (request.readyState === 4 && request.status === 200) {
//         let data = JSON.parse(request.response);
//         if (currency == 'rub') {
//             inputUsd.value = inputRub.value / data.usd;
//         } else if (currency == 'usd') {
//             inputRub.value = inputUsd.value * data.usd;
//         }
//     } else {
//         input.value = "Smth was wrong!";
//     }
// }


// inputRub.addEventListener('input', () => {
//     let request = aajax();
//     //status -> 404, 500 and so on 
//     //statusText -> OK or NOT FOUND
//     //responseText / response
//     //readyState
//     request.addEventListener('readystatechange', function () {// load
//         let cur = 'rub';
//         calc(request, cur);
//     });
// });

// inputUsd.addEventListener('input', () => {
//     let request = aajax();
//     request.addEventListener('readystatechange', function () {
//         let cur = 'usd';
//         calc(request, cur);
//     });
// });



//With ES6 Promises 
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

function catchData() {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', 'current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.onload = function () {
            if (request.readyState === 4) {
                if (request.status == 200) {
                    resolve(this.response);
                }
                else {
                    reject();
                }
            }
        };
    });
}

inputRub.addEventListener('input', () => {
    catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .then(() => console.log(5000))
        .catch(() => inputUsd.value = "Smth was wrong!!!");
});

inputUsd.addEventListener('input', () => {
    catchData()
        .then(response => {
            let data = JSON.parse(response);
            inputRub.value = inputUsd.value * data.usd;
        })
        .catch(() => inputUsd.value = "Smth was wrong!!!");
});