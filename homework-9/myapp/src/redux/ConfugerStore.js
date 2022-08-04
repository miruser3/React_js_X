
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import  { userReducer } from "../reducer/UserReducer";


  export const store =createStore(userReducer, applyMiddleware(thunk));