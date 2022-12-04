let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');




function getComputerChoice () {
    const choices = ['r', 'p', 's']
const randomNumber = Math.floor(Math.random() * 3)
 return choices[randomNumber]
}

function convertToWord(letter) {
    if (letter === 'r') return 'rock';
    if (letter === 's') return 'scissors';
    if(letter === 'p') return 'paper';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    const userChoice_div = document.getElementById(userChoice)
    result_p.textContent = `User played ${convertToWord(userChoice)}  VS Comp played ${convertToWord(computerChoice)}\n
     you win!`;
     userChoice_div.classList.add('green-glow');
     setTimeout(() =>userChoice_div.classList.remove('green-glow'), 300);

}
function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = `User played ${convertToWord(userChoice)}  VS Comp played ${convertToWord(computerChoice)}\n
     you Lost!`;
     userChoice_div.classList.add('red-glow');
     setTimeout(() =>userChoice_div.classList.remove('red-glow'), 300);
}
function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = `User played ${convertToWord(userChoice)}  VS Comp played ${convertToWord(computerChoice)}\n
     you Drew!`;
     userChoice_div.classList.add('gray-glow');
     setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}
function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
        win(userChoice, computerChoice);
        break;
    case 'rp':
    case 'ps':
    case 'sr':
        lose(userChoice,computerChoice);
        break;
    case 'rr':
    case 'pp':
    case 'ss':
        draw(userChoice,computerChoice);
        break;
    }
}


function main() {
    rock_div.addEventListener('click', () => game('r'))
    paper_div.addEventListener('click',  () => game('p'))
    scissors_div.addEventListener('click',  () => game('s'))
}
main();
