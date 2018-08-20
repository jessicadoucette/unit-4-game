<h1>Crystal Game</h1>

Goal: Assign a random goal and random numbers to four different, clickable gems. Have a win, loss, and restart function. 

HTML includes instructions on how to play, four crystal images, current score, and record sections. 

CSS includes Bootstrap with some overrides to make things ~pretty~ . I included heading stylings for each of the sections, borders around current score and record, and a background image/text for the header. I imported two different fonts for the game. 

Javascript/jQuery (the stuff you've been waiting for)
First I wanted to list my variables, and include the math.floor/math.random code to select a random number between 19-120. 

Second, I used jQuery to grab different html elements and plug them in to my .js file. For example, here I plugged in the random targetNumber I created above into my html. 

Third, I assigned random values (between 1-12) to each of my gems. 

Fourth, we get fancy with the resetGame function. This lists how the restart of each game should look like (i.e userNumber to 0, pick a random targetNumber, etc. )

Fifth, create a "wins" function for when the user wins the game. This includes an alert, and adding 1 to the win section. 

Sixth, create a "losses" function for when the user loses. This includes an alert, and adding 1 to the loss section. 

Seventh, I created click functions for each of my gems. This includes adding the userNumber and the gem numbers, console logging, and an if/then statement for win/loss. 

<h2> Things I want to learn </h2>
I know my code isn't DRY. I want to work on making them gem clicks DRY, where I don't need to repeat myself. I know I need to include a for loop, but I couldn't get it to work properly. 
