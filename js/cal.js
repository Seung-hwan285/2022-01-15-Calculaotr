// TODO 계산기

// -[x] 2개 숫자에 대해 덧샘,뺄셈,나눗셈,곱셈이 가능하다.
// -[x] delete 버튼을 누르면 삭제된다.
// -[x] AC 버튼을 누르면 초기화한다.
// -[x] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// -[x] 계산 결과를 표현할때 소수점 이하는 버림한다.


import {digitsWork} from "./src/digitsWork.js";
import {operationWork} from "./src/operationWork.js";
import {deletWork} from "./src/deletWork.js";
import {calStart} from "./src/calStart.js";
import {modifWork} from "./src/modifWork.js";

const $=(s)=>document.querySelector(s);


const total = $("#total");
const digits = $(".digits");
const operation =$(".operations");
const delet = $(".delete");
const equlSing = $("#equal-sign");
const modif =$(".modifiers");





digits.addEventListener("click",digitsWork);
operation.addEventListener("click",operationWork);
delet.addEventListener("click",deletWork);
equlSing.addEventListener("click",calStart);
modif.addEventListener("click",modifWork);

