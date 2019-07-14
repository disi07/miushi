;(function () {

    let accordItems = document.querySelectorAll('.footer__title'),
        active = document.getElementsByClassName('footer__title--active');

    Array.from(accordItems).forEach( item => {
        item.addEventListener('click', function() {
        if (active.length > 0 && active[0] !== this) 
            active[0].classList.remove('footer__title--active'); 
            
            this.classList.toggle('footer__title--active');
        });
    });

})();