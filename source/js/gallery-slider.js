import { initSlider } from './slider';
import { Navigation } from 'swiper/modules';

const parameters = {
  loop: true,
  loopAddBlankSlides: false,
  slidesPerView: 'auto',
  spaceBetween: 5,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.gallery [data-next]',
    prevEl: '.gallery [data-prev]',
    disabledClass: 'disabled',
  },
  slideClass: 'gallery__slider-item',
  wrapperClass: 'gallery__slider-list',
  breakpoints: {
    1440: {
      enabled: false,
      loop: false,
      spaceBetween: 0,
    }
  },
};

const initGallerySlider = () => initSlider('[data-gallery-slider]', parameters);

export {initGallerySlider};
