//import './App.css';
import HomePage from './pages/HomePage';
import React from 'react';
import "./App.scss";
import {  Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AllProducts from './pages/AllProducts';
import AdminPage from './pages/AdminPage';
import { useAuthContext } from './hooks/useAuthContext';

function App() {

const { user } = useAuthContext()


  return (
 <div>
<BrowserRouter>
    <Switch   >
      <Route path='/' exact>
        <HomePage/>
      </Route>
      <Route path='/all-products' exact>
        <AllProducts/>
      </Route>
      <Route path='/admin-page' exact>
       {user ? <AdminPage/> : <Redirect to='/login'/>}
      </Route>
      <Route path='/login' exact>
        {!user ? <Login/> : <Redirect to='/admin-page'/>}
      </Route>
      <Route path='/signup' exact>
       {!user ? <Signup/> : <Redirect to='/admin-page'/>}
      </Route>


    </Switch>

</BrowserRouter>

</div>


  );
}

export default App
