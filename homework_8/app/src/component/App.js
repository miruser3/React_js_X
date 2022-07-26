import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Massege from './Massege';
import { useEffect, useState } from 'react';
function App() {
   const [api,setapi]=useState([]);

  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setapi(data));
},[])

  return (
    <div className="App">
      <header className="App-header">
     {api.map((e)=>(
      <div key={e.id}>{e.name}</div>
     ))}

     <Routes>
      <Route path='/' element={<Massege/>}/>
     </Routes>
     </header>
    </div>
  );
}

export default App;
