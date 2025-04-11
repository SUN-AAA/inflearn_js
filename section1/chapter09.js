//1. if 조건문 (if문)
let num = 5;

if (num >= 10) {
    //console.log("num은 10 이상입니다.");
    //console.log("조건이 참입니다.");
}
else if (num >= 5){
    //console.log("num은 5 이상입니다.");     //else if문은 숫자에 제한이 없다.
}
else {
    //console.log("조건이 거짓입니다.");      //if로 시작해서 끝나거나 else로 끝나야함.
}

//2. switch문
//->if문과 기능 자체는 동일, 다수의 조건을 처리할 때 if문보다 직관적.

let animal = "bear";

switch (animal){
    case "cat":{
        //console.log ("고양이");
        break;                      //break를 작성하지 않으면 만족하는 조건식 밑으로의 모든 코드가 동작 : 모든 동물이 출력됨됨
    }
    case "dog":{
        //console.log ("강아지");
        break;
    }
    case "bear":{
        //console.log ("곰");
        break;
    }
    case "snake":{
        //console.log ("뱀");
        break;
    }
    case "tiger":{
        //console.log ("호랑이");
        break;
    }
    default:{
        //console.log("그런 동물은 전 모릅니다.");
    }
}