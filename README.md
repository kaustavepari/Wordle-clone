Wordle clone

This is a clone of the popular wordle game where players have to guess a 5-letter word within six attempts. The game provides visual feedback for each guess by color-coding each letter according to whether it's in the correct position or present elsewhere in the word.

Description
The game displays a 5x6 grid representing attempts to guess a 5-letter word. On each attempt:

Green highlights indicate that a letter is in the correct position.
Yellow highlights indicate that the letter exists in the word but is in the wrong position.
Letters that do not exist in the word are left unchanged.
The word to guess is randomly picked from a word list fetched from the Datamuse API, which provides word suggestions based on a pattern. The game accepts only valid 5-letter words.

How to Play
Start by typing a 5-letter word using the keyboard. You can only type uppercase or lowercase letters.
Press Enter after typing the word to submit your guess.
If the word is valid and correctly typed, the game will provide feedback:
Green for correct letters in the correct position.
Yellow for letters that exist in the word but are in the wrong position.
You can press Backspace to erase the last typed letter.
The game will stop after six attempts or if the correct word is guessed.
Tech Stack
HTML: To structure the game board.
CSS: To style the game board.
JavaScript: For game logic and DOM manipulation.
Fetch API: To retrieve a list of valid 5-letter words from Datamuse API.
 
 
