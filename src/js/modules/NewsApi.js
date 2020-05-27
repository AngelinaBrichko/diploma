export default class NewsApi {
    constructor(proxy, newsLink, querie, KEY, dateFrom, dateTo) {
      this.proxy = proxy;
      this.newsLink = newsLink;
      this.querie = querie;
      this.KEY = KEY;
      this.dateFrom = dateFrom;
      this.dateTo = dateTo
    } 
  
    getNews() {
      return fetch(`${this.proxy}${this.newsLink}q=${this.querie}&from=${this.dateFrom}&to=${this.dateTo}
      &sortBy=popularity&pageSize=100&apiKey=${this.KEY}`, {
        method: 'GET',
      })
        .then(res => {

          if (res.ok) {
            return res.json();
          }
  
          // если ошибка, переходим в catch
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        
  
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
          loading.classList.add('hidden')
          document.getElementById('error').classList.remove('hidden')
        });
    }
}