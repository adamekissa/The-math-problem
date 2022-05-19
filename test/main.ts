import findPairs from "../main";
import { expect } from 'chai';
import 'mocha';

describe('Find pairs of integers that adds to equal 100', () => {
  it('Should return all pairs of integers that add up to 100', () => {
    const intList = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51, 49, 50, 51, 49, 51];
    const value = 100;
    const pairList = findPairs(value, intList);
    const expected = [ [ 0, 100 ], [ 1, 99 ], [ 10, 90 ], [ 49, 51 ], [ 50, 50 ] ];
    // assert;
    expect(pairList).to.deep.equal(expected);
  });
});