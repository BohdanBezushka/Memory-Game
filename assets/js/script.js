//Variables required for the game to work.
let uncoveredBottoms = 0;
let buttonOne = null;
let buttonTwo= null;

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
        buttonOne =document.getElementById(id);
        buttonOne.innerHTML= numbers[id];
    }

}
