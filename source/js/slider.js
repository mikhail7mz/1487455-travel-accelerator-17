import Swiper from 'swiper';

const INTERACTIVE_ELEMENT_TAGS = 'audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], [href], [tabindex]';

const setTabIndex = (element, isActive) => {
  element.tabIndex = isActive ? 0 : -1;
};

const onInit = (swiper) => {
  const slideElements = swiper.el.querySelectorAll('.swiper-slide');
  slideElements.forEach((slide, index) => {
    const interactiveElements = slide.querySelectorAll(INTERACTIVE_ELEMENT_TAGS);
    interactiveElements.forEach((element) => setTabIndex(element, index === swiper.activeIndex));
  });
};

const onActiveIndexChange = (swiper) => {
  const slideElements = swiper.el.querySelectorAll('.swiper-slide');
  const currentElements = slideElements[swiper.activeIndex].querySelectorAll(INTERACTIVE_ELEMENT_TAGS);
  const previuosElements = slideElements[swiper.previousIndex].querySelectorAll(INTERACTIVE_ELEMENT_TAGS);

  currentElements.forEach((element) => setTabIndex(element, true));
  previuosElements.forEach((element) => setTabIndex(element, false));
};

const initSlider = (querySelector, parameters) => {
  const element = document.querySelector(querySelector);
  const swiperElement = element.querySelector('.swiper');
  parameters.on = parameters.on ? parameters.on : {};
  parameters.on.init = onInit;
  parameters.on.activeIndexChange = onActiveIndexChange;
  const swiper = new Swiper(swiperElement, parameters);
  swiper.init();
};

export {initSlider};
