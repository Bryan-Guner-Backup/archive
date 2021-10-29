// Leetcode #219
// Language: Javascript
// Problem: https://leetcode.com/problems/contains-duplicate-ii/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function (nums, k) {
  if (k <= 0) {
    return false;
  }

  if (nums === null || nums.length === 0) {
    return false;
  }

  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (hash[val] !== undefined) {
      if (i - hash[val] <= k) {
        return true;
      } else {
        hash[val] = i;
      }
    } else {
      hash[val] = i;
    }
  }

  return false;
};