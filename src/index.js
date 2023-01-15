import readlineSync from 'readline-sync';

export default (game) => {
  const minRandomNum = 1;
  const maxRandomNum = 100;
  const answersToWin = 3;
  // убрать!!!
  const rightAnswers = ['yes', 'no'];
  // end убрать!!!
  let randNumberOne;
  // let randNumberTwo;
  let playerAnswer;
  let myExpression;

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  // even-game
  console.log(`Answer "${rightAnswers[0]}" if the number is even, otherwise answer "${rightAnswers[1]}".`);

  for (let i = 0; i < answersToWin; i += 1) {
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! run func for a currently game
    // randNumberOne = Math.floor(Math.random() * (maxRandomNum - minRandomNum + 1) + minRandomNum);
    // console.log(`Question: ${randNumberOne}`);
    // playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === rightAnswers[randNumberOne % 2]) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswers[randNumberOne % 2]}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return 'defeat';
    }
  }

  console.log(`Congratulations, ${playerName}!`);
  return 'win';
};
