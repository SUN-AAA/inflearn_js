function funkA() {
    //console.log("funcA");
}

let varA = funkA;   //변수에 함수를 넣는다.
//console.log(varA);  //선언된 함수(글자 그대로) 출력된다.
//varA();             //변수에 함수를 담으면 변수명();의 형태로 함수를 호출할 수 있다.


//1. 함수 표현식 : 값으로써 취급됨.
let varB = function funkB() {       //변수에 바로 함수값을 넣을 수 있음음
    //console.log("funkB");
}

//varB();                             //함수값(funkB)가 출력됨.
//funkB();                            //funkB라는 함수는 선언된 것이 아니기 때문에 위와 같은 형태로는 사용 불가.


let varB2 = function() {            //어차피 함수는 선언되지 않으므로 함수의 이름을 붙여주지 않아도 됨.
    //console.log("funkB2");          //이를 "익명함수"라고 부름.
}

//varB2();  

//2. 화살표 함수

//형태 1
let varC = () => {
    return 1;
}
//console.log(varC());

//형태 2
let varC2 = () => 1;
//console.log(varC2());

//매개변수
let varC3 = (value) => value + 1;
//console.log(varC2(10));

let varC4 = (value) => {
    //console.log(value);
    return value + 1;
}
//console.log(varC4(10));