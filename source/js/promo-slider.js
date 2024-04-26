import { initSlider } from './slider';
import { Pagination } from 'swiper/modules';

const parameters = {
  spaceBetween: 15,
  loop: true,
  modules: [ Pagination ],
  pagination: {
    el: '.hero__pagination',
    bulletElement: 'button',
    bulletClass: 'hero__pagination-toggle',
    bulletActiveClass: 'active',
    clickable: true,
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  },
};

const initPromoSlider = () => initSlider('[data-promo-slider]', parameters);

export {initPromoSlider};
