const readlinePromises = require("node:readline/promises")
const stringLength = require("./utils/string-length")

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// fruits array
// prettier-ignore
const fruits = [
  "apple",  "pear",  "orange",  "banana",  "watermelon",  "cantaloupe",  "grape",  "kiwi", "blackberry",  "blueberry",  
  "raspberry",  "cherry",  "strawberry",  "lemon",  "lime",  "plum",  "pineapple",  "peach",  "mango",  "olive",]

class Game {
  constructor(name) {
    this.name = name
    this.lives = 10
    this.endOfGame = false
    this.guessedLetter
    this.displayWord = []
    this.randomWord = ""
  }

  //   get random word and replace each character with "_"
  getRandomWord() {
    this.randomWord = fruits[Math.floor(Math.random() * stringLength(fruits))]
    for (let _ in this.randomWord) this.displayWord.push("_")
  }

  // get players input
  async playersGuess() {
    this.guessedLetter = await rl.question("Choose a random letter -> ")
  }

  //   replace "_" with guessed letter
  guessChecker() {
    if (this.displayWord.includes(this.guessedLetter))
      console.log(`You already guessed the letter ${this.guessedLetter}`)

    for (let i in this.randomWord) {
      let letter = this.randomWord[i]
      if (letter === this.guessedLetter) this.displayWord[i] = letter
    }
  }

  // reduce lives on wrong guess
  loseLive() {
    if (!this.randomWord.includes(this.guessedLetter)) {
      console.log(
        `You guess ${this.guessedLetter}, that's not in the word. You lose a life`
      )
      this.lives--
      if (this.lives === 0) {
        this.endOfGame = true
        console.log("You lose.")
      }
    }
  }

  async play() {
    this.getRandomWord()

    while (!this.endOfGame) {
      await this.playersGuess()
      this.guessChecker()
      this.loseLive()

      console.log(this.displayWord)
      console.log(`You have ${this.lives} lives left`)

      // player wins
      if (!this.displayWord.includes("_")) {
        this.endOfGame = true
        console.log("You win!")
      }
    }

    setTimeout(() => {
      rl.close()
    }, 2000)
  }
}

const player_1 = new Game("Abraham")
player_1.play()
