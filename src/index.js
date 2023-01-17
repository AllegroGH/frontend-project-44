import readlineSync from 'readline-sync';
import { getEvenRules, getEvenQuestionAndCount } from './games/even-game.js';
import { getCalcRules, getCalcQuestionAndCount } from './games/calc-game.js';
import { getGCDRules, getGCDQuestionAndCount } from './games/gcd-game.js';
import { getProgressionRules, getProgressionQuestionAndCount } from './games/progression-game.js';

const runGame = (getGameRules, getGameQuestionAndCount) => {
  const minRandomValue = 1;
  const maxRandomValue = 100;
  const answersToWin = 3;

  /* welcome */
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  /* show the rules of the running game */
  console.log(getGameRules());

  /* main loop */
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
const playCalcGame = () => runGame(getCalcRules, getCalcQuestionAndCount);
const playGCDGame = () => runGame(getGCDRules, getGCDQuestionAndCount);
const playProgressionGame = () => runGame(getProgressionRules, getProgressionQuestionAndCount);

export {
  /* export to bin */
  playEvenGame,
  playCalcGame,
  playGCDGame,
  playProgressionGame,
};
