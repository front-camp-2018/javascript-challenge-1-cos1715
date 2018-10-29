export const sortByWeight = arr => {
  arr.sort((elem1, elem2) => {
    const result1 = elem1.split('').reduce((sum, current) => {
      return sum + parseInt(current);
    }, 0);
    const result2 = elem2.split('').reduce((sum, current) => {
      return sum + parseInt(current);
    }, 0);
    return result1 - result2;
  });
  return arr;
};
