//1. spread 연산자
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할


//1) 배열
// let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
//와 같은 코드를 작성하고 싶을 때

let arr1 = [1, 2, 3];
let arr2 = [4,...arr1, 5, 6];
console.log(arr2);
//spread 연산자(...)을 이용하여 표현하면 효율적임


//2) 객체
let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};
console.log(obj2);

//3) 함수
function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);
//배열의 값들이 함수의 매개변수로 활용됨

//Rest 매개변수
//-> 나머지 매개변수
//-> 함수에 필요한 매개변수가 많을 때 '...매개변수 이름'로 한번에 표현 가능, 배열 형태로 전달됨

// function funcB(...rest) {
//     console.log(rest);      //[1, 2, 3] 출력됨
// }

// funcB(...arr1);

function funcB(one, ...rest) {
    console.log(rest);      //[2, 3] 출력됨
}

funcB(...arr1);
//참고로 rest 매개변수 뒤에는 추가적인 매개변수가 올 수 없음.(앞에는 올 수 있음)