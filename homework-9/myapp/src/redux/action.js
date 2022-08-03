import * as types  from "./actionTape";


export const registerStart=()=>({
    type:types.REGISTER_START
});
export const registerSuccess=(data)=>({
    type:types.REGISTER_SUCCESS,
    payload:data
});