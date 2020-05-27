export const PROXY = 'https://cors-anywhere.herokuapp.com/';
export const NEWSLINK = 'https://newsapi.org/v2/everything?';
export const KEY = '8e563d926e1d4ee3936b5b0255f1fdab';

export const NUMBEROFCARDS = 3;

export let currentDate = new Date();
export let previousDate = new Date(currentDate.getTime()-86400000*7)

export const GHLINK= 'https://api.github.com/repos/angelinabrichko/diploma/commits';

export const input = document.getElementById('input');
export const searchButton = document.querySelector('.search__button');
export const loading = document.getElementById('loading');
export const notFound = document.getElementById('not-found');
export const result = document.querySelector('.result');
export const analyticTitle = document.getElementById('analyticTitle');
export const numberOfNews = document.getElementById('numberOfNews');
export const searchField = document.querySelector('.search__field')
export const error = document.getElementById('error')
export const searchText = document.querySelector('.search__text')

export const articles = JSON.parse(localStorage.getItem('articles'))
export const mainWord = JSON.parse(localStorage.getItem('mainWord'))
export const mentionInTitle = document.getElementById('mentionInTitle')
export const monthForDate = document.getElementById('month')