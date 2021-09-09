# Squares of a Sorted Array

Example 1:

```js
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

Example 2:

```js
Input: nums = [-7, -3, 2, 3, 11];
Output: [4, 9, 9, 49, 121];
```

```js
var sortedSquares = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = Math.abs(nums[i] * nums[i]);
    result.push(sum);
  }
  return result.sort((a, b) => a - b);
};

/*
  배열안에 각 수에 제곱배열을 하고, 내림차순으로 정렬하여서 반환한다.
  
  빈 배열을 만들고, for문으로 돌린다.
  제곱 하면서 절대값으로 바꾸고, 빈 배열에 넣는다.
  내림차순으로 정렬하고 반환한다.
*/
```
