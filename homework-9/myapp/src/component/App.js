import '../App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
       </Routes>
      </header>
    </div>
  );
}

export default App;
