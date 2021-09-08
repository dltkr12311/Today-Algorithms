/*
소수 찾기
  ;문제 설명
  1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

  소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
  (1은 소수가 아닙니다.)

  제한 조건
  n은 2이상 1000000이하의 자연수입니다.
  입출력 예
  n	result
  10	4
  5	3
  입출력 예 설명
  입출력 예 #1
  1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

  입출력 예 #2
  1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
*/

//에라토스테네스의 체
// 배열에 값들을 담고 소수인 자기 자신을 제외한 배수들을 0으로 만들고
// 0을 제거한 후 나머의 값의 길이를 반환한다.
function solution(n) {
  let newArr = [];
  for (let i = 1; i <= n; i += 1) {
    newArr.push(i);
  }

  for (let i = 1; i * i < n; i += 1) {
    if (newArr[i]) {
      let n2 = newArr[i];
      for (let j = n2 * n2; j <= n; j += n2) {
        newArr[j - 1] = 0;
      }
    }
  }
  let result = newArr.filter((n) => n);
  result.shift();
  return result.length;
}

console.log(solution(10));
