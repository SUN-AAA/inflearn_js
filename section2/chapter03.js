//구조 분해 할당

//1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// -> 비효율적

let [one, two, three, four] = arr;
console.log(one, two, three, four);
//four에는 undefined

// let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);
//이런방식으로 바로 four에 값을 할당해도 됨.

// let [one, two] = arr;
// console.log(one, two);
//모든 요소를 변수에 할당하지 않아도 됨.

//2. 객체의 구조 분해 할당
let person = {
    name: "정선아",
    age: 20,
    hobby: "study",
};

// let {name, age, hobby} = person;
// console.log(name, age, hobby);
//구조 분해 할당 할 때 중괄호 사용

// let {name, age, hobby, extra = 10} = person;
// console.log(name, age, hobby, extra);
//이런 방식으로 바로 extra에 값을 할당해도 됨.

let {
    name,
    age: myAge,
    hobby,
    extra = "hello",
} = person;

//console.log(name, myAge, hobby, extra);
//myAge에 age 프로퍼티의 값이 할당된 것처럼 객체의 구조 분해 할당에서는 프로퍼티의 값을 또다른 변수에 저장할 수도 있다. 


//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
};

func(person);
//매개변수로 객체를 넘기면 구조분해 할당을 이용하여 프로퍼티의 값을 변수로 반환해 매개변수의 값으로 줄 수 있다.
