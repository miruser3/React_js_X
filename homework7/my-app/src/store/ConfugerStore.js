import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import middleware from '../component/middleware';
import { ChatsReducer } from '../reducers/ChatsReducer';
import { MassegeReduser } from '../reducers/MassegeReduser';



 
/*const = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state", store.getState());
    console.log("action", action);
    result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
};*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    chat: ChatsReducer,
    massege: MassegeReduser
})
export const store = createStore(reducer, composeEnhancers(applyMiddleware(middleware)));