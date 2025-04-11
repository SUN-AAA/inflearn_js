//반복문으로 배열과 객체 순회하기
//1. 배열 순회
let arr = [1, 2, 3];

//1) 배열 인덱스 이용
for(let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8]

for(let i = 0; i < arr2.length; i++) {
    //console.log(arr2[i]);
}

//2) for of 반복문 이용
for(let item of arr) {
    //console.log(item);
}
//of 뒤에 있는 배열의 요소를 순서대로 꺼내 item에 각 반복마다 저장함

//2. 객체 순회
let person = {
    name : "정선아", 
    age: 20,
    hobby : "study",
};

//1) Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for(let i = 0; i < keys.length; i++) {
    //console.log(keys[i]);
}

//key와 value 순회
for(let key of keys) {
    const value = person[key];
    //console.log(key, value);
}

//2) Object.values 사용
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(person);

for(let value of values) {
    //console.log(value);
}

//3) for in
for (let key in person) {
    const value = person[key];
    console.log(key, value);
}

//for of는 배열 순회, for in은 객체 순회 
