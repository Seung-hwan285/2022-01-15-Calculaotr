// TODO 계산기

// -[] 2개 숫자에 대해 덧샘,뺄셈,나눗셈,곱셈이 가능하다
// -[] AC 버튼을 누르면 0으로 초기화한다.
// -[] 숫자는 한번에 최대 3자리 수까지 입력 가능하다
// -[] 계산 결과를 표현할때 소수점 이하는 버림한다.



const $=(s)=>document.querySelector(s);

const total = $("#total");
const digits = $(".digits");



digits.addEventListener("click",(e)=>{
    total.innerText= e.target.innerText;
});