# Valid Mountain Array

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

- `arr.length >= 3`
- There exists some i with `0 < i < arr.length - 1` such that:
  - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
  - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`

<b>Example 1:</b>

```js
Input: arr = [2, 1];
Output: false;
```

<b>Example 2:</b>

```js
Input: arr = [3, 5, 5];
Output: false;
```

<b>Example 3:</b>

```js
Input: arr = [0, 3, 2, 1];
Output: true;
```

```js
var validMountainArray = function(arr) {
let increasing = false;
let decreasing = false;
for(let i = 1, j = 0; i < arr.length; i++, j++) {
if(arr[j] < arr[i] && !decreasing) {
increasing = true;
continue;
}
decreasing = true;
if(arr[j] <= arr[i]) return false;
}
return increasing && decreasing;
};

/_
처음에는 다음숫자가 커야 한다. 그 다음 수가 크거나 작다면 true를 반환 동적으로 코드를 작성해야 한다.
처음에 같거나 크지 않다면 false를 반환
_/
```
