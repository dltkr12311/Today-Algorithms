// 프로그래머스 기능개발

// 기능 개선 작업을 수행중인데 각 기능은 진도가 100%일 때 서비스에 반영 할 수 있다.
// 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발 될 수 있고,
// 이 때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다.

/*
  progresses	              speeds	            return
  [93, 30, 55]	            [1, 30, 5]	        [2, 1]
  [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
*/

function solution(progresses, speeds) {
  let result = [];
  let deployTotalDay = 0;
  progresses.map((progress, index) => {
    let presentDay = Math.ceil((100 - progress) / speeds[index]);
    if (presentDay > deployTotalDay) {
      result.push(1);
      deployTotalDay = presentDay;
    } else {
      result[result.length - 1]++;
    }
  });
  return result;
}
