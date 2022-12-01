//import './App.css';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import "./App.scss";
import AllProducts from './pages/AllProducts';
import {  Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'; 


function App() {

const location = useLocation();


  return (
  <>
  
    <AnimatePresence>
    <Switch location={location} key={location.key}  >
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
    </AnimatePresence>

    </>


  );
}

export default App
