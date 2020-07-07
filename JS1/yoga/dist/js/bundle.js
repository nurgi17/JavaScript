/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
}
    /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
    /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
  /******/
})
/************************************************************************/
/******/({

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

      if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
          thisArg = thisArg || window;
          for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
          }
        };
      }


      /***/
}),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function (module, exports) {

      function calc() {
        var persons = document.querySelectorAll('.counter-block-input')[0],
          restDays = document.querySelectorAll('.counter-block-input')[1],
          place = document.getElementById('select'),
          totalValue = document.getElementById('total'),
          personsSum = 0,
          daysSum = 0,
          total = 0;
        totalValue.innerHTML = 0;
        persons.addEventListener('change', function (e) {
          personsSum = +this.value;
          total = (daysSum + personsSum) * 4000;

          if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
          } else {
            totalValue.innerHTML = total;
          }
        });
        restDays.addEventListener('change', function (e) {
          daysSum = +this.value;
          total = (daysSum + personsSum) * 4000;

          if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
          } else {
            totalValue.innerHTML = total;
          }
        });
        place.addEventListener('change', function (e) {
          var a = total,
            b = this.options[this.selectedIndex].value;

          if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
          } else {
            totalValue.innerHTML = a * b;
          }
        });
      }

      module.exports = calc;

      /***/
}),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function (module, exports) {

      function modal() {
        desBtn = document.querySelectorAll('.description-btn');
        var more = document.querySelector('.more'),
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

        for (var i = 0; i < desBtn.length; i++) {
          desBtn[i].addEventListener('click', showModal);
        }
      }

      module.exports = modal;

      /***/
}),

/***/ "./src/js/parts/request.js":
/*!*********************************!*\
  !*** ./src/js/parts/request.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function (module, exports) {

      function requestAjax() {
        var message = {
          loading: 'Loading...',
          success: 'Thank you',
          failure: 'Smth was wrong'
        };
        var form = document.querySelector('.main-form'),
          input = form.getElementsByTagName('input'),
          statusMessage = document.createElement('div'),
          contact = document.getElementById('form'),
          inputs = contact.getElementsByTagName('input');

        function requestServer(elem) {
          elem.addEventListener('submit', function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            var formData = new FormData(form);

            function postData(data) {
              return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.open('POST', '../server.php'); //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.onreadystatechange = function () {
                  if (request.readyState < 4) {
                    resolve();
                  } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                      resolve();
                    } else {
                      reject();
                    }
                  }
                };

                request.send(data);
              });
            }

            function clearInput() {
              for (var i = 0; i < input.length; i++) {
                input[i].value = '';
              }
            }

            postData(formData).then(function () {
              return statusMessage.innerHTML = message.loading;
            }).then(function () {
              statusMessage.innerHTML = '';
            }).catch(function () {
              return statusMessage.innerHTML = message.failure;
            }).then(clearInput);
          });
        }

        requestServer(form);
        requestServer(contact);
      }

      module.exports = requestAjax;

      /***/
}),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function (module, exports) {

      function slider() {
        var slideIndex = 1,
          slides = document.querySelectorAll('.slider-item'),
          prev = document.querySelector('.prev'),
          next = document.querySelector('.next'),
          dotsWrap = document.querySelector('.slider-dots'),
          dots = document.querySelectorAll('.dot');
        showSlides(slideIndex);

        function showSlides(n) {
          if (n > slides.length) {
            slideIndex = 1;
          }

          if (n < 1) {
            slideIndex = slides.length;
          }

          slides.forEach(function (item) {
            return item.style.display = 'none';
          }); // for (let i = 0; i < slides.length; i++) {
          //     slides[i].style.display = 'none';
          // }

          dots.forEach(function (item) {
            return item.classList.remove('dot-active');
          });
          slides[slideIndex - 1].style.display = 'block';
          dots[slideIndex - 1].classList.add('dot-active');
        }

        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        function currentSlide(n) {
          showSlides(slideIndex = n);
        }

        prev.addEventListener('click', function (e) {
          plusSlides(-1);
        });
        next.addEventListener('click', function (e) {
          plusSlides(1);
        });
        dotsWrap.addEventListener('click', function (e) {
          for (var i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
              currentSlide(i);
            }
          }
        });
      }

      module.exports = slider;

      /***/
}),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function (module, exports) {

      function tabs() {
        var tab = document.querySelectorAll('.info-header-tab'),
          info = document.querySelector('.info-header'),
          tabContent = document.querySelectorAll('.info-tabcontent'),
          desBtn = document.querySelectorAll('.description-btn');

        function hideTabContent(a) {
          for (var i = a; i < tabContent.length; i++) {
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
          var target = e.target;

          if (target && target.classList.contains('info-header-tab')) {
            for (var i = 0; i < tab.length; i++) {
              if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
              }
            }
          }
        });
      }

      module.exports = tabs;

      /***/
}),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function (module, exports) {

      function timer() {
        var deadline = '2019-10-13';

        function getTimeRemaining(endtime) {
          var t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor(t / 1000 % 60),
            minutes = Math.floor(t / 1000 / 60 % 60),
            // hours = Math.floor(t / (1000 * 60 * 60));
            hours = Math.floor(t / 1000 / 60 / 60 % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));
          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          };
        }

        function setClock(id, endtime) {
          var timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

          function updateClock() {
            var t = getTimeRemaining(endtime);

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
      }

      module.exports = timer;

      /***/
}),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      __webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js"); //ForEach polyfill


      window.addEventListener('DOMContentLoaded', function () {
        'use strict';

        var calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
          modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
          req = __webpack_require__(/*! ./parts/request.js */ "./src/js/parts/request.js"),
          slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
          tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
          timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");

        calc();
        modal();
        req();
        slider();
        tabs();
        timer();
      }); //ForEach polyfill code–––––––––––––––––––––––––
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

      /***/
})

  /******/
});
//# sourceMappingURL=bundle.js.map