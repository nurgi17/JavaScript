let nav = document.querySelector('.menu'),
    menuItem = document.createElement('li'),
    title = document.getElementById('title'),
    column = document.getElementsByClassName('column'),
    adv = document.querySelector('.adv'),
    pr = document.getElementById('prompt');

// 1 -------
menuItem.classList.add('menu-item');
menuItem.textContent = 'Пятый пункт';
nav.appendChild(menuItem);
let items = document.querySelectorAll('.menu .menu-item');
nav.insertBefore(items[2], items[1]);
//----------


// 2 -------
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
//----------

// 3 -------
title.innerHTML = 'Мы продаем только <b>подлинную</b> технику Apple';
//----------

// 4 -------
adv.remove();
//----------

// 5 -------
let ans = prompt("Как вам техника apple?", "");
pr.innerHTML = ans;
//----------



console.log(nav);