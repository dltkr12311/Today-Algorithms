# 홀수

7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들중 최소값을 찾는 프로그램을 작성하세요. <br/>
예를 들어, 7개의 `12, 77, 38, 41, 53, 92, 85`가 주어지면 이들 중 홀수는 `77, 41, 53, 85`이므로 그 합은 `256`가 되고 홀수들 중 최소값은 41이 된다.

<b>입력 설명</b>

- 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.

<b>출력설명</b>

- 첫째 줄에 홀수들이 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.

<b>입력예제 1</b>
12, 77, 38, 41, 53, 92, 85

<b>출력예제 1</b>
256
41

```js
function sloution(arr) {
  let sum = 0;
  let addNum = [];
  for (let i of arr) {
    if (i % 2 === 1) {
      sum += i;
      addNum.push(i);
    }
  }
  let min = Math.min(...addNum);
  let result = [sum, min];

  return result;
}

console.log(sloution([12, 77, 38, 41, 53, 92, 85]));
/*
  홀수 총 더할 변수를 만들고, 홀수 값이 담길 배열을 만든다.
  arr를 반복하면서 홀수 값일 경우 값을 더해서 누적하고 새로운 배열에 담는다.
  새로운 배열에서 최소값을 찾은 후 다시 총합과 최소값을 배열에 담고 반환한다.
*/
```
