
let isButtonDisabled = false;


function getNumber(min = 1, max = 100){
    return Math.floor(Math.random() * (max - min)) + min;
}

// Cuando el usuario dice que su número es mayor
function numberIsLarger(){
    const minValue = document.getElementById("minValue");
    const guessedNumber = document.getElementById("guessedNumber");

    minValue.innerHTML = parseInt(guessedNumber.innerHTML) + 1;
    wrongNumber();
    setTimeout(makeNewGuess, 1500);
}

// Cuando el usuario dice que su número es menor
function numberIsSmaller(){
    const maxValue = document.getElementById("maxValue");
    const guessedNumber = document.getElementById("guessedNumber");

    maxValue.innerHTML = `${parseInt(guessedNumber.innerHTML) - 1}`;
    wrongNumber();
    setTimeout(makeNewGuess, 1500);
}


function makeNewGuess(){
    const minValueStr = document.getElementById("minValue");
    const maxValueStr = document.getElementById("maxValue");

    const maxValue = parseInt(maxValueStr.innerHTML);
    const minValue = parseInt(minValueStr.innerHTML);

    let newAnswer = 0;

    newAnswer = binarySearch(minValue, maxValue);
    guessNumber(newAnswer);
    if(minValue > maxValue)
        finishGame();
}

// El algoritmo de búsqueda binaria
function binarySearch(minValue = 1, maxValue = 100){
    console.log(`${minValue}, ${maxValue}`);
    return Math.floor( ( minValue + maxValue ) / 2);
}



function start(){
    const tryButtons = document.getElementsByClassName("tryButton");
    const startButton = document.getElementById("startButton");

    startButton.innerHTML = "¡Correcto!";
    startButton.setAttribute("onclick", "finishGame()");
    startButton.setAttribute("class", "col-10 btn-light");

    for (const tryButton of tryButtons) {
        tryButton.removeAttribute("disabled");
        tryButton.style.visibility = "visible";
    }

    const randomNumber = getNumber();
    guessNumber(randomNumber);
}

function guessNumber(number){
   
    const textBox = document.getElementById("textBox");

    if(number === 1)
        disableSmallerNumberButton();
    else if(number === 100)
        disableLargerNumberButton();
    else if(isButtonDisabled)
        enableButtons();

    
    textBox.innerHTML = `El número que estás pensando es <span id="guessedNumber">${number}</span>`;
}

function wrongNumber(){
    
    const textBox = document.getElementById("textBox");

    
    const option = getNumber(1, 5);
    let message = "";

    switch(option){
        case 1:
            message = "Creo que estoy muy cerca de adivinar tu número";
            break;
        case 2:
            message = "";
            break;
        case 3:
            message = "Estoy intentando leer tu mente";
            break;
        case 4:
            message = "";
            break;
        default:
            message = "";
    }

    textBox.innerHTML = message;
}

function setGame(){

    const startButton = document.getElementById("startButton");
    const textBox = document.getElementById("textBox");
    const minValue = document.getElementById("minValue");
    const maxValue = document.getElementById("maxValue");

    minValue.innerHTML = "1";
    maxValue.innerHTML = "100";

    startButton.innerHTML = "EMPEZAR";
    startButton.setAttribute("onclick", "start()");

    textBox.innerHTML = `¡Piensa en un número del 1 al 100!`;

}

function finishGame(){
  
    const textBox = document.getElementById("textBox");
    const guessedNumber = document.getElementById("guessedNumber");
    const tryButtons = document.getElementsByClassName("tryButton");
    const startButton = document.getElementById("startButton");

    const rightAnswer = guessedNumber.innerHTML;

    textBox.innerHTML = `El número que estás pensando es ${rightAnswer},`;

    for (const tryButton of tryButtons) {
        tryButton.style.visibility = "hidden";
    }

}


function disableSmallerNumberButton(){
    const smallerNumberButton = document.getElementById("smallerNumberButton");
    smallerNumberButton.disabled = true;
    isButtonDisabled = true;
}

function disableLargerNumberButton(){
    const largerNumberButton = document.getElementById("largerNumberButton");
    largerNumberButton.disabled = true;
    isButtonDisabled = true;
}

function enableButtons(){
    const largerNumberButton = document.getElementById("largerNumberButton");
    const smallerNumberButton = document.getElementById("smallerNumberButton");
    largerNumberButton.disabled = false;
    smallerNumberButton.disabled = false;
    isButtonDisabled = false;
}
