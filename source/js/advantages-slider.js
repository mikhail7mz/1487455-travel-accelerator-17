import { initSlider } from './slider';
import { Navigation } from 'swiper/modules';

const parameters = {
  enabled: false,
  loop: true,
  loopAddBlankSlides: false,
  slidesPerView: 1,
  slidesPerGroup: 2,
  slidesPerGroupSkip: 2,
  allowTouchMove: false,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.advantages [data-next]',
    prevEl: '.advantages [data-prev]',
    disabledClass: 'disabled',
  },
  slideClass: 'advantages__slider-item',
  wrapperClass: 'advantages__slider-list',
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      enabled: true,
      initialSlide: 1,
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
};

const initAdvantagesSlider = () => initSlider('[data-advantages-slider]', parameters);

export {initAdvantagesSlider};
