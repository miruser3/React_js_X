import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import {chatSelector} from '../ChatSelector'
const ChatList = () => {
    const categories = useSelector(chatSelector);
   
    return (
        <div>
           <List>
                {categories.map((category, id) => (
                    <ListItem key={id}>
                        <NavLink  to={`/product/${category.id}`} style={{ fontSize:'30px',color:'blue',marginRight: '180px' }}>
                            {category.name}
                        </NavLink>
                    </ListItem>
                ))}
            </List>
     
        </div>
    );
};

export default ChatList;