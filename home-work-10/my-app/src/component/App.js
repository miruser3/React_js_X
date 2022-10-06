import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import AboutPage from '../pages/AboutPage';
import Loyout from './Loyout';
import ProtectedRotes from './ProtectedRotes';
import AddCompactPage from '../pages/AddCompactPage';
import View from './View';
function App() {

  return (
    <div className="App" >
      <header className="App-header">


        <Routes>
          <Route path={"/"} element={<Loyout />}>
            <Route path={"/"} element={<ProtectedRotes><Homepage /></ProtectedRotes>} />
            <Route path={"/AddCompactPage"} element={<ProtectedRotes><AddCompactPage /></ProtectedRotes>} />
            <Route path={"/update/:id"} element={<ProtectedRotes><AddCompactPage /></ProtectedRotes>} />
            <Route path={"/view/:id"} element={<ProtectedRotes><View /></ProtectedRotes>} />
            <Route path={"/RegisterPage"} element={<RegisterPage />} />
            <Route path={"/LoginPage"} element={<LoginPage />} />
            <Route path={"/AboutPage"} element={<AboutPage />} />
          </Route>

        </Routes>



      </header>
    </div>
  );
}

export default App;
