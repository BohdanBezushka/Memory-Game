
# **Memory Game** ⏳

[*Live link to website.*](https://bohdanbezushka.github.io/Memory-Game/)

Memory Game is a game where the user has to match cards with the same value. The player has only 60 seconds to match all the cards. The aim of the game is to improve the user's memory.

The user can see the time he/she has to complete the game, the total number of moves made and the number of matches achieved. There is also a button with a "?" sign where he/she can see the instructions.

![Captura de pantalla (392)](https://user-images.githubusercontent.com/94321555/202083364-35a58a11-3d0e-4886-8d6e-203aab4169bc.png)

## Contents

* [User Experience - UX](#User-Experience---UX)
  * [User Stories](#User-Stories)
  * [Site Owners Goals](#Site-Owners-Goals)
* [Design](#Design)
  * [Colour Scheme](#Colour-Scheme)
  * [Typography](#Typography)
  * [Interactive Links](#Interactive-Links)
* [Features](#Features)
  * [Features Left to Implement](#Features-Left-to-Implement)
* [Testing](#Testing)
  * [Performance Testing](#Performance-Testing)
* [Validator Testing](#Validator-Testing)
* [Bugs](#Bugs) 
* [Unfixed Bugs](#Unfixed-Bugs)
* [Technologies Used](#Technologies-Used)
* [Deployment of This Project](#Deployment-of-This-Project)
* [Credits](#Credits)
  * [Information Resources](#Information-Resources)
  * [Media](#Media)
* [Acknowledgements](#Acknowledgements)

## User experience - UX

The website has 2 pages. The main one is where the player can complete the challenge and the second one is to view the game instructions.

### User Stories

- As a user, I want to be able to see the name of the site clearly at the top of the page.
- As a user, I want to be able to easily access and exit the game instructions.
- As a user, I want to be able to see the time remaining.
- As a user, I want to be able to see the total number of matches completed.
- As a user, I want to be able to see the total number of buttons uncovered.

### Site Owners Goals

- As a creator, I want the user to have a simple interface.
- As a creator, I want the user to have information below the play area.
- As a creator, I want the user to be able to have an instruction section of the game.
- As a creator, I want the user to be able to contact the creator via Linkedin or see other projects via GitHub.

## Design

### Colour Scheme
![nn](https://user-images.githubusercontent.com/94321555/202083607-f5ec59f2-d0e6-4639-9f12-4674228b2b4a.png)

- The colour `#000000` is mainly used for text and borders.
- The colour `#FAFAFAFA` is mainly used for the background of the play area buttons, instruction button, play button and the GitHub and Linkedin icons.
- The colour `#1DE9B6` is mainly used for the background of the body.
- The colour `#FFD180` is mainly used for the hover function on the play area buttons, the instructions button, play button and the GitHub and Linkedin icons.

### Typography
I used Google Fonts to select and import the VT323 font for all site text. In case of error, the second font family would be Monospace.
![Captura de pantalla (361)](https://user-images.githubusercontent.com/94321555/202083746-3d5ed325-ed3b-4bf7-b9ef-901516fe27a1.png)

### Interactive Links
In the footer, users can click on links to GitHub and Linkedin. Once these icons are clicked, they open in a new tab.

## Features
- Favicon:
    - The favicon of the browser tab contains a simple image of two cards and shows the user what the game is about.
![Captura de pantalla (363)](https://user-images.githubusercontent.com/94321555/202083851-6e4cf7c4-646f-4388-9f70-2faedd839ef7.png)

- Logo:
    - The logo appears at the top of the page and shows the user the name of the game.
    - Next to the logo there is a button that allows the user to play again.
![Captura de pantalla (388)](https://user-images.githubusercontent.com/94321555/202083931-60b50415-6020-4c90-bf67-ca2f20126264.png)

- Game Area:
    - In each game the numbers appear randomly. The player must match the buttons by uncovering them.
![Captura de pantalla (370)](https://user-images.githubusercontent.com/94321555/202084015-3bcef0a6-eeb0-4beb-a9f9-e689063a8ccf.png)
*This is the playing area at the start of the game.*

![Captura de pantalla (368)](https://user-images.githubusercontent.com/94321555/202084101-03922211-cca3-4103-971d-cac338101a4d.png)

*This is when the player has completed all combinations.*

- Game Data:
    - This part tells the player how he is doing. It shows the number of completed combinations, the time remaining and the number of uncoverings made.
    - At the end of the game, a response will be displayed based on the user's skill and the time taken to complete the game.
![Captura de pantalla (372)](https://user-images.githubusercontent.com/94321555/202084231-62586911-45d7-4f39-a8aa-b5b9b2f3bd13.png)
*Start of the game.*

![Captura de pantalla (374)](https://user-images.githubusercontent.com/94321555/202084287-0ab12d90-b292-4263-8194-092ad8fdde61.png)

*End game*

- Instructions button:
    - The player can click on it and see the instructions for the game.

![Captura de pantalla (375)](https://user-images.githubusercontent.com/94321555/202084405-8b5159d1-b6f9-4a56-9546-45a04250260e.png)

- Instructions page:
    - The player can return to the playing area by clicking the "Play" button.
![Captura de pantalla (394)](https://user-images.githubusercontent.com/94321555/202084494-1468047c-4221-49e9-bb08-1ea4a9cdfa5a.png)

- Footer:
    - The footer shows that I have developed the site and a link to my Github and Linkedin which open in a new tab.
![Captura de pantalla (390)](https://user-images.githubusercontent.com/94321555/202084615-3336f9d4-8a72-4f92-8db3-3df8076e150d.png)

## Features Left to Implement

- Create easy, medium and difficult levels. It would be interesting to create more levels with higher difficulty. The idea would be to add images in the middle level and reduce the time to complete it. And in the difficult level I would add very similar shapes with more buttons.

- Add a page where the user can see a history of their results at different levels.

- It would be interesting to add sounds to the user's actions; when opening a button, when matching buttons, when not matching buttons and a background song while the user plays.

## Testing

- The website has been successfully tested on my own laptop on the following browsers:
![image](https://user-images.githubusercontent.com/94321555/202084695-1b884829-6d36-49a0-bd11-119aeec2d6bd.png)

- The game has been tested on more than one occasion by myself and more than 4 other users. The play area works correctly and shows the results to the user at the right time.

- The links work correctly and open in a new tab.

### Performance Testing
The website was tested for performance using the Lighthouse feature in Google Chrome's Developer Tools:

- Desktop:
![Captura de pantalla (396)](https://user-images.githubusercontent.com/94321555/202084826-3a253c07-e20c-4bac-8d54-b8c1a8f0b0b2.png)

- Mobile:
![Captura de pantalla (398)](https://user-images.githubusercontent.com/94321555/202084882-32946281-166f-4194-b0a4-603902639316.png)

## Validator Testing
- HTML
    - No errors were returned through the official [*W3C HTML Validator.*](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbohdanbezushka.github.io%2FMemory-Game%2F)
![Captura de pantalla (400)](https://user-images.githubusercontent.com/94321555/202084954-b92487b5-5627-4d77-85c4-56c17439567b.png)

- CSS
    - No errors were returned through the official [*W3C CSS Validator (Jigsaw).*](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbohdanbezushka.github.io%2FMemory-Game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
![Captura de pantalla (402)](https://user-images.githubusercontent.com/94321555/202085072-08fb923d-fcb9-4d8d-af0f-47fdfdec3ff8.png)

- JavaScript
    - No errors were returned after passing my code through [*JSHint JavaScript Validator.*](https://jshint.com/)
![Captura de pantalla (406)](https://user-images.githubusercontent.com/94321555/202085230-0c4537c7-dfc5-42bf-8499-83b9a718a98a.png)

## Bugs
- I had to change the background colour because it gave low results in the LightHouse test. This is a screenshot of the project before changing the background:
![Captura de pantalla (407)](https://user-images.githubusercontent.com/94321555/202085288-d73ea7f1-f8a0-453e-a279-6156a67a8f05.png)

- I had to correct three errors that appeared in the W3C HTML Validator test:
![Captura de pantalla (408)](https://user-images.githubusercontent.com/94321555/202085338-c74191d5-ff84-44ed-b121-0ceb60dffcf0.png)

- The following code caused that when the user pressed the "instructions" button the time did not stop and when the user pressed the "play" button the time was counting down seconds faster and did not stop, giving a negative time result. The solution was to apply a setTimeout to the sandWatch() function.

![image](https://user-images.githubusercontent.com/94321555/203163574-cf96b878-3e31-4f1c-a12a-020b3b6564ea.png)
*Before.*

![Captura de pantalla (424)](https://user-images.githubusercontent.com/94321555/203163743-9154a386-3e6a-49d6-85ab-962cc136aacd.png)
*Bug.*

![image](https://user-images.githubusercontent.com/94321555/203164335-372a5bd4-74eb-46be-b468-ed25a2b4d9dd.png)
*After.*

## Unfixed Bugs
No unfixed bugs.

## Technologies Used
The following is a list of the technologies I used on this project:

1. *HTML5* was used to create the structure of the site.
2. *CSS3* was used to add styling to the site.
3. *JavaScript* was used to add functionality to the game.
4. [*Google Fonts*](https://fonts.google.com/?query=VT323+) was used to import the VT323 font for use on style.css.
5. *Github* was used to store the project's code after being pushed from Git.
6. *Git* was used for version control through the Gitpod terminal.
7. *Gitpod* terminal was used to commit my code using Git and push it to Github.
8. [*Font Awesome*](https://fontawesome.com/) are used as an icons for user UX purposes.
9. I have used [*Readme.so*](https://readme.so/en) to create the README file.

## Deployment of this project
The website development was created in the "main" branch. This branch was deployed using GitHub Pages.

- In the GitHub repository, navigate to the Settings tab.
- From the source section drop-down menu, select the Main Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

[*The live link.*](https://bohdanbezushka.github.io/Memory-Game/)

## Credits
### Information Resources
- The project has been inspired by [*Memory Card Game - JavaScript Tutorial*](https://youtu.be/ZniVgo8U7ek) and by [*How to Code a Card Matching Game.*](https://youtu.be/28VfzEiJgy4)
- The following media have been read to understand how the code should work [*How to program a card matching game*](https://www.ncsc.gov.uk/static-assets/documents/ECW21-CGI-Card-Matching-Instructions.pdf) and [*Creating a memory game with JavaScript.*](https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j)
- I used [*Stack Overflow*](https://stackoverflow.com/), [*W3Schools*](https://www.w3schools.com/jsref/met_win_clearinterval.asp), [*MDN*](https://developer.mozilla.org/en-US/) and the Code Institute's slack group when I got stuck.

### Media  
- The Favicon image belongs to [*Freepik*](https://www.freepik.com/) and has been generated by [*Favicon io*](https://favicon.io/favicon-converter/).
- To find colours I have used [*HTML Color Codes.*](https://htmlcolorcodes.com/)
- To create the colour palette I used [*Coolors.*](https://coolors.co/000000-fafafa-1de9b6-ffd180)

## Acknowledgements
Special thanks to my mentor [*Mitko Bachvarov*](https://www.linkedin.com/in/mitko-bachvarov-40b50776/) and my colleagues at the [*Code Institute.*](https://codeinstitute.net/ie/)
