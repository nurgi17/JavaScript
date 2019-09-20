//JQuery–––––––––––––––––––––––––––––––––––
$(document).ready(function () {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function () {
        $('.image:even').fadeToggle('slow');
    });
    $('.list-item:eq(4)').on('click', function () {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
});

// document.querySelectorAll('.list-item').forEach();
//.classList
//addEventListener
//$.ajax - fetch
//animations
//JQuery END –––––––––––––––––––––––––––––––––––

//SPA -> Single Page Application–––––––––––––––––––––––––––––––––––

    //Angular Framework––––––––––––––––––
    //1. Download node.js
    //2. Working with npm
    //3. Studying TypeScript
    //4. Webpack
    //5. Studying MVC-> Modal View Controller
    //6. Studying and Working Angular
    //Angular END ––––––––––––––––––

    //React Library––––––––––––––––––––
    //1. Download node.js
    //2. Working with npm
    //3. Working with Babel.js Compiler
    //4. JSX preprocessor 
    //5. Studying and Working React.js
    //React END––––––––––––––––––––

    //Vue.js Library–––––––––––––––––––
    //1. Download node.js
    //2. Working with npm
    //3. Working with Babel.js Compiler
    //4. Webpack
    //Vue.js Library END–––––––––––––––––––

