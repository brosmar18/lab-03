alert('Welcome to my guessing game!');

let userPoints = 0;

// let attempts = 0;
// while(attempts < 4) {
//   attempts++;

//   let numberAnswer = prompt('Guess a number between 1 and 10');

//   if(numberAnswer < 6) {
//     alert('Your guess is too low!');
//   } else if(numberAnswer > 6){
//     alert('Your answer is too high!');
//   } else {
//     alert('You are correct!');
//     userPoints++;
//     break;
//   }
// }
// alert('The answer is 6');

let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 4;
let question = 'Guess an integer from 1 to 10';

while(attempts > 0 ) {
  let guessNumber = parseInt(prompt(question + 'You have ' + attempts + ' try\'s to go.'));
  // What happens if they don't want to play. Handle the cancel.
  if(!guessNumber) {
    break;
  }
  if(guessNumber === randomNumber) {
    alert('You guessed the correct number! Good job.');
    userPoints++;
    attempts = 0;
  } else {
    question = 'You wer close. Try again';
    if(guessNumber < randomNumber) {
      alert('Yoo low! Try again');
    }
    if(guessNumber > randomNumber) {
      alert('Too high! Try again');
    }
    attempts--;
  }
}



alert('The correct number was ' + randomNumber);


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
