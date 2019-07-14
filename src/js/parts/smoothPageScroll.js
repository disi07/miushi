;(function () {

    const burger = document.getElementById('menu__button'), // Бургер мобильного меню
          menu = document.querySelector('.nav'), // Меню
          dropDownMenuToggle = document.getElementById('dropDownMenuToggle'), // Элемент, открывающий подменю
          dropDownMenu = document.querySelector('.dropdown-menu'); // Подменю
          dropDownMenuLink = document.querySelectorAll('.dropdown-menu__link'); // Список ссылок подменю
          width = window.screen.availWidth; // Доступная ширина экрана

    /* ФУНКЦИЯ ОТКРЫТИЯ ПОДМЕНЮ */
    const dropDownMenuFunc = () => {
        dropDownMenu.classList.toggle('dropdown-menu--active');
    };

    /* ФУНКЦИЯ ЗАКРЫТИЯ ВСЕХ МЕНЮ, ПОДМЕНЮ И БУРГЕРА */
    const closeAllMenus = () => {
        dropDownMenu.classList.remove('dropdown-menu--active');
        burger.classList.remove('active');
        menu.classList.remove('nav--active');
        document.body.classList.remove('body-no-scroll');
    };

    /* ОТСЛЕЖИВАНИЕ ТЕКУЩЕГО РАЗМЕРА ЭКРАНА */
    window.addEventListener('resize', () => {
        width = window.screen.availWidth;
        width = width < 1170 ? true : false; // Доступный размер экрана не должен превышать 1170 px
            
        if (!width) { // Закрытие подменю, бургера и мобильного меню при ширине экрана выше установленной
            closeAllMenus();
        }
    });

    /* АКТИВАЦИЯ ФУНКЦИИ ПО КЛИКУ НА  ЭЛЕМЕНТ, ОТКРЫВАЮЩИЙ ПОДМЕНЮ */
    dropDownMenuToggle.addEventListener('click', () => {
        dropDownMenuFunc();
    });

    /* ЗАПУСК ФУНКЦИИ ОТКРЫТИЯ МОБИЛЬНОГО МЕНЮ ПРИ КЛИКЕ НА ГАМБУРГЕР */
    burger.addEventListener('click', e => {
        e.preventDefault();
        burger.classList.toggle('active');
        menu.classList.toggle('nav--active');
        document.body.classList.toggle('body-no-scroll');
    });

    /* ФУНКЦИЯ ПЛАВНОЙ ПРОКРУТКИ ЭКРАНА */
    
    function animate(draw, duration) {
        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            let timePassed = time - start;

            if (timePassed > duration) {
                timePassed = duration;
            }
            draw(timePassed);

            if (timePassed < duration) {
                requestAnimationFrame(animate);
            }
        });
    };

    let navigation = document.getElementsByTagName('nav')[0];

    navigation.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target;
        if (target != dropDownMenuToggle) { // Запуск прокрутки, если клик был не по элементу, открывающему подменю
            closeAllMenus();// Закрытие подменю, бургера и мобильного меню при ширине экрана выше установленной

            animate(function(timePassed) {
                let section = document.getElementById(target.getAttribute('href').slice(1));
                    window.scrollBy(0, section.getBoundingClientRect().top / 15 - 1);
    
            }, 1200);
        }
    });

})();