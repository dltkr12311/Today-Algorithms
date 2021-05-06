// 종류에 따라 번호를 붙여 구분한다 같은 종류의 포켓몬은 같은 번호를 가지고 있다.
// 주인공은 최대한 다양한 종류의 포켓몬을 가지기 때문에,
// 최대한 많은 종류의 포켓몬을 포함해서 N/2마리를 선택하려 한다.
// 가장 많은 종류의 포켓몬을 선택하는 방법을 찾아, 포켓몬 종류 번호의 개수를 반환해야 한다.

/*
  nums	         result
  [3,1,2,3]	      2
  [3,3,3,2,2,4]	  3
  [3,3,3,2,2,2]	  2
*/

// 1.
function solution(nums) {
  let arr = [];
  let numDivision = nums.length / 2;
  //nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      arr.push(nums[i]);
    }
  }
  return arr.length <= numDivision ? arr.length : numDivision;
}
//2 .
function solution(nums) {
  let deduplicationPoketMon = new Set(nums);

  const result =
    deduplicationPoketMon.size > nums.length / 2 ? nums.length / 2 : deduplicationPoketMon.size;

  return result;
}
