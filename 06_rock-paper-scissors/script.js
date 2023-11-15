



console.log("hello")
let weapons = ["rock", "paper", "scissor"];
console.log(weapons.length)
// FUNCION PC--------------------------/

function getComputerChoice () {
    let random_weapon = weapons[Math.floor(Math.random() * weapons.length)]
    return random_weapon
}
console.log(getComputerChoice())

function playground(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie"
    } else if (playerSelection == "rock"){
            if (computerSelection == "paper") {
                return "You lose paper beats rock"
            } else {
                return "You win rock beats scissors"
            }
    } else {
        if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                return "You win paper beats rock"
            } else {
                return "You lose scissors beats paper"
            }
        } else {
            if (playerSelection == "scissor") {
                if (computerSelection == "paper") {
                    return "You win scissors beats paper"
                } else {
                    return "You lose rock beats scissors"
                }
            }
        }
    }
}
//let playerSelection = "paper";
let computerSelection = getComputerChoice();
//console.log(computerSelection)
//console.log(playground(playerSelection, computerSelection))
function game() {
    for (let i = 0; i < 5; i++) {
        let gamerps = playground(playerSelection, computerSelection)
        console.log(gamerps)
    }
}
console.log("**************DOM*********")

const $computerChoice = document.querySelector(".computer-choice"),
    $buttonRock = document.querySelector(".rock-button"),
    $buttonPaper = document.querySelector(".paper-button"),
    $buttonScissor = document.querySelector(".scissor-button"),
    $playResult = document.querySelector(".result");
    $computerChoice.value = "";

$buttonRock.addEventListener("click",() => {
    //alert("aaaa");
    console.log("JUGANDO CON ROCK");
    $buttonRock.value = "rock";
    console.log(`valor elejido es: ${$buttonRock.value}`);
    $computerChoice.value = getComputerChoice();
    console.log(`valor elejido de la PC es : ${$computerChoice.value}`);  
    $playResult.value = playground($buttonRock.value, $computerChoice.value);
})

$buttonPaper.addEventListener("click",() => {
    //alert("aaaa");
    console.log("JUGANDO CON PAPER");
    $buttonPaper.value = "paper";
    console.log(`valor elejido es: ${$buttonPaper.value}`);
    $computerChoice.value = getComputerChoice();
    console.log(`valor elejido de la PC es : ${$computerChoice.value}`);  
    $playResult.value = playground($buttonPaper.value, $computerChoice.value);
})
$buttonScissor.addEventListener("click",() => {
    //alert("aaaa");
    console.log("JUGANDO CON SCISSOR");
    $buttonScissor.value = "scissor";
    console.log(`valor elejido es: ${$buttonScissor.value}`);
    $computerChoice.value = getComputerChoice();
    console.log(`valor elejido de la PC es : ${$computerChoice.value}`);  
    $playResult.value = playground($buttonScissor.value, $computerChoice.value);
})
