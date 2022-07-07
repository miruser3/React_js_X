import List from '@mui/material/List';
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import Profile from './components/Profile';
import Home from './components/Home';
import Chats from './components/Chats';
import Notfound from './components/Notfound';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="App">

      <div>
      <List sx={{ width: '100%', maxWidth: '360', fontSize: '35px', display: 'flex', justifyContent: 'space-between' }}>
        <ListItem>
          <NavLink to='/'>Home</NavLink>
        </ListItem>

        <ListItem>
          <NavLink to='/profile' >Profile</NavLink>
        </ListItem>


        <ListItem>
          <NavLink to='/chats'>chat</NavLink>
        </ListItem>
      </List>
      </div>


     <div>
     <Routes>
        <Route path='/Home' exact element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Chats />} />
        <Route path='/ControlPanel/:id' element={<ControlPanel />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
     </div>

    </div>
  );
}

export default App;
