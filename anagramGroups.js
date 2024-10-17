class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    // strs -- for each strs -- check for anagrams
    // tops === pots -- [tops, pots]
    // array.push an array of same anagrams

    let array = []
    strs.map(str => {
      const values = str.split('').sort().join('')
      array.push(values)
    })

    // console.log(array, 'array')

    for (let i = 0; i <= array.length; i++) {
      // console.log(array[i])
    }

    return array
  }
}

// const solution = new Solution()
// console.log(solution.groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']), 'output')

class Solution2 {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */

  groupAnagrams(strs) {
    const res = {}
    for (let str of strs) {
      const count = new Array(26).fill(0)
      for (let char of str) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
      }

      const key = count.join(',')
      if (!res[key]) {
        res[key] = []
      }
      res[key].push(str)
    }
    return Object.values(res)
  }
}

const solution2 = new Solution2()
console.log(solution2.groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']))
