import { DELETE_MASSEGE } from "../store/actionTape";



const middleware = store => next => action => {

    if (action.type === DELETE_MASSEGE) {
        setTimeout(() => {
           alert('masseges delete in middleware');
        
        }, 1000);

    }

    return next(action)
};

export default middleware;