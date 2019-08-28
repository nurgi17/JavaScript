// let btn = document.querySelectorAll('button'),
//     wrap = document.querySelector('.wrapper'),
//     link = document.querySelector('a');
// // btn[0].onclick = function () {
// //     alert("You've pressed first button!");
// // };
// btn[0].addEventListener('click', function (e) {
//     // console.log(e);
//     // let target = e.target;
//     // target.style.display = 'none';
//     console.log('Произощло событие: ' + e.type + ' на элементе'
//         + e.target);
// });

// wrap.addEventListener('click', function (e) {
//     console.log('Произощло событие: ' + e.type + ' на элементе'
//         + e.target);
// });

// link.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('Произощло событие: ' + e.type + ' на элементе '
//         + e.target);
// });
// btn.forEach(function (items) {
//     items.addEventListener('mouseleave', function (e) {
//         console.log('you r leave');
//     });
// });

// btn[0].addEventListener('mouseenter', function () {
//     alert('Hey');
// });


//Mobile events---------------------------------
//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

// window.addEventListener('DOMContentLoaded', function (e) {
//     let box = document.querySelector('.wrapper #btn');


    // box.addEventListener('touchstart', function (e) {
    //     e.preventDefault();
    //     console.log('Btn: touchstart');
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    // box.addEventListener('touchmove', function (e) {
    //     e.preventDefault();
    //     console.log('Btn: touchmove ' + e.touches[0].pageX);
    // });

    // box.addEventListener('touchend', function (e) {
    //     e.preventDefault();
    //     console.log('Btn: touchend');
    //     console.log(e.touches);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    //Регулярные выражения--------------------------------------
    // new RegExp('pattern', 'flags');
    // /pattern/flags
    // let ans = prompt("Введите ваше имя");
    // let reg = /n/gi;

    // console.log(ans.search(reg));
    // console.log(ans.match(reg));
    // console.log(reg.test(ans));
    //Flags-----------
    //i, g, m
    // \d \D
    // \w \W
    // \s \S

    // let pass = prompt('Password');
    // console.log(pass.replace(/./g, "*"));
    // alert('12-34-56'.replace(/-/g, ':'));

    // let ans = prompt("Введите число");
    // let reg = /\d/g;
    // console.log(ans.match(reg));

    // let str = 'My name is/ R2D2';
    // console.log(str.match(/\w\d\w\d/i));
    // console.log(str.match(/\//i));
// });
