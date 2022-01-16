import {OPEARLIST} from "../utils/constant.js";
import {total} from "../utils/constant.js";

export const operationWork =(e)=>{
    let inputValue = total.innerText;
    const oper = inputValue.split('').find(v=>OPEARLIST.includes(v));

    if(e.target.innerText ==='='){
        return;
    }

    if(isNaN(Number(inputValue[inputValue.length-1]))){
        alert('숫자먼저 입력해주세요');
    }

    else{

        total.innerText +=e.target.innerText;
    }
}