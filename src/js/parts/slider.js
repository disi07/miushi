;(function () {

  let activeIndex = 0;
  let slides = document.querySelectorAll('.slide');
  let sliderDots = document.querySelectorAll('.slider-dots__item');
  let sliderPrev = document.querySelector('.slider-arrows--left');
  let sliderNext = document.querySelector('.slider-arrows--right');
  let slideDuration = 5000;
  let timer;

  function changeSlide() {
    clearInterval(timer);
    slides.forEach( (item, index) => {
        if (index === activeIndex) {
            item.style.display = 'block';
            sliderDots[index].classList.add('slider-dots__item--active');
        } else {
            item.style.display = 'none';
            sliderDots[index].classList.remove('slider-dots__item--active');
        }
    });
    timer = setInterval( () => {
        sliderNext.click();
    }, slideDuration);
  };

  sliderNext.addEventListener('click', () => {
    activeIndex++;
    if (activeIndex === slides.length) {
        activeIndex = 0;
    }
    changeSlide();
  });

  sliderPrev.addEventListener('click', () => {
    if (activeIndex === 0) {
        activeIndex = slides.length;
    }
    activeIndex--;
    changeSlide();
  });

  sliderDots.forEach( (item, index) => {
    item.addEventListener('click', () => {
      activeIndex = index;
      changeSlide();
    });
  });

  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') {
        sliderPrev.click();
    }
    if (e.key === 'ArrowRight') {
        sliderNext.click();
    }
  });

  sliderNext.addEventListener('mouseenter', (e) => {
    clearInterval(timer);
  });

  sliderNext.addEventListener('mouseleave', (e) => {
    setInterval(timer);
    changeSlide()
  });

  sliderPrev.addEventListener('mouseenter', (e) => {
    clearInterval(timer);
  });

  sliderPrev.addEventListener('mouseleave', (e) => {
    setInterval(timer);
    changeSlide()
  });

  timer = setInterval( () => {
    sliderNext.click();
  }, slideDuration);

  changeSlide();

})();