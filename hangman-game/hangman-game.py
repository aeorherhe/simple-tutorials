import random

words_selection = ["apple",  "pear",  "orange",  "banana",  "watermelon",  "cantaloupe",  "grape",  "kiwi", "blackberry",  "blueberry",  
  "raspberry",  "cherry",  "strawberry",  "lemon",  "lime",  "plum",  "pineapple",  "peach",  "mango",  "olive",]

choosen_word = random.choice(words_selection)

display_word = []
len_of_Word = len(choosen_word)

for letters in range(len_of_Word):
    display_word += "_"

end_of_game = False
lives = 10

while not end_of_game:
    # prompt user to guess a letter
    user_guess = input("Guess a letter -> ").lower()
    # print(f"Your guess word is {choosen_word}")

    # check if user already guessed that letter
    if user_guess in display_word:
        print(f"You already guessed the letter {user_guess}")

    for position in range(len_of_Word):
        letter = choosen_word[position]
        if (letter == user_guess):
            display_word[position] = letter
    if (user_guess not in choosen_word):
        print(f"You guess {user_guess}, that's not in the word. You lose a life")
        lives -= 1
        if (lives <= 0):
            end_of_game = True
            print("You lose.")

    print(f"{display_word}")
    print(f"You have {lives} lives left")

    if "_" not in display_word:
        end_of_game = True
        print("You win!!")





