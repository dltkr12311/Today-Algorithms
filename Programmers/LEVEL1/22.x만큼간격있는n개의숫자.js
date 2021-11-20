/*
x만큼 간격이 있는 n개의 숫자
문제 설명
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

제한 조건
x는 -10000000 이상, 10000000 이하인 정수입니다.
n은 1000 이하인 자연수입니다.
입출력 예
x	n	answer
2	5	[2,4,6,8,10]
4	3	[4,8,12]
-4	2	[-4, -8]
*/

function solution(x, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}
console.log(solution(2, 5));
//console.log(solution(4, 3))
//console.log(solution(-4, 2))

// x의 정수를 n만큼 x를 구해라
// n만큼 순회를 하고, 돌때마다 x의 배수를 배열에 담아야 한다.
