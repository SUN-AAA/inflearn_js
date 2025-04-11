//1. Number Type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;     //양의 무한대를 뜻한다.
let mint = -Infinity;   //음의 무한대를 뜻한다.

let nan = NaN;          //수치 연산에 실패했을 경우 값을 NaN으로 표현한다.
//console.log(1 * "hello");   //이때 출력값은 NaN이 된다. (js에선 수치련산에 실패하더라도 프로그램이 종료되지 않는다.)

/*console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);*/   //js에선 모듈러 연산이라고 부른다.


//2. String Type
let myName = "정선아";
let myLocation = "봉선동";
let introduce = myName + myLocation;    //js에선 문자열 덧셈도 가능하다.
//console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;  //``(esc 아래)을 사용하면 변수를 동적으로 문자열에 집어넣을 수 있다. 이를 템플릿 리터럴럴 문법이라고 한다.
//console.log(introduceText);

//3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type (아무것도 없다.)
let empty = null;

//5. Undefined Type
let none;
//console.log(none);  //이때 출력하면 undefined가 출력된다.

//null과 undefined의 차이점 : null은 개발자가 직접 넣어주는 값, undefined는 값이 없을 때 프로그램이 자동으로 넣어주는 '무'의 값값
