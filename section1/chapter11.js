//함수 선언
function greeting () {
    console.log("안녕하세요.");
}

//함수 호출
console.log("호출 전");
greeting();
console.log("호출 후");

//매개변수와 인수
function getArea(width, height) {   // width와 height를 매개변수라고 한다.
    let area = width * height;

    console.log(area);
}

getArea(10, 20);
getArea(30, 20);                   //10과 20을 '인수'라고 한다.

//반환값
function getArea(width, height) {   // width와 height를 매개변수라고 한다.
    let area = width * height;

    return area;                    //리턴값(반환값)은 함수 실행의 결과가 된다.
    console.log("hello");           //리턴값 이후에는 함수가 종료되기 때문에 해당 코드는 실행되지 않는다.
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

//함수 안에 함수 (중첩 함수)
/*function getArea(width, height) {
    function another(){             //중첩함수라고 한다.
        console.log("another");
    }
    another();

    let area = width * height;

    return area;
}

let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 40);
console.log(area2);*/

//호이스팅 -> 끌어올리다 라는 뜻
//js에선 실행 전 함수를 위로 끌어올리기 때문에 함수 선언을 함수 실행 밑에 두어도 실행이 된다.