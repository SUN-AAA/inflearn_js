// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};


//상수 객체도 프로퍼티를 추가하고 수정하고 삭제하는 것이 가능하다.
animal.age = 2;
animal.name = "까망이";
delete animal.color;

console.log(animal);

//하지만 아예 새로운 값을 할당하는 것은 문제가 된다.
//animal = 123;
//console.log(animal);    //오류

// 2. 매서드
// --> 값이 함수인 프로퍼티를 말함
// 보통 객체의 동작응 정의할 때 사용한다.

const person = {
    name : "정선아",
    //매서드 선언
    sayHi() {
        console.log("안녕");
    },
};

person.sayHi;
person["sayHi"]();