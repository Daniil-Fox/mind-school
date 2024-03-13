
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
const swiper = new Swiper('.coachers__slider', {
  slidesPerView: 3,
  spaceBetween: 30
});

new Swiper('.testimonials__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,

  navigation : {
    prevEl: '.testimonials__btn--prev',
    nextEl: '.testimonials__btn--next',
  }
});
