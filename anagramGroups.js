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
