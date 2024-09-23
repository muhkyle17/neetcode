class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const targetNums = {}

    // targetNums[0] = nums[0]
    for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          console.log(`It is nums${i} + nums${j}`)
          // targetNums[i] = nums[i]
          // targetNums[j] = nums[j]
        }
      }
    }

    return targetNums
  }
}

const solution = new Solution()
// const sum = solution.twoSum([3,4,5,6], 7)
const sum = solution.twoSum([4, 5, 6], 10)
console.log(sum, 'sum')
