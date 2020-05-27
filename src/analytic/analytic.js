import "./analytic.css"

import Statistics from '../js/components/Statistics'
import {analyticTitle, numberOfNews, articles,mainWord, mentionInTitle, monthForDate} from '../js/constants/constants'

function countMentionsInTitle(mainWord, articles) {
    let count = 0
    for (let news of articles)  {
        news.title = news.title.toLowerCase();
        mainWord = mainWord.toLowerCase();
      if(news.title.includes(mainWord)) {
        count++;
        }
    }
     return count
}

function month() {
    const monthOfPublication = new Date(articles[0].publishedAt);
    return monthOfPublication.toLocaleDateString('ru', { month: 'long' })
}


const statisticsChart = new Statistics(articles, countMentionsInTitle(mainWord, articles) )
statisticsChart.createStatisticsChart()

analyticTitle.textContent = mainWord
numberOfNews.textContent = articles.length
mentionInTitle.textContent = countMentionsInTitle(mainWord, articles)
monthForDate.textContent = month()