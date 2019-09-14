//AJAX
'use strict'
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

function aajax() {
    let request = new XMLHttpRequest();

    //------------method, url,          async,         login, password
    request.open('GET', 'current.json');//default->true
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    return request;
}
function calc(request, currency) {
    if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.response);
        if (currency == 'rub') {
            inputUsd.value = inputRub.value / data.usd;
        } else if (currency == 'usd') {
            inputRub.value = inputUsd.value * data.usd;
        }
    } else {
        input.value = "Smth was wrong!";
    }
}


inputRub.addEventListener('input', () => {

    let request = aajax();
    //status -> 404, 500 and so on 
    //statusText -> OK or NOT FOUND
    //responseText / response
    //readyState
    request.addEventListener('readystatechange', function () {// load
        let cur = 'rub';
        calc(request, cur);
    });
});

inputUsd.addEventListener('input', () => {
    let request = aajax();
    request.addEventListener('readystatechange', function () {
        let cur = 'usd';
        calc(request, cur);
    });
});


