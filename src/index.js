import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from "./components/cart/StateProvider";
import reducer, { initialState } from "./components/cart/reducer";
import { UserdataContextProvider } from "./context/UserdataContext";
import { AuthContextProvider } from "./context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
      <UserdataContextProvider>
      <StateProvider initialState={initialState} reducer={reducer} >
          <App />
      </StateProvider>
          </UserdataContextProvider>
          </AuthContextProvider>
    </Router>
  </React.StrictMode>
);


