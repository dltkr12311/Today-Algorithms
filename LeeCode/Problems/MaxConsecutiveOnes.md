# Max Consecutive Ones

- Given a binary array nums, return the maximum number of consecutive 1's in the array.

<b>Example 1:</b>

```js
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
```

<b>Example 2:</b>

```js
Input: nums = [1, 0, 1, 1, 0, 1];
Output: 2;
```

<b>풀이</b>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      result.push(count);
    } else {
      count = 0;
    }
  }
  return Math.max(count, ...result);
};

//1초가 연속적으로 최대로 몇개 있는지 카운트 한다.
// 중첩 for문으로 돌린다. next숫자가 1이면 카운트 아니면 다시 0으로 돌린다??
```
