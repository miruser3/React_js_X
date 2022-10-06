import {  ERROR_PRODUCT, GET_PRODUCT, LOADING } from "./actionType";

const initialState={
    product:[],
    loading:false,
    error:null
}
export const ProductReducer = (state=initialState,action) => {
    switch (action.type) {
        case LOADING:
            return{
                ...state,
               loading:true
            }

        case GET_PRODUCT:
            return{
               ...state,
               product:action.payload,
               loading:false
              
            }
         case ERROR_PRODUCT:
            return{
                ...state,
                error:action.payload,
                loading:false
            }
        
        default:
            return state;
    }
};

