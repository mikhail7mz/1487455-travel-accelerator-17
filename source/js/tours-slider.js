import { initSlider } from './slider';
import { Navigation } from 'swiper/modules';

const parameters = {
  spaceBetween: 15,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.tours [data-next]',
    prevEl: '.tours [data-prev]',
    disabledClass: 'disabled',
  },
  breakpoints: {
    768: {
      spaceBetween: 18,
      slidesPerView: 2,
    },
    1440: {
      spaceBetween: 30,
      slidesPerView: 3,
      allowTouchMove: false,
    }
  },
};

const initToursSlider = () => initSlider('[data-tours-slider]', parameters);

export {initToursSlider};
