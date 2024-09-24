class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const targetNums = {}

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]

      if (complement in targetNums) {
        return [targetNums[complement], i]
      }

      targetNums[nums[i]] = i
    }

    return []
  }
}

const solution = new Solution()
const result = solution.twoSum([4, 5, 6], 10)
console.log(result, 'result')
