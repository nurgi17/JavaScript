window.addEventListener('DOMContentLoaded', function (e) {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        desBtn = document.querySelectorAll('.description-btn');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    //——————————————————————————————————————————————————————————————————————————————

    //Timer
    let deadline = '2019-09-20';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            // hours = Math.floor(t / (1000 * 60 * 60));
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }
            days.textContent = addZero(t.days) + 'd';
            hours.textContent = addZero(t.hours) + 'h';
            minutes.textContent = addZero(t.minutes) + 'm';
            seconds.textContent = addZero(t.seconds) + 's';

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00d';
                hours.textContent = '00h';
                minutes.textContent = '00m';
                seconds.textContent = '00s';
            }
        }
    }
    setClock('timer', deadline);


    // Modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showModal() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    }

    more.addEventListener('click', showModal);
    close.addEventListener('click', closeModal);
    for (let i = 0; i < desBtn.length; i++) {
        desBtn[i].addEventListener('click', showModal);
    }



    let message = {
        loading: 'Loading...',
        success: 'Thank you',
        failure: 'Smth was wrong'
    };
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contact = document.getElementById('form'),
        inputs = contact.getElementsByTagName('input');

    function requestServer() {

        let request = new XMLHttpRequest();
        request.open('POST', '../server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        let formData = new FormData(form);

        let obj = {};

        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
    }


    statusMessage.classList.add('status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.appendChild(statusMessage);
        requestServer();
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    contact.addEventListener('submit', function (e) {
        e.preventDefault();
        contact.appendChild(statusMessage);
        requestServer();

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    });

});