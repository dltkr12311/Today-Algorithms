# 버블정렬

```jsx
function bubbleSort(arr) {
	for(let i = 0; i < arr.length; i++) {
		let swap;
		for(let j = 0; j < arr.length - 1 - i; j++) {
			if(arr[j] > arr[j + 1]) {
				swap = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = swap;
			}
		}
		if(!swap) {
		break;
	}
	return arr;
}

bubbleSort([100, 55, 12, 62, 23, 1, 10, 39, 44]);
```

swap이라는 변수를 만들어서 현재 숫자와 다음 숫자를 비교해서 현재 숫자가 더 크면 자리를 교환한다.

그래서 Swap에 현재 숫자를 할당한다.
