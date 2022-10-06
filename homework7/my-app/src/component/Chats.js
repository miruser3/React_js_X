import { List, ListItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Chats = () => {
    const chats = useSelector(state => state.chat.chat);
    return (
        <div>
           
           <List>
                {chats.map((item, id) => (
                    <ListItem key={id}>
                        <NavLink  to={`/product/${item.id}`} style={{ fontSize:'30px',color:'blue',marginRight: '180px' }}>
                            {item.name}
                        </NavLink>
                    </ListItem>
                ))}
            </List>

        </div>
    );
};

export default Chats;