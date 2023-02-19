//import './App.css';
import HomePage from './pages/HomePage';
import React, { Suspense } from 'react';
import "./App.scss";
import {  Switch, Route, BrowserRouter } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import Login from './pages/Login';
import Signup from './pages/Signup';

const AllProducts = React.lazy(() => import('./pages/AllProducts'));
const AdminPage = React.lazy(() => import('./pages/AdminPage'));


function App() {




  return (
 <div>
<BrowserRouter>
    <Switch   >
      <Route path='/' exact>
        <HomePage/>
      </Route>
      <Route path='/all-products' exact>
        <Suspense fallback={<LinearProgress/>}>
        <AllProducts/>
        </Suspense>
      </Route>
      <Route path='/admin-page' exact>
        <Suspense fallback={<LinearProgress/>}>
        <AdminPage/>
        </Suspense>
      </Route>
      <Route path='/login' exact>
        <Login/>
      </Route>
      <Route path='/signup' exact>
        <Signup/>
      </Route>


    </Switch>

</BrowserRouter>

</div>


  );
}

export default App
