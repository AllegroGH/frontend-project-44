import getRandomIntInclusive from '../getRandomIntInclusive.js';

const getProgressionRules = () => 'What number is missing in the progression?';

const getProgressionQuestionAndCount = (minRandomValue, maxRandomValue) => {
  /* get random number in common given range (set initial term of the arithmetic progression) */
  const aFirst = getRandomIntInclusive(minRandomValue, maxRandomValue);

  /* set range for difference (d) of successive members (i will use [-5,+5]) */
  const dMin = -5;
  const dMax = 5;
  /* get random number in given range (set difference of successive members) */
  const d = getRandomIntInclusive(dMin, dMax);

  /* set the number of members (n) of the arithmetic progression (i will use 10) */
  const n = 10;
  /* get random number in [1, n] range (set the number of the hidden member of the progression) */
  const nHidden = getRandomIntInclusive(1, n);

  /* form the progression array */
  const aArray = [aFirst];
  for (let i = 1; i < n; i += 1) {
    aArray.push(aArray[i - 1] + d);
  }

  /* hide the desired member of the progression and count a correct answer */
  const count = `${aArray[nHidden - 1]}`;
  aArray[nHidden - 1] = '..';

  /* form a question string */
  const question = aArray.join(' ');

  return [question, count];
};

export { getProgressionRules, getProgressionQuestionAndCount };
