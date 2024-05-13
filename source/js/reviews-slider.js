import { initSlider } from './slider';
import { Navigation } from 'swiper/modules';

const parameters = {
  modules: [ Navigation ],
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.reviews [data-next]',
    prevEl: '.reviews [data-prev]',
    disabledClass: 'disabled',
    lockClass: 'disabled',
  },
  slideClass: 'reviews__slider-item',
  wrapperClass: 'reviews__slider-list',
  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  },
};

const initReviewsSlider = () => initSlider('[data-reviews-slider]', parameters);

export {initReviewsSlider};
