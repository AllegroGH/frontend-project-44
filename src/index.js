import readlineSync from 'readline-sync';
import { getEvenRules, getEvenQuestionAndCount } from './games/even-game.js';

const runGame = (getGameRules, getGameQuestionAndCount) => {
  const minRandomValue = 1;
  const maxRandomValue = 100;
  const answersToWin = 3;

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(getGameRules()); // show the rules of the running game

  for (let i = 0, gameQuestionAndCount, playerAnswer; i < answersToWin; i += 1) {
    /* [0] - question, [1] - count */
    gameQuestionAndCount = getGameQuestionAndCount(minRandomValue, maxRandomValue);

    console.log(`Question: ${gameQuestionAndCount[0]}`);
    playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === gameQuestionAndCount[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${gameQuestionAndCount[1]}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

const playEvenGame = () => runGame(getEvenRules, getEvenQuestionAndCount);

// eslint-disable-next-line import/prefer-default-export
export default playEvenGame;
