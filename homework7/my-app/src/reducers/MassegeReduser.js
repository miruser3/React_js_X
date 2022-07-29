import { ADD_MASSEGE, DELETE_MASSEGE } from "../store/actionTape";

const initialState = {
    massege: [
        { id: 1, chatId: 1, title: 'chat1' },
        { id: 2, chatId: 2, title: 'chat2' },
        { id: 3, chatId: 3, title: 'chat3' },
        { id: 4, chatId: 4, title: 'chat4' }
    ]
}
export const MassegeReduser = (state = initialState, action) => {
    switch (action.type) {
       case ADD_MASSEGE:
       return{
            ...state,
            massege: [...state.massege, action.payload]
           
       }
       case DELETE_MASSEGE:
        return{
            ...state,
            massege:state.massege.filter((i)=>(i.id !== action.payload))
        }


        default:
            return state;
    }
};

