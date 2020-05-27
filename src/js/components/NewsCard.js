export default class NewsCard {
    constructor(date, photo, title, text, source, link) {
      this.date = date;
      this.photo = photo;
      this.title = title;
      this.text = text;
      this.source = source;
      this.link = link;
  }

    createNewsCard() {

      const template = `<a class="card" href="${this.link}"> 
      <img class="card__image" src="${this.photo}" alt="Изображение новости">
      <p class="card__data">${this.date}</p>
      <h3 class="card__title">${this.title}</h3>
      <p class="card__text">${this.text}.</p>
      <p class="card__source">${this.source}</p>
      </a>`;
      
      return template;

    }
}