;(function () {

    let cardLists = document.querySelectorAll('.card-list'), // Список всех списков (слайдеров) карточек
        cards = document.querySelectorAll('.card-item'), // Список карточек внутри каждого слайдера
        dotsLists = document.querySelectorAll('.dots-list'), // Список всех списков точек
        prev = document.querySelectorAll('.prev'), // Кнопка назад
        next = document.querySelectorAll('.next'), // Кнопка вперед
        cardWidth = 285, // Ширина карточки
        cardCount = 4, // Количество карточек, листаемых за один клик
        position = 0, // Текущий сдвиг влево
        activeDot = 0; // Текущая активная точка

    /* ПЕРЕБОР СПИСКА ВСЕХ СПИСКОВ (СЛАЙДЕРОВ) КАРТОЧЕК */
    cardLists.forEach( (item, index) => {
        prev[index].addEventListener('click', () => {

            if (activeDot > 0) {
                activeDot -= 1;
                position = Math.min(position + cardWidth * cardCount, 0); // Определение новой позиции (сдвига) карточек
                cardLists[index].style.marginLeft = `${position}px`; // Сдвиг карточек

                let dotsListActive = dotsLists[index]; // Определение списка точек, соответствующего текущему сладеру карточек
                let dotsItems = dotsListActive.querySelectorAll('.dots__item'); // Список точек
                
                dotsItems[activeDot - 1].classList.remove('dots__item--active'); // удаление класса у предыдущей точки
                dotsItems[activeDot].classList.add('dots__item--active'); // Добавление класса новой точке
            } 
        });
    
    
        next[index].addEventListener('click', () => {
    
            if (activeDot < cardLists.length - 1) {
                activeDot += 1;
                position = Math.max(position - cardWidth * cardCount, -cardWidth * (cards.length - cardCount) ); // Определение новой позиции (сдвига) карточек
                cardLists[index].style.marginLeft = `${position}px`; // Сдвиг карточек
                
                let dotsListActive = dotsLists[index]; // Определение списка точек, соответствующего текущему сладеру карточек
                let dotsItems = dotsListActive.querySelectorAll('.dots__item'); // Список точек

                dotsItems[activeDot - 1].classList.remove('dots__item--active'); // удаление класса у предыдущей точки
                dotsItems[activeDot].classList.add('dots__item--active'); // Добавление класса новой точке
            } 
        });
    });

    
  

})();


