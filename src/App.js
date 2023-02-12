//import './App.css';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import "./App.scss";
import AllProducts from './pages/AllProducts';
import {  Switch, Route, BrowserRouter } from "react-router-dom";



function App() {




  return (
 
<BrowserRouter>
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


    </Switch>

</BrowserRouter>

 


  );
}

export default App
