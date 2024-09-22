class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const first = s.split('').sort().join('')
    const second = t.split('').sort().join('')
    if (first === second) return true
    return false
  }
}

const solution = new Solution()
console.log(solution.isAnagram('racecar', 'carrace'))
console.log(solution.isAnagram('jar', 'jam'))
