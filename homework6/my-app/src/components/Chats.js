import React from 'react';

import ChatList from './ChatList';
import ControlPanel from './ControlPanel';



    
const Chats = () => {
  
    return (
        <div className="container">
         <div><ChatList/></div>
         <div><ControlPanel/></div>
       
        </div>
    );
};

export default Chats;