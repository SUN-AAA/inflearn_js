// 1. Falsy한 값 (7가지지)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f2) {
    console.log("Talsy");
}

// 2. Truthy한 값 (7가지 Falsy한 값들을 제외한 모든 값)
let t1 = 123;
let t2 = "hello";
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) { 
    console.log("Truthy");
}

// 3. 활용 사례

function printName(person) {
    if (person === undefined || person === null) {      //조건식이 번거롭고 복잡해짐
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = null;
printName(person);
person = undefined;
printName(person);
person = {name : "정선아",};
printName(person);


//falsy를 이용해 조건식 개선
function printName2(person) {
    if (!person) {   
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

person = null;
printName(person);
person = undefined;
printName(person);
person = {name : "정선아",};
printName(person);