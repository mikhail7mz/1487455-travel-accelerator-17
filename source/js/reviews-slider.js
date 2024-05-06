import { initSlider } from './slider';
import { Navigation } from 'swiper/modules';

const parameters = {
  spaceBetween: 30,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.reviews [data-next]',
    prevEl: '.reviews [data-prev]',
    disabledClass: 'disabled',
    lockClass: 'disabled',
  },
  slideClass: 'reviews__slider-item',
  wrapperClass: 'reviews__slider-list',
  breakpoints: {
    768: {
      slidesPerView: 1.1899,
    },
    1440: {
      spaceBetween: 120,
      slidesPerView: 1.60973,
      allowTouchMove: false,
    }
  },
};

const initReviewsSlider = () => initSlider('[data-reviews-slider]', parameters);

export {initReviewsSlider};
