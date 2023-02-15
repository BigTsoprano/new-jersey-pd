//import './App.css';
import HomePage from './pages/HomePage';
import React, { Suspense } from 'react';
import "./App.scss";
import {  Switch, Route, BrowserRouter } from "react-router-dom";
import AllProducts from './pages/AllProducts';
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
        <AllProducts/>
      </Route>
      <Route path='/admin-page' exact>
        <Suspense fallback={<div>Loading...</div>}>
        <AdminPage/>
        </Suspense>
      </Route>


    </Switch>

</BrowserRouter>

</div>


  );
}

export default App
