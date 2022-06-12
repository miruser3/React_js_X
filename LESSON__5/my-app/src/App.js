import './App.css';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const value=useSelector(state=>state.count);
    const dispatch=useDispatch();

 

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontSize: 60 }}> {value} </div>
        <div style={{ display: 'flex' }}>
          <button style={{ padding: '20px',marginRight:'10px' }}onClick={()=>dispatch({type:'plus'})}>+</button>
          <button style={{ padding: '22px' }} onClick={()=>dispatch({type:'minus'})}>-</button>
        </div>

        
      </header>
    </div>
  );
}

export default App;
