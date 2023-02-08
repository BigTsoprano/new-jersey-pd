//import './App.css';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import "./App.scss";
import AllProducts from './pages/AllProducts';
import {  Switch, Route } from "react-router-dom";

import Terms from './pages/Terms';


function App() {




  return (
  <>
  

    <Switch   >
      <Route path='/' exact>
        <HomePage/>
      </Route>
      <Route path='/all-products' exact>
        <AllProducts/>
      </Route>
      <Route path='/admin-page' exact>
        <AdminPage/>
      </Route>
<Route path='/terms' exact>
        <Terms/>
      </Route>

    </Switch>


    </>


  );
}

export default App
