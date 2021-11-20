/*
  문제 설명
  어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.  

  수도 코드
  정수들이 있는데 이 정수들의 절대값을 차례대로 담은 absolutes 배열이 있고
  이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어진다.
  실제 정수들의 합을 구하여 반환해라.
  해당 signs의 위치에 absolutes가 false라면 음수로 변환 해주고 배열안에 총 합을 더한다.
*/

function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, idx) => acc + cur * (signs[idx] ? 1 : -1), 0);
}

solution([4, 7, 12], [true, false, true]);

/*
  ver.1
    let result = [];
    for (let i =0; i < absolutes.length; i++) {
        if(absolutes[i] && signs[i] === false ) {
            absolutes[i] = absolutes[i] * -1;
            result.push(absolutes[i]);
        } else {
            result.push(absolutes[i])
        }
    }
  return result.reduce((acc, cur) => {
     return acc + cur
  }, 0)
*/
