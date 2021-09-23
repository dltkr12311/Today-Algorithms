# Number of Good Pairs

- Given an array of integers nums, return the number of <b>good pairs</b>.

- A pair `(i, j)` is called good if `nums[i] == nums[j]` and `i < j`.

<b>Example 1:</b>

```js
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
```

<b>Example 2:</b>

```js
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
```

<b>Example 3:</b>

```js
Input: nums = [1, 2, 3];
Output: 0;
```

<b>풀이</b>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        result++;
      }
    }
  }
  return result;
};

// good pair를 return 해야 함.

//for문으로 돌리고, 초기 숫자 변수를 지정한다
// 조건이 맞으면 초기 숫자로 넣는다.
// 마지막으로 초기 숫자를 반환한다.
```
