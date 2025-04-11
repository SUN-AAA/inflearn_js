//1. 콜백함수
function main(value) {
    console.log(1);
    console.log(2);
    console.log(value);     //함수 선언된대로 출력
    value();                //sub함수를 실행시킨 후 결괏값을 출력함.
    console.log("end");
}

//ver 1. 콜백 함수 선언 후 실행행
function sub() {
    console.log("i am sub");
}

main(sub);       //여기서 sub와 같이 나중에 실행되는 함수를 콜백함수라고 함.

//ver2. 실행과 동시에 콜백 함수 선언언
main(function sub() {
    console.log("i am sub");
})

//ver3. 화살표 함수 응용
main( () => {
    console.log("i am sub");
});


//2. 콜백함수의 활용
function repeat(count) {
    for(let idx = 0; idx <= count; idx++) {
        console.log(idx);
    }
}

function repeatDouble(count) {
    for(let idx = 0; idx <= count; idx++) {
        console.log(idx * 2);
    }
}

repeat(5);
repeatDouble(5);

//위와같이 비슷한 구조의 함수를 여러번 선언해야하는 코드에서 콜백함수를 유용하게 사용할 수 있다.

function repeat(count, callback) {
    for(let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx);
});

repeat(5, function (idx) {
    console.log(idx * 2);
});

repeat(5, (idx) => { 
    console.log(idx * 3);
});