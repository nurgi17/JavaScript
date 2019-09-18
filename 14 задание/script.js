// //ES6 Promise technology
// let drink = 0;
// function shoot(arrow, headshot, fail) {
//     console.log('You did a shot...');

//     setTimeout(function () {
//         Math.random() > .5 ? headshot({}) : fail("You shot was not right way!");

//     }, 3000);
// }
// function win() {
//     console.log("You win!!!");
//     (drink == 1) ? buyBear() : giveMoney();
// }
// function lose() {
//     console.log("You lose!!!");
// }
// function buyBear() {
//     console.log("Bear bought for you!!!");
// }
// function giveMoney() {
//     console.log("You take a money!!!");
// }
// shoot({},
//     function (mark) {
//         console.log('You shot was a right way!!!');
//         win(mark, buyBear, giveMoney);
//     },
//     function (miss) {
//         console.log(miss);
//         lose();
//     }
// );

//ES6 Promise technology
let drink = 0;
function shoot(arrow) {
    console.log('You did a shot...');
    let promise = new Promise(function (resolve, reject) {//Creating Promise
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject("You shot was not right way!");
        }, 3000);
    });
    return promise;
}
function win() {
    console.log("You win!!!");
    (drink == 1) ? buyBear() : giveMoney();
}
function lose() {
    console.log("You lose!!!");
}
function buyBear() {
    console.log("Bear bought for you!!!");
}
function giveMoney() {
    console.log("You take a money!!!");
}
shoot({})
    .then(mark => console.log('You shot was a right way!!!'))
    .then(win)
    .catch(lose);