# 1588. Sum of All Odd Length Subarrays

<b>Example 1:</b>

```js
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
```

<b>Example 2:</b>

```js
Input: arr = [1,2]


Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
```

<b>Example 3:</b>

```js
Input: arr = [10, 11, 12];
Output: 66;
```

<b>풀이</b>

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      counter++;
      sum += arr[j];
      if (counter % 2 === 1) {
        result.push(sum);
      }
    }
  }

  return result.reduce((acc, cur) => acc + cur);
};
// 1,7,15
// 4,11
// 2,10
// 5,
// 3
//[1, 7, 15, 4, 11, 2, 10, 5, 3]
/*
arr 배열이 주워졌는데 홀수 길이를 모두 더해야 한다.
  
pseudocode
 카운트 변수와 초기값 0 sum이라는 변수에 할당하고,중첩 반복문을 돌린다.
 홀수 카운트만 result에 넣는다. 다 넣었으면 나와서 reduce를 통해 result값들을 더한다.

*/
```
