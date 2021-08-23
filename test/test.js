const assert = require('assert');
const { permuteUnique } = require('../index');
describe("TEST", () => {
  it("testHappy", () => {
    assert.deepEqual(permuteUnique([1, 1, 2]), [
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1]
    ])
    assert.deepEqual(permuteUnique([1, 2, 3]), [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ])
    assert.deepEqual(permuteUnique([1]), [
      [1]
    ])
    assert.deepEqual(permuteUnique([]), [])
    assert.deepEqual(permuteUnique([0, 1]), [
      [0, 1],
      [1, 0]
    ])
  });

  it("testUnhappy", () => {
    assert.equal(permuteUnique([1, 2, 3, 4, 5, 6, 7, 8, 9]), false)
  });
});
