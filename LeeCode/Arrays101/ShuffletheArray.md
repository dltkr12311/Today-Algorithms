# Shuffle the Array

<b>Example 1:</b>

```js
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
```

<b>Example 2:</b>

```js
Input: (nums = [1, 2, 3, 4, 4, 3, 2, 1]), (n = 4);
Output: [1, 4, 2, 3, 3, 2, 4, 1];
```

<b>Example 3:</b>

```js
Input: (nums = [1, 1, 2, 2]), (n = 2);
Output: [1, 2, 1, 2];
```

<b>풀이</b>

```js
var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
};
```
