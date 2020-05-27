export default class CommitCard {
    constructor(name, email,date, message, avatar_url) {
      this.name=name;
      this.email=email;
      this.date=date;
      this.message=message;
      this.avatar_url=avatar_url;
  }

    createCommitCard() {

      const template = `<div class="swiper-slide gh__slide">
        <p class="cell__data">${this.date}</p>
        <div class="cell__info">
          <img class="cell__photo" src="${this.avatar_url}"  alt="фотография того, кто оставил коммит">
          <div class="cell__author">
            <p class="cell__name">${this.name}</p>
            <p class="cell__email" >${this.email}</p>
          </div>
        </div>
        <p class="cell__text">${this.message}</p>
      </div`;
      
      return template;
    }
}