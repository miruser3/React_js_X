import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './component/Home';
import Profile from './component/Profile';
import Massege from './component/Massege';
import Chats from './component/Chats';
import { List, ListItem } from '@mui/material'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div className='navlink'>
      
          <List sx={{ width: '100%', maxWidth: '360', fontSize: '35px',marginleft: '76px', display: 'flex', justifyContent: 'space-between' }}>
            
            <ListItem><NavLink to={'/home'}>home</NavLink></ListItem>
            
            <ListItem><NavLink to={'/profile'}>profile</NavLink></ListItem>
            
            <ListItem><NavLink to={'/Chats'}>chat</NavLink></ListItem>
          </List>

        </div>
        <Routes >
          <Route path="/home" exact element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/product/:id" element={<Massege />} />
          <Route path="/Chats" element={<Chats />} />
        </Routes>
       
      </header>
    </div>
  );
}

export default App;
