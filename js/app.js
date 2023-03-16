alert('Welcome to my guessing game!');

let userPoints = 0;

let attempts = 0;
while(attempts < 4) {
  attempts++;

  let numberAnswer = prompt('Guess a number between 1 and 10');

  if(numberAnswer < 6) {
    alert('Your guess is too low!');
  } else if(numberAnswer > 6){
    alert('Your answer is too high!');
  } else {
    alert('You are correct!');
    userPoints++;
    break;
  }
}
alert('The answer is 6');


let attempts2 = 0;
while(attempts2 < 6) {
  attempts2++;
  let statesVisited = ['illinois', 'nebraska', 'florida', 'indiana', 'wisconsin'];
  let guessAnswer = prompt('Guess one of my favorite states to visit').toLowerCase().trim();

  if (statesVisited.includes(guessAnswer)) {
    alert('You are correct! ' + guessAnswer + ' is one of my favorite states to visit.');
    userPoints++;
    break;
  } else {
    alert('Wrong!');
  }
}
alert('My favorite states to visit are: Illinois, Nebraska, Florida, Indiana, and Wisconsin');

alert('Your score is: ' + userPoints +'/2');
