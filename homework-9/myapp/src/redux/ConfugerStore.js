
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import UserReducer from "../reducer/UserReducer";


  export const store =createStore(UserReducer, applyMiddleware(thunk));