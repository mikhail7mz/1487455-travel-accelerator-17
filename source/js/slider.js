import Swiper from 'swiper';

const INTERACTIVE_ELEMENT_TAGS = 'audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], [href], [tabindex]';

const onInteractiveElementFocus = (swiper, index) => {
  if (swiper.activeIndex !== index) {
    swiper.slideTo(index);
  }
};

const observeFocusWithinSlide = (swiper) => {
  const slideElements = swiper.el.querySelectorAll('.swiper-slide');
  slideElements.forEach((slide, index) => {
    const interactiveElements = slide.querySelectorAll(INTERACTIVE_ELEMENT_TAGS);
    interactiveElements.forEach((element) => {
      element.addEventListener('focus', () => onInteractiveElementFocus(swiper, index));
    });
  });
};

const initSlider = (querySelector, parameters) => {
  const element = document.querySelector(querySelector);
  const swiperElement = element.querySelector('.swiper');
  const swiper = new Swiper(swiperElement, parameters);
  swiper.init();
};

export {initSlider, observeFocusWithinSlide};
