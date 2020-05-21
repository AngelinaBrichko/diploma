import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
      spaceBetween: 8,
      slidesOffsetBefore: 16,
      lidesOffsetAfter: 8,
      },
      767: {
        spaceBetween: 8,
        slidesOffsetBefore: 40,
        lidesOffsetAfter: 16,
        },
      1440: {
        spaceBetween: 16,
        slidesOffsetBefore: 104,
        lidesOffsetAfter: 72,
      }
    },
  });

import "./about.css"