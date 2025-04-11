//스코프

//-->전역 스코프 / 지역 스코프
// 전역 스코프 : 전체 영역에서 접근 가가능
// 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1;              //전역 스코프

function funkA() {
    let b = 2;          //지역 스코프
    console.log(a);

    function funkB() {  //지역 스코프
        console.log("hello");
    }

    funkB();
}

funkA();                //출력(1)
//funkB();                //오류
//console.log(b);         //오류

if (true) {
    let c = 1;          //지역 스코프
    function funkC() {  //전역 스코프
        console.log("this is funkC");
    }
}

funkC();                //출력(this is funkC)
//console.log(c);         //오류

for(let i = 0; i < 10; i++) {
    let d = 1;          //지역 스코프
    function funkD() {  //전역 스코프
        console.log("this is funkD");
    }
}

funkD();                //출력(this is funkD)
//console.log(d);         //오류
//console.log(i);         //오류


//조건문, 반복문, 함수 등의 블록({}) 안에서 선언된 변수는 지역 스코프로 블록({}) 외부에서는 사용이 불가능하다.
//반복문에서 사용되는 i와 같은 변수 역시 지역 스코프로 반복문 외부에서는 사용이 불가능하다.
//함수 안에서 선언되는 함수 역시 지역 스코프로 블록 외부에서는 사용이 불가능하다.
//다만 조건문이나 반복문 안에서 선언되는 함수는 전역 스코프 이므로 외부에서도 사용이 가능하다.


