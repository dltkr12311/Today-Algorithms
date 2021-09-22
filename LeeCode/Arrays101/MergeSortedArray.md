# Merge Sorted Array

<b>Example 1:</b>

```js
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

<b>Example 2:</b>

```js
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

<b>Example 3:</b>

```js
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fi
```

<b>풀이</b>

```js
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length, ...nums2);
  nums1.sort((a, b) => a - b);
  return nums1;
};

/*
  m 과 n은 길이다. nums2를 nums1에 병합해야 한다.
  배열을 합치고 0을 지운다.
  
*/
```
