export const minNumber = 1;
export const maxNumber = 20;
export const maxQuestionsNumber = 3;

export const getRandomInteger = (min, max) => {
  const randomInteger = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  return randomInteger;
};
