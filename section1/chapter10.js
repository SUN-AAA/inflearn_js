// for 반복문
/*for (초기식; 조건식; 증감식) {
    console.log("반복!");
}*/

for (let idx=0; idx < 5; idx++){
    console.log(idx);
}

for (let idx=1; idx < 10; idx++){
    console.log(idx);

    if(idx >= 5){
        break;          //반복문 자체를 종료함.
    }
}

for (let idx=1; idx < 10; idx++){
    if(idx % 2 ===0){
        continue;       //조건이 참이라면 진행중인 회차는 건너뛰고 다음 회차로 넘어가 다시 반복복
    }

    console.log(idx);
}