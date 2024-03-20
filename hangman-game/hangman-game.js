const readlinePromises = require("node:readline/promises")
const stringLength = require("./utils/string-length")

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function stringLength(string) {
  let length = 0
  let i = 0

  while (string[i] != undefined) {
    ++length
    ++i
  }

  return length
}

// fruits array
const fruits = [
  "apple",
  "pear",
  "orange",
  "banana",
  "watermelon",
  "cantaloupe",
  "grape",
  "kiwi",
  "blackberry",
  "blueberry",
  "raspberry",
  "cherry",
  "strawberry",
  "lemon",
  "lime",
  "plum",
  "pineapple",
  "peach",
  "mango",
  "olive",
]

;(async () => {
  const randomFruit = fruits[Math.floor(Math.random() * stringLength(fruits))]

  let displayWord = []
  for (letter in randomFruit) displayWord.push("_")

  let endOfGame = false
  let lives = 10

  while (!endOfGame) {
    const guessLetter = await rl.question("Choose a random letter -> ")
    // console.log("Guess fruit is", randomFruit)

    // check if they already guessed the letter
    if (displayWord.includes(guessLetter))
      console.log(`You already guessed the letter ${guessLetter}`)

    //   replace "_" with guessed letter
    for (i in randomFruit) {
      let letter = randomFruit[i]
      if (letter === guessLetter) displayWord[i] = letter
    }

    // reduce lives on wrong guess
    if (!randomFruit.includes(guessLetter)) {
      console.log(
        `You guess ${guessLetter}, that's not in the word. You lose a life`
      )
      lives--
      if (lives === 0) {
        endOfGame = true
        console.log("You lose.")
      }
    }

    console.log(displayWord)
    console.log(`You have ${lives} lives left`)

    if (!displayWord.includes("_")) {
      endOfGame = true
      console.log("You win!")
    }
  }

  setTimeout(() => {
    rl.close()
  }, 1000)
})()
