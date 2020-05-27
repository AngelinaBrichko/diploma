import dateForNewsApi from '../utils/dateForNewsApi'
import {currentDate} from '../constants/constants'

export default class Statistics {
    constructor (info, allNews) {
      this.info = info
      this.allNews = allNews
      this.count = 0
      this.eachDay = ''
  }

  _mentionsPerDay(i) {
      this.eachDay = dateForNewsApi(new Date(currentDate.getTime()-86400000*i))
      for (let news of this.info)  {
        if(news.publishedAt.includes(this.eachDay)) {
          this.count++;
          }
      }
     return this.count
 }

 _dayWeek(dw) {
      this.date = new Date(dw)
      let options = {weekday: 'short', day: 'numeric' };
      this.date = this.date.toLocaleDateString('ru-RU', options).split(',');
      this.date=`${this.date[1]}, ${this.date[0]}`

      return this.date
 }

createStatisticsChart() {
      for (let i=1; i<8; i++) {
        this.count = 0
        this._mentionsPerDay(i)
        this._dayWeek(this.eachDay)
        this.template = ` <div class="statistics__cell"> <p class="statistics__date">${this.date}</p>
        <div class="statistics__line"><span class="statistics__count">${this.count}</span></div>`
        document.querySelector('.statistics__chart').insertAdjacentHTML('afterbegin', this.template)
        document.querySelector('.statistics__line').style.width = `${this.count}%`
      }

    }
}

