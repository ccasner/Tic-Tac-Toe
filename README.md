# Project 1 - Tic-Tac-Toe

## Documentation:

 After drawing a basic wireframe and writing a few user stories, I started with a simple HTML document with a few CSS rules that would help visualize my results. I made a game board where I could start building my logic. Once that was mapped out, I started adding to the board, first adding click handlers to each box. I depicted the board as an empty array in JavaScript where I would eventually add the X and O values with each turn. I also made an array of winning boards where each board was its own array with the values of the indecies on the game board that would constitute a win from either player. Once I had the functions for the game logic working at the most basic level, I started to clean up the code so it was easier to read. Using the console at every step of the way was extremely important for debugging and tracking progression of steps through each different file, since I was trying to keep things organized and in separate places; however, I often forgot this simple tool. Most of the time I could solve my issues with this technique, but I made one major mistake that was unbeknownst to me towards the end of my project. Turns out circular dependencies can and WILL break your code with little warning. A fresh pair of eyes helped to remedy this, and my code was working smoothly from there! Styling was the final step and it was ready for deployment.

## Unsolved Problems:

- Visually represent the winning boxes with CSS.
- Show the user how many games they have won, instead of how many played.
- Add sign in option for multiplayer use.

[User Stories] https://imgur.com/FH56CoC
[Wireframe] https://imgur.com/N1whIdz
[Game Logic] https://imgur.com/HSAJnyG
