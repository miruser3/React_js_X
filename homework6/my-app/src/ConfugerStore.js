import { combineReducers, createStore } from "redux";
import {ChatsReducer} from './redux/ChatsReducer'
import { MassegeReducer } from "./redux/MassegeReducer";

export const store = createStore(combineReducers( {
    chat:ChatsReducer,
    massege:MassegeReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());