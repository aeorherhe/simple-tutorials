#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <time.h>
#include "./utils/string-length.h"

int main()
{

    char *fruits[] = {
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
        "olive"};

    int lengthOfFruits = sizeof(fruits) / sizeof(fruits[0]);

    // display word
    char displayWord[20];

    int lives = 10;
    bool endOfGame = false;

    // Generate random number
    int randomNumber;
    srand(time(NULL));
    for (int i = 0; i < lengthOfFruits; i++)
    {
        randomNumber = rand() % (lengthOfFruits);
    }

    // print random fruit
    char randomFruit[20];
    strcpy(randomFruit, fruits[randomNumber]);
    // printf("random word is %s\n", randomFruit);

    // fill display word with underscore
    for (int i = 0; i < length(randomFruit); i++)
    {
        displayWord[i] = '_';
    }

    while (!endOfGame)
    {
        char usersChoice;
        printf("Choose a random letter -> ");
        scanf("%s", &usersChoice);

        // check if they already guessed the letter
        if (strstr(displayWord, &usersChoice) != NULL)
        {
            printf("You already guessed the letter %c\n", usersChoice);
        }

        //   replace "_" with guessed letter
        for (int i = 0; i < length(randomFruit); i++)
        {
            if (usersChoice == randomFruit[i])
            {
                displayWord[i] = usersChoice;
            }
        }

        // reduce lives on wrong guess
        if (strstr(randomFruit, &usersChoice) == NULL)
        {
            printf("You guess %c, that's not in the word. You lose a life.\n", usersChoice);
            lives--;

            if (lives == 0)
            {
                printf("You have %d lives left.\n", lives);
                printf("You lose.");
                endOfGame = true;
            }
        }

        printf("Random word = %s\n", displayWord);
        printf("You have %d lives left.\n", lives);

        // check game status
        if (strstr(displayWord, "_") == NULL)
        {
            printf("You win\n");
            endOfGame = true;
        }
    }

    return 0;
}