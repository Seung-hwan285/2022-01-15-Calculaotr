// TODO 계산기

// -[] 2개 숫자에 대해 덧샘,뺄셈,나눗셈,곱셈이 가능하다.
// -[x] delete 버튼을 누르면 삭제된다.
// -[] AC 버튼을 누르면 0으로 초기화한다.
// -[] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// -[] 계산 결과를 표현할때 소수점 이하는 버림한다.



const $=(s)=>document.querySelector(s);

const total = $("#total");
const digits = $(".digits");
const operation =$(".operations");
const delet = $(".delete");


const OPEARLIST = ["/","+","-","X"];




operation.addEventListener("click",(e)=>{

    let inputValue = total.innerText;

    if(isNaN(Number(inputValue[inputValue.length-1]))){
        alert('숫자먼저 입력해주세요');
    }
    else{

        total.innerText += e.target.innerText;
    }




});

digits.addEventListener("click",(e)=> {
    let inputValue = total.innerText;
    const oper = inputValue.split('').find(v=>OPEARLIST.includes(v));


    if(oper){
        // inputValue.split(oper)[0] 하면 앞에 숫자가 제거거[1]하면 연산자제거 하고 안에 숫자추가
        inputValue=inputValue.split(oper)[1];
        console.log(inputValue);

    }


    if(inputValue.length<3){

        if (total.innerText === "0") {
            total.innerText = e.target.innerText;
        } else {
            total.innerText += e.target.innerText;
        }
    }
    else{
        alert("3자리 이하만 입력");
    }

});


delet.addEventListener("click",(e)=>{
    const inputValue = total.innerText;
    // 오른쪽부터 삭제되게
    total.innerText = inputValue.slice(0,-1);
});




