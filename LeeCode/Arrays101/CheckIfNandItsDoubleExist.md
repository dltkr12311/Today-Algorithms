# Check If N and Its Double Exist

- Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 \* M).

- More formally check if there exists two indices i and j such that : <br/>
  `i != j` <br/>
  `0 <= i, j < arr.length`<br/>
  `arr[i] == 2 * arr[j]`

<b>Example 1:</b>

```js
Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 \* 5.
```

<b>Example 2:</b>

```js
Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 \* 7.
```

<b>Example 3:</b>

```js
Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 \* M.
```

<b>풀이</b>

```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
let checkIfExist = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (result.indexOf(arr[i] * 2) !== -1 || result.indexOf(arr[i] / 2) !== -1)
      return true;
    result.push(arr[i]);
  }
  return false;
};

/*
  새로운 배열을 만든다.(빈 배열)
  arr의 길이 전까지 반복문을 돌린다.
  새로 만든 배열에 자신의 수 곱하기 2를 하거나 나누기 2를 할때 같은 수가 있다면 true를 반환한다.
  없다면 새로운 배열에 값을 담는다.
  반복문 다 돌렸는데 같은 수가 없다면 false를 반환한다.

  arr의 정수가 들어있는데 arr[n] * 2의 값이 arr안의 들어있으면,
  ture를 반환하고 아니라면 fasle를 반환한다.
*/
```
