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

//Creation of an array that will be used to appear on the buttons.
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]

//The following code allows to have random numbers of "let number".
numbers = numbers.sort(() => {return Math.random()-0.5});
console.log(numbers);

//This is the function that allows the button to be turned around so that the player can see the content.
function popUp(id){
    //Displays the number of times a button has been uncovered.
    uncoveredBottoms++;
    console.log(uncoveredBottoms);

    if(uncoveredBottoms == 1){
        buttonOne = document.getElementById(id);
        firsResult = numbers[id]
        buttonOne.innerHTML= firsResult;

        //Lock the first button (the player can see it) to unlock the second button.
        buttonOne.disabled = true;

    }else if(uncoveredBottoms == 2){
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
        if(firsResult == secondResult){
            uncoveredBottoms= 0;

            
            //If the player has hit the right buttons the "Identified:" counter will increase.
            identities++;
            identified.innerHTML = `Identified: ${identities}`;

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
