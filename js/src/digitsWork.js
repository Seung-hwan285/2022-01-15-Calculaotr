import {OPEARLIST} from "../utils/constant.js";
import {total} from "../utils/constant.js";

export const digitsWork=(e)=>{
    let inputValue = total.innerText;
    const oper = inputValue.split('').find(v=>OPEARLIST.includes(v));


    if(oper){
        // inputValue.split(oper)[0] 하면 앞에 숫자가 제거거[1]하면 연산자제거 하고 안에 숫자추가
        inputValue=inputValue.split(oper)[1];
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


}