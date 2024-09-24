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

class Solution2 {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      const complement = target - num
      const sumIndex = map.get(complement)

      const isTarget = map.has(complement)
      if (isTarget) {
        return [i, sumIndex]
      }

      map.set(num, i)
    }

    return [-1, -1]
  }
}

const solution2 = new Solution2()
const result2 = solution2.twoSum([4, 5, 6], 10)
console.log(result2, 'result2')
