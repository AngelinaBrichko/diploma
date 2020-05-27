import NewsCard from '../components/NewsCard';
import dateFormat from '../utils/Date';
import {NUMBEROFCARDS} from '../constants/constants'


export default class NewsCardList {
  constructor(resultList, allNews) {
    this.resultList = resultList;
    this.allNews = allNews;
    this.lastCard = 0;
    this.numberOfCards = NUMBEROFCARDS;
  
  }

  _moreCards() {
    if (this.allNews.length  > this.lastCard) {
      document.querySelector('.result__button').classList.remove('hidden')
      document.querySelector('.result__button').onclick = () => this.renderNewsCard()
    } else  {
      document.querySelector('.result__button').classList.add('hidden')
    }

  }

  renderNewsCard() {

    for (let i = this.lastCard; i < Math.min(this.lastCard + this.numberOfCards,this.allNews.length); i++) {

        const newsCard = new NewsCard(dateFormat(this.allNews[i].publishedAt), this.allNews[i].urlToImage, this.allNews[i].title, 
        this.allNews[i].description,  this.allNews[i].source.name,  this.allNews[i].url);

        this.resultList.insertAdjacentHTML('beforeEnd', newsCard.createNewsCard()) ;
          
      }
      this.lastCard = this.lastCard + NUMBEROFCARDS;  
      this._moreCards()
    }

    deleteCard() {
      while (this.resultList.firstChild) {
        this.resultList.removeChild(this.resultList.firstChild);
      }
    }
    
}