import readlineSync from 'readline-sync';
import { getEvenRules, getEvenQuestionAndAnswer } from './games/even-game.js';
import { getCalcRules, getCalcQuestionAndAnswer } from './games/calc-game.js';
import { getGCDRules, getGCDQuestionAndAnswer } from './games/gcd-game.js';
import { getProgressionRules, getProgressionQuestionAndAnswer } from './games/progression-game.js';
import { getPrimeRules, getPrimeQuestionAndAnswer } from './games/prime-game.js';

const runGame = (getGameRules, getGameQuestionAndAnswer) => {
  const minRandomValue = 1;
  const maxRandomValue = 100;
  const gameTries = 3;

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(getGameRules());

  for (let i = 0, playerAnswer; i < gameTries; i += 1) {
    /* [0] - question, [1] - count */
    const [question, answer] = getGameQuestionAndAnswer(minRandomValue, maxRandomValue);

    console.log(`Question: ${question}`);
    playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

const playEvenGame = () => runGame(getEvenRules, getEvenQuestionAndAnswer);
const playCalcGame = () => runGame(getCalcRules, getCalcQuestionAndAnswer);
const playGCDGame = () => runGame(getGCDRules, getGCDQuestionAndAnswer);
const playProgressionGame = () => runGame(getProgressionRules, getProgressionQuestionAndAnswer);
const playPrimeGame = () => runGame(getPrimeRules, getPrimeQuestionAndAnswer);

export {
  /* _eslint vs prettier ))) */
  playEvenGame,
  playCalcGame,
  playGCDGame,
  playProgressionGame,
  playPrimeGame,
};
