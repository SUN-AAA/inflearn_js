//1. 객체 생성
let obj1 = new Object();    //객체 생성자
let obj2 = {};              //객체 리터럴 (대부분의 경우 이 방법을 사용)


//2. 객체 프로퍼티(객체 속성)(name, age, hobby)
//형식 [key : value,]
//key로는 문자열과 숫자만 사용할 수 있으며 value에는 자료형 제한이 없다.
//key값이 문자열인 경우 따옴표를 적지 않아도 되나, 예외적으로 띄어쓰기가 포함되어 있을 경우 따옴표를 적어주어야 한다.
let person = {
    name : "정선아",
    age : 20,
    hobby : "x",
    job : "학생",
    //extra : funkA(),
    extra2 : true,
    10 : 20,
    "like cat" : true,
};

// 3.객체 프로퍼티를 다루는 방법

// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
// 만약 존재하지 않는 프로퍼티에 접근하려 한다면 undefined가 출력된다.
let name = person.name;
console.log(name);

let age = person["age"];    //반드시 쌍따옴표 안에 프로퍼티를 작성해줘야 한다.
console.log(age);

let property = "hobby";     //property라는 변수에 hobby 프로퍼티의 값인 x가 대입된다.
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "student";
person["favoriteFood"] = "마라탕";

console.log(person);

// 3.3프로퍼티를 수정하는 방법
person.job = "educator";
person.favoriteFood = "떡볶이";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1);

let result2 = "cat" in person;
console.log(result2);