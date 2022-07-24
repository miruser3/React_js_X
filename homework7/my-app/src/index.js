import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/ConfugerStore';
import { StyledEngineProvider } from '@mui/material/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </StyledEngineProvider>
    </Provider>
  </BrowserRouter>

);


