//원시타입 vs 객체타입
//원시타입 : 값을 저장
//객체타입 : 참조값(주소)을 저장

let a = 1;
let b = a;
let c = 1;
console.log(a === b);
//true 출력
console.log(a === c);
//true 출력

let o1 = {name: "정선아",};
let o2 = o1;
let o3 = { ...o1 };
console.log(o1 === o2);
//true 출력(얕은 복사, 같은 참조값을 가짐)
console.log(o1 === o3);
//false 출력(깊은 복사, 프로퍼티의 값은 같으나 참조값이 다름.)
//얕은 비교(참조값을 기준으로 비교)

console.log(JSON.stringify(o1) === JSON.stringify(o3));
//true 출력
//깊은 비교(객체를 문자열로 변환하여 비교)

