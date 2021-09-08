# Find Numbers with Even Number of Digits

<b>Example 1:<b>

```js
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
```

<b>Example 2:</b>

```js
Input: nums = [555,901,482,1771]
Output: 1
Explanation:
Only 1771 contains an even number of digits.
```

<b>풀이</b>

```js
var findNumbers = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let numStr = nums[i].toString();
    if (numStr.length % 2 === 0) {
      result++;
    }
  }
  return result;
};

/*
  배열인 nums가 주워졌다 nums안에서 짝수 자릿수 떨어지는 숫자는 몇개인지 카운트해서 반환해야 할꺼 같다.
  
   카운트 할 숫자를 변수로 할당한다. 
   for문을 돌려 반복하고, 
   나오는 각 숫자를 문자열로 바꾸고 
   각 숫자의 길이가 짝수면 카운트 한다.
*/
```
