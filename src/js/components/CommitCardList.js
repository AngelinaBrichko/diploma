import CommitCard from '../components/CommitCard';
import dateFormat from '../utils/Date';

export default class CommitCardList {
  constructor(swiper, ghApi) {
    this.swiper = swiper;
    this.ghApi = ghApi
  
  }

  renderCommitCard() {
    this.ghApi.getCommits() 
    .then((commits)  => {
        for (let i=0; i<commits.length; i++) {
            const commit = new CommitCard(commits[i].commit.committer.name, commits[i].commit.committer.email, 
              dateFormat(commits[i].commit.committer.date), commits[i].commit.message, commits[i].author.avatar_url);
              this.swiper.appendSlide(commit.createCommitCard());
          } 
    })

}
}