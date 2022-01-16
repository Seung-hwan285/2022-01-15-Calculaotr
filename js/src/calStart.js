import {OPEARLIST} from "../utils/constant.js";
import {total} from "../utils/constant.js";

export const calStart =()=>{
    // 전체값
    const inputValue = total.innerText;
    // 연산자
    const oper = inputValue.split('').find(v=>OPEARLIST.includes(v));
    // 숫자
    const totalNumber = inputValue.split(oper);
    let result=0;
    const n1 =Number(totalNumber[0]);
    const n2 =Number(totalNumber[1]);
    switch (oper) {
        case '+':
            result = n1+n2;
            total.innerText=String(result);
            break;
        case '-':
            result = n1-n2;
            total.innerText=String(result);
            break
        case 'X':
            result=n1*n2;
            total.innerText=String(result);
            break
        case '/':
            result=Math.floor(n1/n2);
            total.innerText=String(result);
            break

    }

}