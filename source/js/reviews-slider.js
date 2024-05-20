import { initSlider } from './slider';
import { Navigation } from 'swiper/modules';

const parameters = {
  modules: [ Navigation ],
  slidesPerView: 1,
  spaceBetween: 30,
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
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 'auto',
      allowTouchMove: false,
      spaceBetween: 120,
    }
  },
};

const initReviewsSlider = () => initSlider('[data-reviews-slider]', parameters);

export {initReviewsSlider};
