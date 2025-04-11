//1. null 병합 연산자 -> 존재하는 값을 추려내는 기능 
//-> null이나나 undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;    //var1과 var2중 null과 undefined가 아닌 값(var2)를 골라 대입한다.
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;    //둘다 null이나 undefined가 아닐 결우 맨 처음 값을 대입한다.
//console.log(var4);
//console.log(var5);
//console.log(var6);

let userName = "정선아";
let userNickName = "jsa";

let displayName = userName ?? userNickName;
//console.log(displayName);

//2. typeof 연산자
//-> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;

var7 = "hello";     //js에선 변수의 자료형이 자주 바뀐다. -> 현재 해당 변수의 자료형이 무엇인지 알고싶을 때 typeof 연산자를 사용한다.
t1 = typeof var7;
//console.log(t1);    //string 출력됨.

var7 = 20;
t1 = typeof var7;
//console.log(t1);    //number 출력됨.

var7 = true;
t1 = typeof var7;
//console.log(t1);    //boolean 출력됨.

//3. 삼항 연산자 -> 항을 3개 사용하는 연산자
//-> 조건식을 이용해 참, 거짓일 때의 값을 다르게 반환

//요구사항 : 변수 res에 var8의 값이 짝수 -> "짝수". 홀수 -> "홀수"
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
//(조건식) ? (참일때) : (거짓일 때)
//console.log(res);