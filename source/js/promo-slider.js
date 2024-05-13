import { initSlider, observeFocusWithinSlide } from './slider';
import { Pagination } from 'swiper/modules';

const parameters = {
  spaceBetween: 15,
  loop: true,
  modules: [ Pagination ],
  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-toggle',
    bulletActiveClass: 'active',
    clickable: true,
    renderBullet: (index, className) =>
      `<button class="${className}" type="button">
        <span class="visually-hidden">Слайд ${index + 1}.</span>
      </button>`,
  },
  on: {
    init: observeFocusWithinSlide,
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  },
};

const initPromoSlider = () => initSlider('[data-promo-slider]', parameters);

export {initPromoSlider};
