/*
내적
문제 설명
길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

제한사항
a, b의 길이는 1 이상 1,000 이하입니다.
a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
입출력 예
a	b	      result
[1,2,3,4]	[-3,-1,0,2]	3
[-1,0,1]	[1,0,-1]	-2
입출력 예 설명
입출력 예 #1

a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.
입출력 예 #2

a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.
*/

function solution(a, b) {
  return a.reduce((acc, curr, inx) => (acc += curr * b[inx]), 0);
}

/*
  내 풀이 방법 최악임....
    let result = 0;
    let sum = 0;
    let j = 0
    for(let i =0; i < a.length; i++) {
        sum = 0;
        while(j < b.length) {
          sum = a[i] * b[j];
          result += sum;
          j++;
          break
         
        }
    }
    return result;
    
    남의 풀이 1
        return a.reduce((acc,curr,inx) => acc += curr *b[inx], 0);
    
    남의 풀이 2
        let result = 0;
        for (let i = 0; i < a.length; i ++) {
            result += a[i] * b[i];
        }
        return result;
*/

/*
    a와  b는 배열로 되어있는데, a의 current와 b의 current를 곱하여서 누적값을 쌓는다. 그리고 리턴한다.
    
    a와 b를 전체적으로 돌으면서 해당 current 값끼리 곱해서 값을 누적시켜야 햔다.

*/
