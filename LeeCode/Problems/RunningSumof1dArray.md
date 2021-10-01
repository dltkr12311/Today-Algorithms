# Running Sum of 1d Array

- Given an array nums. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`
- Return the running sum of `nums`.

<b>Example 1:</b>

```js
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

<b>Example 2:</b>

```js
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

<b>Example 3:</b>

```js
Input: nums = [3, 1, 2, 10, 1];
Output: [3, 4, 6, 16, 17];
```

<b>풀이</b>

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
};

// 더한 값들을 담을 빈 배열을 만든다.
// 기본 값 0을 설정한다.
// nums를 순회한다.
// nums[i]를 sum에 추가한다.
// sum의 값을 새로운 배열에 담고 반환한다.
```
