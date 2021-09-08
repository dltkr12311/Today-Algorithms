/*
문제 설명
  왼손 오른손 엄지 손가락만을 이용해서 숫자를 입력한다.
  맨 처음 왼손 엄지는 *에 오른손 엄지는 #에 위치해서 시작한다.
  엄지 손가락은 상하좌우 4가지 방향으로 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당한다.
  1,4,7은 왼손 엄지로 사용하고, 3,6,9은 오른손 엄지를 사용한다.
  2,5,8,0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 가까운 엄지손가락을 사용한다.
  만약 두 엄지 손가락의 거리가 갔다면, 오른손잡이는 오른손 엄지, 왼손잡이는 왼손 엄지를 사용한다.

  순서대로 누를 번호가 담긴 배열 numbers, 오른손잡이인지 왼손잡이인 지를 나타내는 문자열 hand가 매개변수로
  주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 반환해라.

*/

function solution(numbers, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  const position = numbers.map((num) => {
    const posY = keypad
      .map((arr, index) => {
        if (arr.includes(num)) return 4 - index;
        return -1;
      })
      .filter((num) => num !== -1);

    const posX = keypad
      .filter((arr) => arr.includes(num))
      .map((dialogArr) =>
        dialogArr
          .map((dialog, index) => {
            if (dialog === num) return index + 1;
            return -1;
          })
          .filter((num) => num !== -1)
      )[0];

    return [posX[0], posY[0]];
  });

  const result = [];
  position.reduce(
    (currentPosition, movePosition) => {
      const leftDis =
        Math.abs(currentPosition[0][0] - movePosition[0]) +
        Math.abs(currentPosition[0][1] - movePosition[1]);
      const rightDis =
        Math.abs(currentPosition[1][0] - movePosition[0]) +
        Math.abs(currentPosition[1][1] - movePosition[1]);

      if (movePosition[0] === 1) {
        result.push("L");
        return [movePosition, currentPosition[1]];
      } else if (movePosition[0] === 3) {
        result.push("R");
        return [currentPosition[0], movePosition];
      } else {
        if (leftDis < rightDis) result.push("L");
        if (leftDis > rightDis) result.push("R");
        if (leftDis === rightDis) {
          if (hand === "right") {
            result.push("R");
          } else {
            result.push("L");
          }
        }
        if (hand === "right") {
          return leftDis < rightDis
            ? [movePosition, currentPosition[1]]
            : [currentPosition[0], movePosition];
        }
        return leftDis <= rightDis
          ? [movePosition, currentPosition[1]]
          : [currentPosition[0], movePosition];
      }
    },
    [
      [1, 1],
      [3, 1],
    ]
  );
  return result.join("");
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
