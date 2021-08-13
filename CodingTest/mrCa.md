**pseudoCode**

### 1. 카운트 할 모음 객체를 정의한다.

```jsx
let cons = {
  ㄱ: 0,
  ㄴ: 0,
  ㄷ: 0,
  ㄹ: 0,
  ㅁ: 0,
  ㅂ: 0,
  ㅅ: 0,
  ㅇ: 0,
  ㅈ: 0,
  ㅊ: 0,
  ㅋ: 0,
  ㅌ: 0,
  ㅍ: 0,
  ㅎ: 0,
};
```

### 2. input으로 들어오는 값을 초성으로 변환한다.

```jsx
let cho = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
let resultCho = "";
for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i) - 44032;
  if (code > -1 && code < 11172) {
    resultCho += cho[Math.floor(code / 588)];
  }
}
console.log(resultCho); // 'ㅅㄱㅎㄹㅇㄱㄴㅅㅂㄷ'
```

### 3. 모음 객체와 비교해서 동일하다면 카운트 한다.

```jsx
for (let key in cons) {
  for (let cho of resultCho) {
    if (key === cho) cons[key]++;
  }
}
```

### 4. 카운트가 적용된 값을 반환한다.

### 전체 코드

```jsx
function solution(str) {
  let cons = {
    ㄱ: 0,
    ㄴ: 0,
    ㄷ: 0,
    ㄹ: 0,
    ㅁ: 0,
    ㅂ: 0,
    ㅅ: 0,
    ㅇ: 0,
    ㅈ: 0,
    ㅊ: 0,
    ㅋ: 0,
    ㅌ: 0,
    ㅍ: 0,
    ㅎ: 0,
  };
  let cho = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  let resultCho = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i) - 44032;
    if (code > -1 && code < 11172) {
      resultCho += cho[Math.floor(code / 588)];
    }
  }
  for (let key in cons) {
    for (let cho of resultCho) {
      if (key === cho) cons[key]++;
    }
  }
  return cons;
}

solution("사과1호랑이,고니 수박BT닭");

/*
  {
	  'ㄱ': 2,
	  'ㄴ': 1,
	  'ㄷ': 1,
	  'ㄹ': 1,
	  'ㅁ': 0,
	  'ㅂ': 1,
	  'ㅅ': 2,
	  'ㅇ': 1,
	  'ㅈ': 0,
	  'ㅊ': 0,
	  'ㅋ': 0,
	  'ㅌ': 0,
	  'ㅍ': 0,
	  'ㅎ': 1
	}
*/
```
