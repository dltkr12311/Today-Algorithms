/*
문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.
입출력 예
n	return
12345	[5,4,3,2,1]
*/

function solution(n) {
  let rN = n
    .toString()
    .split("")
    .reverse()
    .map((a) => Number(a));
  return rN;
}

console.log(solution(12345));

//주어진 자연수를 뒤집어 배열의 형태로 리턴하라.
//n의 split을 사용하여서 각 하나씩 쪼개고 뒤집은 다음 배열로 담아서 리턴
