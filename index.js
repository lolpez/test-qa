const permuteUnique = (nums) => {
  if (nums.length > 8) return false;
  const iteration = (arr) => {
    let iterationResult = [];
    if (arr.length === 1) {
      return [arr];
    }
    for (let i = 0; i < arr.length; i++) {
      let other = arr.slice(0, i).concat(arr.slice(i + 1))
      let remainingElements = iteration(other);
      for (let j = 0; j < remainingElements.length; j++) {
        remainingElements[j].unshift(arr[i]);
        iterationResult.push(remainingElements[j]);
      }
    }
    return iterationResult;
  }
  const result = iteration(nums);
  return result.filter((tempObject = {}, elementArray => !(tempObject[elementArray] = elementArray in tempObject)));
};

const simpleTest = () => {
  console.log(permuteUnique([1, 1, 2]));
};

simpleTest();

module.exports = {
  permuteUnique,
};
