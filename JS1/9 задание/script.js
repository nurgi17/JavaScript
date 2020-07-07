'use strict';

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello World!');
// }

// let timerId = setTimeout(function log() {
//     console.log("Hello");
//     setTimeout(log, 2000);
// });


// let btn = document.querySelector('.btn'),
//     elem = document.querySelector('.box');

// function myAnimation() {
//     let pos = 0;

//     let id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);


// let btnBlock = document.querySelector('.btn-clock'),
//     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function (e) {//делигирования события
//     if (e.target && e.target.matches('button.first')) {
//         console.log('Hello');
//     }
// });

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// let box = document.querySelector('.box'),
//     btn = document.querySelector('button');

// //You can't change
// // let width = box.clientWidth,
// //     height = box.clientHeight;

// // let width = box.offsetWidth,
// //     height = box.offsetHeight;

// let width = box.scrollWidth,
//     height = box.scrollHeight;
// //You can't change

// console.log(box.getBoundingClientRect());// .left, .right, .top, .bottom, .height, .width, .x, .y
// console.log(width);
// console.log(height);
// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollTop);

// btn.addEventListener('click', function (e) {
//     // box.style.height = box.scrollHeight + 'px';
//     box.scrollTop = 0;// you can change
// });

// scrollBy(0, 200);// x, y
// scrollTo(0, 200);