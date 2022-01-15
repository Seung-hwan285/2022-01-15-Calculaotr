// TODO 계산기

// -[] 2개 숫자에 대해 덧샘,뺄셈,나눗셈,곱셈이 가능하다
// -[] AC 버튼을 누르면 0으로 초기화한다.
// -[] 숫자는 한번에 최대 3자리 수까지 입력 가능하다
// -[] 계산 결과를 표현할때 소수점 이하는 버림한다.



const $=(s)=>document.querySelector(s);

const total = $("#total");
const digits = $(".digits");
const operation =$(".operations");



const OPEARLIST = ["/","+","-","X"];



operation.addEventListener("click",(e)=>{

        total.innerText += e.target.innerText;


});
// 1. 특수문자 분리
// 2. 숫자 길이 따로 빼기
// 3. 숫자길이 3보다 크면 경고창 발생
// const isVaild =()=>{
//
//
//
//     // 연산자없을때
//     if(!oper){
//         return inputValue.length < 3;
//     }
//
// }


digits.addEventListener("click",(e)=> {
    const inputValue = total.innerText;
    const oper = inputValue.split('').find(v=>OPEARLIST.includes(v));


    console.log(inputValue);
    console.log(oper);


    if(inputValue.length<3){
        if (total.innerText === "0") {
            total.innerText = e.target.innerText;
        } else {
            total.innerText += e.target.innerText;

        }

    }
    else{
        return alert("3자리 이하만 입력");
    }






});



