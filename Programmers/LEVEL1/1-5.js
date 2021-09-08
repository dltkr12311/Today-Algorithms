//문자열 뒤집기

function solution(str) {
  let newStr = str.split("").reverse().join("");
  return newStr;
}

console.log("Ebbing Project Start");

//문자열을 문자 단위로 나누고 뒤집은 다음에,
// 문자 단위를 다시 합쳐서 반환한다.
