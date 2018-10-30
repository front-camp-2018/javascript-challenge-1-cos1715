export const sortByWeight = arr => {
  const sumWeight = item => {
    return item.split('').reduce((sum, current) => {
      return sum + Number(current);
    }, 0);
  };

  arr.sort((elem1, elem2) => sumWeight(elem1) - sumWeight(elem2));
  return arr;
};
