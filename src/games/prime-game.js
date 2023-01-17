import getRandomIntInclusive from '../getRandomIntInclusive.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const getPrimeRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeQuestionAndCount = (minRandomValue, maxRandomValue) => {
  /* get random number (question) in given range */
  const question = getRandomIntInclusive(minRandomValue, maxRandomValue);

  /* count a correct answer */
  const count = isPrime(question) ? 'yes' : 'no';

  return [question, count];
};

export { getPrimeRules, getPrimeQuestionAndCount };
