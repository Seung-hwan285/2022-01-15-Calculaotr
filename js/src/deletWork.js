import  {total} from "../utils/constant.js";

export const deletWork=()=>{
    const inputValue = total.innerText;
    // 오른쪽부터 삭제되게
    total.innerText = inputValue.slice(0,-1);
}