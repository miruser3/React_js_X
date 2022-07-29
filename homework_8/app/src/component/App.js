import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Massege from './Massege';


function App() {
  //const [api, setapi] = useState([]);
  /* const getProduct = () => {
     return fetch("https://jsonplaceholder.typicode.com/comments")
       .then(response => response.json())
       .then(data => dispatch({
         type: GET_PRODUCT,
         payload: data
       }))
       .catch(error => dispatch({
         type: EROR,
         payload: error
       })
       );
   }*/
 
  /*useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setapi(data));
  },[])*/

  return (
    <div className="App">
      <header className="App-header">
       <Massege/>

        <Routes>
          <Route path='/' element={<Massege />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
