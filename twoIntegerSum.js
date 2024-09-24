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

    for (let index = 0; index < nums.length; index++) {
      const num = nums[index]
      const complement = target - num
      const sumIndex = map.get(complement)

      const isTarget = map.has(complement)
      if (isTarget) {
        return [index, sumIndex]
      }

      map.set(num, index)
    }

    return [-1, -1]
  }
}

const solution2 = new Solution2()
const result2 = solution2.twoSum([4, 5, 6], 10)
console.log(result2, 'result2')
