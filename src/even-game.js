import readlineSync from 'readline-sync';

export default (playerName) => {
  const minRandomNum = 1;
  const maxRandomNum = 100;
  const answersToWin = 3;
  const rightAnswers = ['yes', 'no'];

  console.log(`Answer "${rightAnswers[0]}" if the number is even, otherwise answer "${rightAnswers[1]}".`);

  for (let i = 0, randomNumber, playerAnswer; i < answersToWin; i += 1) {
    randomNumber = Math.floor(Math.random() * maxRandomNum + minRandomNum);
    console.log(`Question: ${randomNumber}`);
    playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === rightAnswers[randomNumber % 2]) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswers[randomNumber % 2]}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return 'defeat';
    }
  }

  console.log(`Congratulations, ${playerName}!`);
  return 'win';
};
