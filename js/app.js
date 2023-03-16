alert('Welcome to my guessing game!');

let userPoints = 0;

function getName (){
  let name = prompt('Hello! What is your name?');
  alert('Hello there ' + name + ('! Welcome to the show'));
}
getName();

function guessSushi(){
  let likeSushi = prompt('Do I like sushi? Types yes or no').toLowerCase();
  if(likeSushi === 'yes'){
    alert('You are correct! I love sushi.');
    userPoints++;
  } else {
    alert('Wrong! I love sushi.');
  }
}
guessSushi();


function guessNumber(){
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 4;
  let question = 'Guess an integer from 1 to 10';

  while(attempts > 0 ) {
    let guessNumber = parseInt(prompt(question + ' You have ' + attempts + ' try\'s to go.'));
    // What happens if they don't want to play. Handle the cancel.
    if(!guessNumber) {
      break;
    }
    if(guessNumber === randomNumber) {
      alert('You guessed the correct number! Good job.');
      userPoints++;
      attempts = 0;
    } else {
      question = 'You were close. Try again';
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
}

guessNumber();


function guessState() {
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
}

guessState();

alert('Your score is: ' + userPoints +'/3');
