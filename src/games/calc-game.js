import getRandomIntInclusive from '../getRandomIntInclusive.js';

const getCalcRules = () => 'What is the result of the expression?';

const getCalcQuestionAndCount = (minRandomValue, maxRandomValue) => {
  /* get random numbers in given range */
  const num1 = getRandomIntInclusive(minRandomValue, maxRandomValue);
  const num2 = getRandomIntInclusive(minRandomValue, maxRandomValue);
  /* define operation types */
  const operations = ['+', '-', '*'];
  /* generate operation type */
  const operation = operations[getRandomIntInclusive(0, operations.length - 1)];
  /* form a question string */
  const question = `${num1} ${operation} ${num2}`;

  /* count a correct answer */
  let count;
  switch (operation) {
    case '+':
      count = num1 + num2;
      break;
    case '-':
      count = num1 - num2;
      break;
    case '*':
      count = num1 * num2;
      break;
    default:
  }
  count = `${count}`; // data type conversion

  return [question, count];
};

export { getCalcRules, getCalcQuestionAndCount };
