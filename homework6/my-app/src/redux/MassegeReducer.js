import {ADD_MASSEGE,DELETE_MASSEGE} from '../Actiontype'
const initialState = {
    masseges: [
        { id: 1, chatId: 1, massages: 'firstmassege' },
        { id: 2, chatId: 2, massages: 'secont chat my massege' },
        { id: 3, chatId: 3, massages: 'thirtymassege' },
        { id: 4, chatId: 4, massages: 'fifty chat my massege' }
    ]

};

export const MassegeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MASSEGE:
            return {
                ...state,
                masseges: state.masseges.filter((i)=>(i.id !== action.payload))
            }
            case ADD_MASSEGE:
                return {
                   ...state,
                   masseges: [...state.masseges, action.payload]
                }
    
        default:
            return state
    }
};

