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

// const solution = new Solution()
// console.log(solution.isAnagram('racecar', 'carrace'))
// console.log(solution.isAnagram('jar', 'jam'))

class Solution2 {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false
    }

    const countS = {}
    const countT = {}

    for (let i = 0; i < s.length; i++) {
      // countS[s[i]] = 1 + (countS[s[i]] || 0)
      countS[s[i]] = 'hi'
      countT[t[i]] = 1 + (countT[t[i]] || 0)
    }

    console.log(countS, 'countS')
    console.log(countT, 'countT')

    for (const key in countS) {
      if (countS[key] !== countT[key]) {
        return false
      }
    }

    return true
  }
}

const solution2 = new Solution2()
console.log(solution2.isAnagram('racecar', 'carrace'))
console.log(solution2.isAnagram('jar', 'jam'))
