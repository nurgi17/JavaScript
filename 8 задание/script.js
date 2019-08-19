let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');
// btn[0].onclick = function () {
//     alert("You've pressed first button!");
// };
btn[0].addEventListener('click', function (e) {
    // console.log(e);
    // let target = e.target;
    // target.style.display = 'none';
    console.log('Произощло событие: ' + e.type + ' на элементе'
        + e.target);
});

wrap.addEventListener('click', function (e) {
    console.log('Произощло событие: ' + e.type + ' на элементе'
        + e.target);
});

link.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Произощло событие: ' + e.type + ' на элементе '
        + e.target);
});
btn.forEach(function (items) {
    items.addEventListener('mouseleave', function (e) {
        console.log('you r leave');
    });
});

// btn[0].addEventListener('mouseenter', function () {
//     alert('Hey');
// });