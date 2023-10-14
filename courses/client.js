class Client {
  constructor(data) {
    this.data = data;
  }

  // GET REQUEST : https://api.test/data/infos
  getDataInfos() {
    return {
      description: this.data.description,
      challengeTitle: this.data.challengeTitle,
      challengeSubtitle: this.data.challengeSubtitle,
      challengeYear: this.data.challengeYear,
    };
  }

  // GET https://api.test/data/infos/challenges
  getChallenges() {
    return this.data.challenges;
  }

  // GET https://api.test/data/infos/author
  getAuthor() {
    return this.data.author;
  }

  // GET https://api.test/data/infos/keywords
  getKeywords() {
    return this.data.keywords;
  }
}
