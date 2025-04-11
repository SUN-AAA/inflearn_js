//단락평가
function returnFalse() {
    console.log("false 함수");
    return false;
}

function returnTrue() {
    console.log("true 함수");
    return true;
}

console.log(returnFalse() && returnTrue());
//false함수, false만 출력됨 -> 단락평가 작동함
//returnFalse()라는 피연산자만 봐도 결과가 드러나기 때문
//returnTrue() 피연산자에는 접근조차 하지 않음을 알 수 있음

console.log(returnTrue() && returnFalse());
//true 함수, false 함수, false 출력됨
//returnTrue() 피연산자만 봤을때에는 결과가 드러나지 않기 때문
//returnFalse() 까지 실행하는 것을 알 수 있음

console.log(returnTrue() || returnFalse())
// true 함수, true만 출력됨 -> 단락평가 작동함
//returnTrue() 피연산자만 봐도 결과가 드러나기 때문
//returnFalse() 피연산자에는 접근조차 하지 않음


//truthy와 falsy한 값의 단락 평가도 이루어진다.
function returnFalse() {
    console.log("false 함수");
    return undefined;
}

function returnTrue() {
     console.log("true 함수");
     return 10;
}

console.log(returnTrue() || returnFalse());
//true함수, 10만 출력됨 -> 단락평가 작동함

console.log(returnFalse() && returnTrue());
//false함수, undefined만 출력됨 -> 단락평가 작동함 


//단락 평가 활용 사례
function printName(person) {
    console.log(person && person.name);
}

printName();
//undefined 출력됨.
//매개변수를 가지는 함수에서 매개변수 값이 없을 경우를 대비해 조건문을 사용하면 코드가 길어지고 복잡해짐
//단락평가를 이용하면 출력문 만으로도 매개변수 값이 없을 때를 간단히 대비할 수 있음.

function printName(person) {
    const name =  person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name: "정선아"});
//T && T의 경우 두번째 T값이 반환됨
//T || T의 경우 첫번째 T값이 반환됨 
