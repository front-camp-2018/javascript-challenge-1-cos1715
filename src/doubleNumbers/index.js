export const doubleNum = num => {
  const str = num.toString();
  const strFirstHalf = str.slice(0, str.length / 2);
  const strSecondHalf = str.slice(str.length / 2);

  if (strFirstHalf === strSecondHalf) {
    return num;
  }
  return Number(str) * 2;
};
