import { ERROR_PRODUCT, GET_PRODUCT, LOADING } from "./actionType";

export const GetProductApp = (result) => ({
    type: GET_PRODUCT,
    payload: result
})
export const LoadProductApp = () => ({
    type: LOADING
})
export const ErorProductApp = (error) => ({
    type: ERROR_PRODUCT, 
    payload: error.toString()
})
