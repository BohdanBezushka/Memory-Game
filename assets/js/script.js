//Variables required for the game to work.
let uncoveredBottoms = 0;
let buttonOne = null;
let buttonTwo= null;
let firsResult= null;
let secondResult= null;
let movements = 0;
let moves= document.getElementById("moves");
let identities = 0;
let identified= document.getElementById("identified");
let watch = false;
let time = document.getElementById("time");
let timer = 60;
let startTime = 60;
let stopWatch = null;

//Instructions to the player. Instructions can be viewed by pressing the question mark.
function instructions(){
    document.getElementById("memory-game").style.display = "none";
    document.getElementById("instructions-game").style.display = "block";
}

//Press the play button to play.
function playGame(){
    document.getElementById("memory-game").style.display = "block";
    document.getElementById("instructions-game").style.display = "none";
}

//Creation of an array that will be used to appear on the buttons.
let numbers = [2, 2, 3, 3, 5, 5, 7, 7, 11, 11, 13, 13, 17, 17, 19, 19]

//The following code allows to have random numbers of "let number".
numbers = numbers.sort(() => {return Math.random()-0.5});
console.log(numbers);

//This is the function that allows the button to be turned around so that the player can see the content.
function popUp(id){

    //Starts the countdown when the user opens the first button.
    if (watch === false){
        watch = true;
        sandWatch();
    }

    //Displays the number of times a button has been uncovered.
    uncoveredBottoms++;
    console.log(uncoveredBottoms);

    if(uncoveredBottoms === 1){
        buttonOne = document.getElementById(id);
        firsResult = numbers[id]
        buttonOne.innerHTML= firsResult;

        //Lock the first button (the player can see it) to unlock the second button.
        buttonOne.disabled = true;

    }else if(uncoveredBottoms === 2){
        buttonTwo = document.getElementById(id);
        secondResult = numbers[id];
        buttonTwo.innerHTML = secondResult;

        /*We lock the second button to increase the number of moves 
        and the number of hits if the buttons have the same content.
        */
        buttonTwo.disabled= true;

        /*This part of the code will be used to make the move counter section increase when the player presses a button.
        Increases a move when the player has pressed two buttons*/
        movements++;
        moves.innerHTML = `Moves: ${movements}`;
        
        /*This "if" works to compare the first result and the second result to see if they are the same.If the buttons
        are the same, the variable "uncoveredBottoms" returns to the value 0.*/
        if(firsResult === secondResult){
            uncoveredBottoms= 0;

            
            //If the player has hit the right buttons the "Identified:" counter will increase.
            identities++;
            identified.innerHTML = `Identified: ${identities}`;


            //Here we notify the player that he/she has completed the challenge if he/she reaches 8 matches.

            //Perfect result.
            if(identities === 8 && movements == 8){
                moves.innerHTML = `PERFECT!`;
                identified.innerHTML = `CHALLENGE COMPLETED!`;
                time.innerHTML = `YOU MADE IT IN ${startTime - timer}!`;

                //Stop time:
                clearInterval(stopWatch);

            //Standard result.
            }if(identities === 8 && movements > 8){
                moves.innerHTML = `You could do better.`;
                identified.innerHTML = `Challenge completed.`;
                time.innerHTML = `You made it in ${startTime - timer}`;

                //Stop time:
                clearInterval(stopWatch);
            }

        //If the buttons are not twins, they will close again.
        }else{
            setTimeout(() => {
                buttonOne.innerHTML = "";
                buttonOne.disabled = false;
                buttonTwo.innerHTML = "";
                buttonTwo.disabled = false;

                uncoveredBottoms = 0;
            },0500);
        }
    }
}

//This is the function that makes the time start to count down.
function sandWatch(){
   stopWatch = setInterval(() => {
        timer --;
        time.innerHTML = `Time: ${timer} sec.`;

        //The "if" will work so that the time stops at 0 and when that happens, all buttons will be displayed and locked.
        if (timer === 0){
            clearInterval(stopWatch);
            seeAllButtons()
        }
    },1000)
}

//All buttons are displayed and locked when the time reaches 0.
function seeAllButtons(){
    for(let i = 0; i < 16; i++){
        let buttons = document.getElementById(i);
        buttons.innerHTML = numbers[i];
        buttons.disabled = true;
    }
}