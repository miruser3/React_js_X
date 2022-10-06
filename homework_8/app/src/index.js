import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/ConfugerStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root'));


let persistor = persistStore(store);
root.render(
  <PersistGate persistor={persistor}>
 <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
  </PersistGate>
 


);


