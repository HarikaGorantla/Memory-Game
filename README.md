# Memory Game Project

##  Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)
* [Link to download the scratch project](#Link-to-download-the-scratch-project)
* [Process to play the Memory Game](#Process-to-play-the-Memory-Game)
* [Steps to complete the project](#Steps-to-complete-the-project)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. I have  converted this project from a static project to an interactive one. This requires modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Link to download the scratch project
Memory Game project repository on github: https://github.com/udacity/fend-project-memory-game
The Zipped File : https://github.com/udacity/fend-project-memory-game/archive/master.zip

* From Github repository I have downloaded the project then I  unzipped the files.
* Then we get the static design of the Memory Game when we run the project in a web browser.

## Process to play the Memory game
  First click on any random card then u will be able to see the card and then click on one more card. If both cards are same then the cards are fixed. If not then the cards will be disabled. And then click on the cards until all the cards match.
  During this process Moves are counted and time is also calculated.
  And star rating is also given based on the number of views.

  * If the player completes the game in less than  _12 moves_ then player gets __3 stars__.
  * If the player completes the game in between _12 to 16 moves_ then  player gets __2 stars__.
  * If the player completes the game in between _16 to 20 moves_ then  player gets __1 star__.
  * If the move count exceeds the above conditions then the player does not get any stars.

## Steps to complete the Project

  In this project first I have written code to `open` the card and then `show` and next `disable`.
  And next if the cards are similar then they are fixed by `match`. Next, once the card is opened then we have to see that the opened card must not undergo any changes on clicking the card again until the card is disabled.

  Then I have written code for counting the similar cards. And next I have written a condition. If that condition is satisfied then a success popup message is displayed using `Model box`. And in that pop up message a `playagain` button is used.
  Then the code for displaying the number of **stars**.
  And a timer logic is written to calculate the _time_ and then it is displayed on the popup window.
  I have written code for the number of moves using `movecnt`. If two cards are opened then count increments to 1.And displayed the moves count on the popup window.
  And at last but not least the code for `shuffle` is written so that it shuffles all the cards for every game.
