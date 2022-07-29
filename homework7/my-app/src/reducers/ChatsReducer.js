
const initialState={
    chat:[
        { id: 1, name: 'chat1', massages: 'firstmassege'  },
        { id: 2, name: 'chat2', massages: 'secont chat my massege'  },
        { id: 3, name: 'chat3', massages: 'thirtmassege'  },
        { id: 4, name: 'chat4', massages: 'fifty chat my massege'}
    ]
    
};

export const ChatsReducer = (state=initialState,action) => {
    switch (action.type) {
    
            
         
    
        default:
            return state;
    }
};

 