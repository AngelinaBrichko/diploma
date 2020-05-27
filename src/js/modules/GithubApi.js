export default class GhApi {
    constructor(ghLink) {
      this.ghLink = ghLink;
    } 
  
    getCommits() {
      return fetch(this.ghLink , {
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
        });
    }
}