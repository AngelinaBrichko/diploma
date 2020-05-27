import '../../node_modules/swiper/css/swiper.min.css';

// свайпер
import Swiper from 'swiper';
var swiper = new Swiper('.swiper-container', {
  init: false,
  slidesPerView: 'auto',
  loop: true,
  loopedSlides: 5,
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
    slidesOffsetAfter: 8,
    },
    767: {
      spaceBetween: 8,
      slidesOffsetBefore: 40,
      slidesOffsetAfter: 16,
      },
    1440: {
      spaceBetween: 16,
      slidesOffsetBefore: 104,
      slidesOffsetAfter: 72,
    }
  },
});

// импорт стилей
import "./about.css"

//импорт классов
import GhApi from '../js/modules/GithubApi';
import CommitCardList from '../js/components/CommitCardList';

//импорт переменных
import {GHLINK} from '../js/constants/constants';

//свапер с данными с гитхаба
let ghApi = new GhApi(GHLINK)
const commitList = new CommitCardList(swiper, ghApi);
commitList.renderCommitCard();
swiper.init()

