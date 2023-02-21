import getRandomIntInclusive from '../getRandomIntInclusive.js';

const getProgressionRules = () => 'What number is missing in the progression?';

const getProgressionQuestionAndAnswer = (minRandomValue, maxRandomValue) => {
  const aFirst = getRandomIntInclusive(minRandomValue, maxRandomValue);

  /* set range for difference (d) of successive members (i will use [-5,+5]) */
  const dMin = -5;
  const dMax = 5;

  const d = getRandomIntInclusive(dMin, dMax);

  /* set the number of members (n) of the arithmetic progression (i will use 10) */
  const n = 10;

  const nHidden = getRandomIntInclusive(1, n);

  /* form the progression array */
  const aArray = [aFirst];
  for (let i = 1; i < n; i += 1) {
    aArray.push(aArray[i - 1] + d);
  }

  /* hide the desired member of the progression and correct answer */
  const answer = `${aArray[nHidden - 1]}`;
  aArray[nHidden - 1] = '..';

  const question = aArray.join(' ');

  return [question, answer];
};

export { getProgressionRules, getProgressionQuestionAndAnswer };
