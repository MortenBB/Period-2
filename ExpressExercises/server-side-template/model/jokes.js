var _jokes = [
	"A day without sunshine is like, night.",
	"At what age is it appropriate to tell my dog that he's adopted?",
	"I intend to live forever, or die trying"
];

class Jokes {
	constructor(jokes) {
		this.jokes = jokes;
	}
	getRandomJoke() {
		var random = Math.floor(Math.random() * this.jokes.length);
		return this.jokes[random];
	}
	getAllJokes() {
		return this.jokes;
	}
	addJoke(joke) {
		this.jokes.push(joke);
	}
}

module.exports = new Jokes(_jokes);
