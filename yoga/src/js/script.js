require('nodelist-foreach-polyfill'); //ForEach polyfill
require('formdata-polyfill');


window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let calc = require('./parts/calc.js'),
        modal = require('./parts/modal.js'),
        req = require('./parts/request.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js');
    calc(); modal(); req(); slider(); tabs(); timer();
});

//ForEach polyfill code–––––––––––––––––––––––––
// if ('NodeList' in window && !NodeList.prototype.forEach) {
//     console.info('polyfill for IE11');
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (var i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }
//ForEach polyfill code END–––––––––––––––––––––––––