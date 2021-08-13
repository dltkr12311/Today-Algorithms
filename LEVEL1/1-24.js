/*
시저 암호
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
입출력 예
s	         n	    result
"AB"	     1   	  "BC"
"z"	       1	     "a"
"a B z"	   4	     "e F d"
*/

function solution(s, n) {
  return s
    .split("")
    .map((v) => {
      if (v === " ") return v;
      return v.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(v.charCodeAt() + n - 26)
        : String.fromCharCode(v.charCodeAt() + n);
    })
    .join("");
}

console.log(solution("A,B", 1));

/*
이번문제는 풀지 못하여서 블로그를 참고하였습니다.
https://kimyang-sun.tistory.com/102 
풀이입니다. 아스키코드값을 이용합니다.
문자열 s를 split("")으로 배열로 만들어주고 map()을 이용합니다.
배열 수만큼 반복하면서 v 값이 " " 공백, 즉 띄어쓰기라면 그대로 띄어쓰기를 리턴해주고
v를 대문자로 변화시킨 값에 n을 더한 값이 90을 넘어가면 Z를 넘어가는 값이기 때문에
다시 처음 A로 돌아가기 위해 아스키코드값에 +4한 값에 - 26을 해준 값을 문자열로 변화시켜서 리턴해줍니다.
그렇지 않을때는 주어진 값의 아스키코드값에 +4한 값을 다시 문자열로 변화시켜서 리턴해줍니다.
charCodeAt()은 해당하는 문자의 아스키코드값을 반환해주고,
String.fromCharCode()는 해당하는 아스키코드 숫자의 문자를 반환해줍니다.
*/
