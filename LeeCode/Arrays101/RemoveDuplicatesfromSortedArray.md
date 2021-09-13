# Remove Duplicates from Sorted Array

<b>Example 1:</b>

```js
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

<b>Example 2:</b>

```js
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

```js
var removeDuplicates = function (nums) {
  let result = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[result++] = nums[i + 1];
    }
  }
  return result;
};

/*
  배열안에 중복된 숫자가 있다면 제거하고 반환해야 한다.
  현재 숫자와 다음숫자 같으면 제거한다.
*/
```
