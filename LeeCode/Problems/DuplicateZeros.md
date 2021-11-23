# 1089.Duplicate Zeros

- Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right. <br/>

- Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.<br/>

<b>Example1:</b>

```
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
```

<b>Example2:</b>

```
Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
```

### 풀이

```js
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
      arr.pop();
    }
  }
};

/*
  길이가 고정되어 있는 배열 내에 숫자0을 복사한다. 숫자 0이 복사되면 기존의 뒤에 있는 숫자는 밀리게 된다.
*/
```
