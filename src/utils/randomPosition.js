export const getRandomInteger = (min, max) => {
  //min부터 max까지
  const randomInteger = Math.floor(Math.random() * (max - min)) + min;
  console.log("randomInteger :", randomInteger);
  return randomInteger;
};
