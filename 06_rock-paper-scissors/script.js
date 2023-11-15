



console.log("hello")
let weapons = ["rock", "paper", "scissors "];
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
            if (playerSelection == "scissors") {
                if (computerSelection == "paper") {
                    return "You win scissors beats paper"
                } else {
                    return "You lose rock beats scissors"
                }
            }
        }
    }
}
let playerSelection = "paper";
let computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playground(playerSelection, computerSelection))
function game() {
    for (let i = 0; i < 5; i++) {
        let gamerps = playground(playerSelection, computerSelection)
        console.log(gamerps)
    }
}



