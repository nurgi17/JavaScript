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