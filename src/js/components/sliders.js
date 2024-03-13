
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const swiper = new Swiper('.coachers__slider', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 3,
  spaceBetween: 30,
  navigation : {
    prevEl: '.coachers__btn--prev',
    nextEl: '.coachers__btn--next',
  },
  autoplay : true,
  speed: 1000,
  breakpoints : {
    320 : {
      slidesPerView: 'auto',
      loop: true
    },
    850 : {
      slidesPerView : 3,
      loop: false
    }
  }
});

new Swiper('.testimonials__slider', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  loop: true,
  autoplay : true,
  speed: 1000,
  navigation : {
    prevEl: '.testimonials__btn--prev',
    nextEl: '.testimonials__btn--next',
  }
});
