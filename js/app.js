alert('Welcome to my guessing game!');



let attempts = 0;
while(attempts <= 4) {
  attempts++;

  let number_answer = prompt('Guess a number between 1 and 10');

  if(number_answer < 6) {
    alert('Your guess is too low!');
  } else if(number_answer > 6){
    alert('Your answer is too high!');
  } else {
    alert('You are correct!');
    break;
  }
}
alert('The answer was 6');


let attempts2 = 0;
while(attempts2 <=6) {
  attempts2++;
  let states_visited = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  let guessAnswer = prompt('Guess one of my favorite states to visit').toLowerCase().trim();

  //   if(states_visited ==='Illinois' || states_visited ==='Nebraska' || states_visited ==='Florida' || states_visited ==='Indiana', states_visited ==='Winsonsin' ) {
  //     alert('You\'re Right!');
  //   } else {
  //     alert('Absolutely Not!');
  //   }
if (states_visited.includes(guessAnswer))
}
alert('My favorite states to visit are: Illinois, Nebraska, Florida, Indiana, Wisconsin');
