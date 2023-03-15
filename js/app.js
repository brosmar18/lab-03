alert('Welcome to my guessing game!');



let attempts = 0;
while(attempts <= 4) {
  attempts++;

  let number_answer = prompt('Guess a number between 1 and 10');

  if(number_answer < 6) {
    alert('Your guess is too low!');
  } else if(answer > 6){
    alert('Your answer is too high!');
  } else {
    alert('You are correct!');
    break;
  }
}
alert('The answer was 6');

// let attempts2 = 0;
// while(attempts2 <=6) {
//   attempts2++;

//   let guess_answer = prompt('Guess the States I\'ve been to');



// }
