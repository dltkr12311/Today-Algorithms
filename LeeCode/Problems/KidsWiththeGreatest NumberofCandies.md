# 1431. Kids With the Greatest Number of Candies

<b>Example 1:</b>

```js
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
Explanation: If you give all extraCandies to:

- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
```

<b> Example 2:</b>

```js
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false]
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
```

<b>Example 3:</b>

```js
Input: (candies = [12, 1, 12]), (extraCandies = 10);
Output: [true, false, true];
```

### 풀이

```js
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let max = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

//가장 큰 캔디가 최대한 많아야 한다.
// example1 에는 5가 제일 큰 수이다. 큰 수에 맞출려면 추가 캔디 활용을 잘 해야 한다.
// example2 에는 4가 제일 큰 수이다. 추가 캔디가 1이므로 첫번째 아이 빼고 모두 false이다.
// example3은 12가 제일 크다. 추가 캔디가 10개인데 두번째 아이는 추가 캔디를 더해도 12가 될 수 없기 때문에 1번, 3번 아이가 true가 된다.
```
