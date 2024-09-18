class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let boolean = false
    for (let i = 0; i <= nums.length; i++) {
      console.log(nums.indexOf(nums[i]), 'nums.indexOf')
      console.log(nums.lastIndexOf(nums[i]), 'lastIndexOf')
      if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
        boolean = true
      }
    }

    return boolean
  }
}

class Solution2 {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const numsSet = new Set()
    for (const num of nums) {
      if (numsSet.has(num)) return true

      numsSet.add(num)
    }
    console.log(numsSet, 'numSet')

    return false
  }
}
