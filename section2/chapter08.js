//5가지 요소 순회 및 탐색 메서드

//1. forEach
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) { 
    console.log(item, idx * 2);
});
//콜백함수가 선언됨, 매개변수로 요소, 인덱스, 배열 전달, 요소와 (인덱스 * 2)의 동작을 수행 후 출력 

let doubledArr = [];

arr1.forEach((item, idx, arr) => {
    doubledArr.push(item * 2);
});
console.log(doubledArr);
//콜백함수가 선언됨, 요소 * 2를 doubledArr 배열에 저장 후 출력

//2. includes
//배열에 특정 요소가 있는지 확인하는 메서드, true, false를 반환함.

let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);
//true 출력

let isInclude2 = arr2.includes(10);
console.log(isInclude2);
//false 출력

//3. indexOf
//특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);
//1 출력

let arr31 = [2, 2, 2];
let index31 = arr31.indexOf(2);
console.log(index31);
//0 출력 (가장 앞의 2의 인덱스를 반환함)

let arr32 = [1, 2, 3];
let index32 = arr32.indexOf(20);
console.log(index32);
//-1 출력 (값이 존재하지 않는다는 의미로 -1 반환)

//4. findIndex
//모든 요소를 순회하면서, 콜백함수를 만족하는
//특정 요소의 인덱스를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
    if(item === 2) return true;
});

console.log(findedIndex);
//1 (2의 인덱스) 출력

const findedIndex2 = arr4.findIndex((item) => {
    if(item % 2 !== 0) return true;
});

console.log(findedIndex2);
//0 (맨 처음 홀수인 1의 인덱스) 출력

/*
const findedIndex2 = arr4.findIndex((item) => item % 2 !== 0);
이렇게 간단히 작성해도 됨.
 */


//indexOf와 findIndex의 차이점
let objectArr = [
    {name : "정선아"},
    {name : "홍길동"},
];

console.log(
    objectArr.indexOf({name : "정선아"})
);
//-1 출력 : 값을 찾지 못함

console.log(
    objectArr.findIndex((item) => item.name === "정선아")
);
//0출력 : 인덱스 0을 찾음

//단순한 원시타입 인덱스를 찾을 때 -> indexOf
//복잡한 객체타입 인덱스를 찾을 때 -> findIndex

//5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아 요소 그대로 반환

let arr5 = [
    {name: "정선아"},
    {name: "홍길동"},
];

const finded = arr5.find((item) => item.name === "정선아");
console.log(finded);


