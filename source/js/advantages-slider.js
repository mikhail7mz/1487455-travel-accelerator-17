import { initSlider } from './slider';
import { Navigation } from 'swiper/modules';

const sliderElement = document.querySelector('[data-advantages-slider] .advantages__slider');
const sliderListElement = sliderElement.querySelector('.advantages__slider-list');
const slideElements = Array.from(sliderListElement.children);
const desktopMediaQuery = window.matchMedia('(min-width: 1440px)');

const addAdditionalSlides = (slides) => {
  slides.forEach((slide) => {
    const slideElement = slide.cloneNode(true);
    slideElement.ariaHidden = true;
    sliderListElement.append(slideElement);
  });
};

const removeAdditionalSlides = (listElement) => {
  const slides = listElement.querySelectorAll('.advantages__slider-item[aria-hidden]');
  slides.forEach((slide) => slide.remove());
};

const onMediaQueryChange = (event) => {
  if (event.matches) {
    addAdditionalSlides(slideElements);
  } else {
    removeAdditionalSlides(sliderListElement);
  }
};

const onBeforeInit = () => {
  if (slideElements.length >= 3) {
    sliderElement.classList.add('advantages__slider--wide');
  }

  if (slideElements.length % 2 === 0) {
    return;
  }

  if (desktopMediaQuery.matches) {
    addAdditionalSlides(slideElements);
  }

  desktopMediaQuery.addEventListener('change', onMediaQueryChange);
};

const parameters = {
  enabled: false,
  loop: false,
  loopAddBlankSlides: false,
  initialSlide: 0,
  slidesPerView: 1,
  slidesPerGroup: 2,
  spaceBetween: 0,
  allowTouchMove: false,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.advantages [data-next]',
    prevEl: '.advantages [data-prev]',
    disabledClass: 'disabled',
  },
  slideClass: 'advantages__slider-item',
  wrapperClass: 'advantages__slider-list',
  on: {
    beforeInit: onBeforeInit,
  },
  breakpoints: {
    768: {
      enabled: false,
      loop: false,
      initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1440: {
      enabled: true,
      loop: true,
      initialSlide: 1,
      slidesPerView: 'auto',
      spaceBetween: 30,
    }
  },
};

const initAdvantagesSlider = () => initSlider('[data-advantages-slider]', parameters);

export {initAdvantagesSlider};
