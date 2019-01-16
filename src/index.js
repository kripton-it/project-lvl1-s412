import readlineSync from 'readline-sync';
import { maxQuestionsNumber } from './help';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  getUserName();
};

export const play = (description, askQuestion, calcAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = getUserName();

  for (let score = 0; score < maxQuestionsNumber; score += 1) {
    const question = askQuestion();
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calcAnswer(question);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }

  console.log(`Congratulations, ${userName}!`);
};
