import "./index.css"

import NewsApi from '../js/modules/NewsApi';

import {PROXY, NEWSLINK, KEY, currentDate, previousDate, input, searchButton, 
    loading, notFound, result, searchField, error, searchText} from '../js/constants/constants';
import dateForNewsApi from '../js/utils/dateForNewsApi';

import NewsCardList from '../js/components/NewsCardList';

// функция валидации формы
function checkInputValidity() {
    if (input.value.length < 2) {
      input.placeholder = "Нужно ввести ключевое поле";
      searchButton.setAttribute('disabled', true);
      searchButton.setAttribute('style', 'opacity: .5')
      return false
    } else {
        searchButton.removeAttribute('disabled');
        searchButton.removeAttribute('style', 'opacity: .5')
        return true
    }
}

// создание запроса при успешной вылидации и записывание данных в хранилище с отрисовкой карточек
function renderNews(allNews) {
    if (allNews.length > 0) {
        const newsList = new NewsCardList(document.querySelector('.result__list'), allNews);
        newsList.deleteCard();
        newsList.renderNewsCard();
        loading.classList.add('hidden')
        notFound.classList.add('hidden')
        result.classList.remove('hidden')
    } else {
        notFound.classList.remove('hidden')
        loading.classList.add('hidden')
    }
}

function getAndSaveNews() {
    error.classList.add('hidden')
    result.classList.add('hidden')
    notFound.classList.add('hidden')
    event.preventDefault()
    localStorage.removeItem('articles')

    if (checkInputValidity() === false){
        return false
    } else  {
        loading.classList.remove('hidden')
        let querie = searchText.value
        let newsApi = new NewsApi(PROXY, NEWSLINK, querie, KEY, dateForNewsApi(currentDate), dateForNewsApi(previousDate))
        newsApi.getNews() 
            .then (news => {
            localStorage.setItem('articles', JSON.stringify(news.articles))
            localStorage.setItem('mainWord', JSON.stringify(querie))
            renderNews(JSON.parse(localStorage.getItem('articles')))
        }) 
    } 
}

function funOnLoad() {
    if (JSON.parse(localStorage.getItem('articles')) !== null) {
    const newsList = new NewsCardList(document.querySelector('.result__list'), JSON.parse(localStorage.getItem('articles')))
    result.classList.remove('hidden')
    newsList.renderNewsCard();
    }
}


input.addEventListener('input', checkInputValidity)
searchField.addEventListener('submit', getAndSaveNews) 

window.onload = funOnLoad

