import { initSlider, observeFocusWithinSlide } from './slider';
import { Navigation } from 'swiper/modules';

const parameters = {
  spaceBetween: 15,
  initialSlide: 2,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.training [data-next]',
    prevEl: '.training [data-prev]',
    disabledClass: 'disabled',
  },
  on: {
    init: observeFocusWithinSlide,
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
      initialSlide: 0,
      slidesPerView: 3,
    },
    1440: {
      spaceBetween: 20,
      initialSlide: 0,
      slidesPerView: 4,
      allowTouchMove: false,
    }
  },
};

const initTrainingSlider = () => initSlider('[data-training-slider]', parameters);

export {initTrainingSlider};
